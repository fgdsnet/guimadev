import { GUID } from "./guid";

export class ModelBase {
    public id: GUID = new GUID();
    public name:string = "";
    public label:string = "";
    public description: string = "";
    
    constructor(text?: string );
    constructor(text: string, id: GUID | string );
    constructor(name: string, description: string );
    constructor(text?:string, id?: GUID | string, name?: string, label?: string, description?: string )
    {
        if (text && !name && !label && description){
            this.name = this.label = this.description = text;
        }
        if(id)
            if(id instanceof GUID ) this.id = id;
            else this.id = new GUID(id);
        if(name) this.name = name;
        if(label) this.label = label;
        if(description) this.description = description;
    }
}
