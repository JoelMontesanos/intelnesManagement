import { Body, Controller, Get, Post } from '@nestjs/common';
import { Delete, Param, Patch, Put } from '@nestjs/common/decorators';
import {CuentasService} from './cuentas.service';
import {CreateAccountDto, UpdateClassDto} from './dto/account.dto'

@Controller('cuentas')
export class CuentasController {
    constructor(private cuentasService:CuentasService){}


    @Get()
    getAllAccounts(){
        return this.cuentasService.getAllAccount()
    }
    @Post()
    createAccount(@Body() newAccount: CreateAccountDto){
        console.log(newAccount);
        return this.cuentasService.createAccount(newAccount.razonSocial,newAccount.banco,newAccount.numeroCuenta,newAccount.numeroClabe,newAccount.rfc,newAccount.active,newAccount.status);
        console.log('Guardando');
    }
    @Delete(':id')
    deleteAccount(@Param('id')id:string){
        this.cuentasService.deleteAccount(id);
    }
    @Patch(':id')
    updateAccount(@Param('id')id:string, @Body() updatesFields: UpdateClassDto){
       return this.cuentasService.updateAccount(id,updatesFields)
    }

}
