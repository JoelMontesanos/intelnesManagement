import {CuentaStatus} from '../cuentas.entity'
import {IsNotEmpty, IsString, IsIn} from 'class-validator';

export class CreateAccountDto{
    @IsString()
    @IsNotEmpty()
    razonSocial:string
    @IsString()
    @IsNotEmpty()
    banco: string
    @IsString()
    @IsNotEmpty()
    numeroCuenta:string
    @IsString()
    @IsNotEmpty()
    numeroClabe:string
    @IsString()
    @IsNotEmpty()
    rfc: string
    active: boolean
    @IsIn([CuentaStatus.DONE,CuentaStatus.IN_PROGRESS,CuentaStatus.PENDING])
    status: CuentaStatus.PENDING
}

export class UpdateClassDto{
    razonSocial?:string
    banco?: string
    numeroCuenta?:string
    numeroClabe?:string
    rfc?: string
    active?: boolean
    status?: CuentaStatus.PENDING
}