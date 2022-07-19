export interface Roles{
    supervisor: boolean;
    alumno: boolean;
    secretaria: boolean;
}

export interface UserI{
    email:string;
    password?:string;
    roles?: Roles;
    displayName?:string;
    photoURL?:string;
    uid?:string;
    phoneNumber?:string;
}