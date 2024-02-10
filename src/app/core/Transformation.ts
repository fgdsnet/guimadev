/**
 * Provides transformation utilities for converting property names between different formats.
 */
export class Transformation {
    public static jsonToJSProperties(type: any): any {
        if (type.jsonToJS === undefined) {
            const map: any = {};
            type.props.forEach((p: any) => map[p.json] = { key: p.js, type: p.type });
            type.jsonToJS = map;
        }
        return type.jsonToJS;
    }
    
    public static jsToJSONProperties(type: any): any {
        if (type.jsToJSON === undefined) {
            const map: any = {};
            type.props.forEach((p: any) => map[p.js] = { key: p.json, type: p.type });
            type.jsToJSON = map;
        }
        return type.jsToJSON;
    }

    static transform(typeMap: any, val: any, type: any, getProperties: any, key: any = '', parent: any = ''): any {
        if (type === "any") return val;
        if (type === null) {
            if (val === null) return val;
            return Transformation.invalidValue(type, val, key, parent);
        }
        if (type === false) return Transformation.invalidValue(type, val, key, parent);
        let ref: any = undefined;
        while (typeof type === "object" && type.ref !== undefined) {
            ref = type.ref;
            type = typeMap[type.ref];
        }
        
        if (Array.isArray(type)) return Transformation.transformEnum(type, val);
        if (typeof type === "object") {
        
            return type.hasOwnProperty("unionMembers") ? Transformation.transformUnion(typeMap, type.unionMembers, val, getProperties)
                : type.hasOwnProperty("arrayItems")    ? Transformation.transformArray(typeMap, type.arrayItems, val, getProperties)
                : type.hasOwnProperty("props")         ? Transformation.transformObject(typeMap, getProperties(type), type.additional, val, key, ref)
                : Transformation.invalidValue(type, val, key, parent);
        }
        // Numbers can be parsed by Date but shouldn't be.
        if (type === Date && typeof val !== "number") return Transformation.transformDate(val, getProperties);
        return Transformation.transformPrimitive(type, val);
    }

    private static transformPrimitive(type: string, val: any, key: any = ''): any { 
        if (typeof type === typeof val) return val;
        return Transformation.invalidValue(type, val, key, parent);
    }

    private static transformUnion(typeMap: any, types: any[], val: any, getProperties: any, key: any = ''): any {
        // val must validate against one type in types
        const l = types.length;
        for (let i = 0; i < l; i++) {
            const typ = types[i];
            try {
                return Transformation.transform(typeMap, val, typ, getProperties);
            } catch (_) {}
        }
        return Transformation.invalidValue(types, val, key, parent);
    }
    private static transformEnum(cases: string[], val: any, key: any = ''): any {
        if (cases.indexOf(val) !== -1) return val;
        return Transformation.invalidValue(cases.map(a => { return Transformation.l(a); }), val, key, parent);
    }


    private static transformArray(typeMap: any, type: any, val: any, getProperties: any, key: any = ''): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return Transformation.invalidValue(Transformation.arrayOf("array"), val, key, parent);
        return val.map(el => Transformation.transform(typeMap, el, type, getProperties));
    }

    private static transformDate(val: any, key: any = ''): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return Transformation.invalidValue(Transformation.arrayOf("Date"), val, key, parent);
        }
        return d;
    }

    private static transformObject(typeMap: any, props: { [k: string]: any }, additional: any, val: any, key: any = '', ref: any, getProperties: any = Transformation.jsonToJSProperties): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return Transformation.invalidValue(Transformation.l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = Transformation.transform(typeMap, v, prop.type, getProperties, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = Transformation.transform(typeMap, val[key], Transformation.reference(ref), getProperties, key, ref);
            }
        });
        return result;
    }

    // Functions for data transformation

    private static invalidValue(type: any, value: any, key: any, parent: any = ''): never {
        const prettyType = Transformation.prettyTypeName(type);
        const parentText = parent ? ` on ${parent}` : '';
        const keyText = key ? ` for key "${key}"` : '';
        throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyType} but got ${JSON.stringify(value)}`);
    }

    private static prettyTypeName(type: any): string {
        if (Array.isArray(type)) {
            if (type.length === 2 && type[0] === undefined) {
                return `an optional ${Transformation.prettyTypeName(type[1])}`;
            } else {
                return `one of [${type.map(a => { return Transformation.prettyTypeName(a); }).join(", ")}]`;
            }
        } else if (typeof type === "object" && type.literal !== undefined) {
            return type.literal;
        } else {
            return typeof type;
        }
    }

    public static parse<T>(map: any, val: any, type: any): T {
        return Transformation.transform(map, val, type, Transformation.jsonToJSProperties);
    }

    public static unparse<T>(map: any, val: T, type: any): any {
        return Transformation.transform(map, val, type, Transformation.jsToJSONProperties);
    }

    public static l(type: any) {
        return { literal: type };
    }

    public static arrayOf(type: any) {
        return { arrayItems: type };
    }

    public static unionOf(...types: any[]) {
        return { unionMembers: types };
    }

    public static objectOf(props: any[], additional: any) {
        return { props, additional };
    }

    public static mapOf(additional: any) {
        return { props: [], additional };
    }

    public static reference(name: string) {
        return { ref: name };
    }
}