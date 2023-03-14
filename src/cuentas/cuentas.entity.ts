export enum CuentaStatus{
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}



export class Cuenta{
    id:string
    razonSocial:string
    banco: string
    numeroCuenta:string
    numeroClabe:string
    rfc: string
    active: boolean
    status: CuentaStatus
}

const cuenta = new Cuenta()