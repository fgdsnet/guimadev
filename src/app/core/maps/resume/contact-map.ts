import { ModelBase } from "../../models/model-base";
import { Contact } from '../../models/resume/contact';
import { ModelBaseMap } from "../model-base-map";
import { ModelMap } from "../model-map";
import { ModelMapConverter } from "../model-map-converter";

export class ContactMap implements ModelMap {
    public objToModel(obj: any): Contact {
        let contact = {
            email: (obj.email) ? ModelMapConverter.objToModel<ModelBase>(obj.email, new ModelBaseMap()) : new ModelBase(),
            phone: (obj.phone) ? ModelMapConverter.objToModel<ModelBase>(obj.phone, new ModelBaseMap()) : new ModelBase(),
            linkedin: (obj.linkedin) ? ModelMapConverter.objToModel<ModelBase>(obj.linkedin, new ModelBaseMap()) : new ModelBase(),
            github: (obj.github) ? ModelMapConverter.objToModel<ModelBase>(obj.github, new ModelBaseMap()) : new ModelBase(),
        }
        return contact as Contact;
    }

    public modelToObj(contact: Contact): any {
        return {
            email: contact.email,
            phone: contact.phone,
            linkedin: contact.linkedin,
            github: contact.github
        };
    }
}