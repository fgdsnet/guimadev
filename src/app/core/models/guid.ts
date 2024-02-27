import { v4 as uuidv4, NIL, stringify as Stringify, version, validate as Validate } from 'uuid';

export class GUID{ 
    public uuid : string;
    public static nil = () : string => {return NIL};

    constructor(id?: string) {
        if (id == undefined || id == null || id == "" ) {
            this.uuid = uuidv4();
        }
        else {
            this.uuid = id!;
        }
    }

    public static parse = (str: string): GUID => { 
        const guid = new GUID();
        try{
            if(GUID.validateV4(str))
                guid.uuid = str;
            else throw new Error(`Unable to parse string to GUID. Invalid GUID representation`);
        }
        catch(ex: any | Error){
            console.error(
                `Error name: ${ex.name};
                message: ${ex.message};
                stack: ${ex.stack?? ""};`
            );
        }
        return guid;
    };

    public toString = (): string => {
        return this.uuid;
    }

    public stringify(): string {
        if(GUID.validateV4(this.uuid))
            return this.toString();
        else return "";
    }

    public static stringify(guid: Uint8Array): string {
        if(guid instanceof Uint8Array){
            return Stringify(guid as Uint8Array);
        }
        return "";
    }

    public static validateV4(uuid: string): boolean {
        return Validate(uuid) && version(uuid) === 4;
    }
}
