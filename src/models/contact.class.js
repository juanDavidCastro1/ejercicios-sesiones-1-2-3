import { STATE } from "./state.enum";

export class Contact{
    name = '';
    lastname = '';
    email = '';
    conect = STATE.DISCONNECTED;

    constructor(name, lastname, email, conect){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.conect = conect;
    }
}