import { Injectable } from '@nestjs/common';
import { Cuenta, CuentaStatus } from './cuentas.entity';
import {v4} from 'uuid';
import { UpdateClassDto } from './dto/account.dto';

@Injectable()
export class CuentasService {

    private cuentas: Cuenta[] = [
        {
            "id": '1',
            "razonSocial": "Altus Soluciones Administrativas SC",
            "banco": "Bajio",
            "numeroCuenta": "263725650201",
            "numeroClabe": "030680900021119017",
            "rfc": "ASA140508H89",
            "active": true,
            "status": CuentaStatus.DONE
        },
        {
            "id": '7',
            "razonSocial": "Altus Soluciones Administrativas SC",
            "banco": "Bajio USD",
            "numeroCuenta": "263725650201",
            "numeroClabe": "030680900021119017",
            "rfc": "ASA140508H89",
            "active": true,
            "status": CuentaStatus.DONE
        },
        {
            "id":"2",
            "razonSocial": "Grupo Rustur SA de CV",
            "banco": "Santander",
            "numeroCuenta":"65507728513",
            "numeroClabe":"014680655077285130",
            "rfc":"GRU1807124Y6",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"3",
            "razonSocial": "Alpria SA de CV",
            "banco": "Santander",
            "numeroCuenta":"65506312062",
            "numeroClabe":"014680655063120623",
            "rfc":"ALP1702144R7",
            "active":false,
            "status":CuentaStatus.PENDING
        },
        {
            "id":"4",
            "razonSocial": "Alpria SA de CV",
            "banco": "Bajio",
            "numeroCuenta":"261470410201",
            "numeroClabe":"030680900019327947",
            "rfc":"ALP1702144R7",
            "active":false,
            "status":CuentaStatus.DONE
        },
        {
            "id":"5",
            "razonSocial": "Alpria SA de CV",
            "banco": "Banorte",
            "numeroCuenta":"0882767567",
            "numeroClabe":"072680008827675673",
            "rfc":"ALP1702144R7",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"6",
            "razonSocial": "Alpria SA de CV",
            "banco": "Afirme",
            "numeroCuenta":"16291008376",
            "numeroClabe":"062680162910083769",
            "rfc":"ALP1702144R7",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"8",
            "razonSocial": "Aham Comercial SA de CV",
            "banco": "Bajio",
            "numeroCuenta":"276111440201",
            "numeroClabe":"030680900021034590",
            "rfc":"ACO170214RI9",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"9",
            "razonSocial": "Grupo Rustur SA de CV",
            "banco": "HSBC",
            "numeroCuenta":"4061975611",
            "numeroClabe":"021680040619756117",
            "rfc":"GRU1807124Y6",
            "active":false,
            "status":CuentaStatus.PENDING, 
        },
        {
            "id":"10",
            "razonSocial": "Vendete Online MX SA de CV",
            "banco": "Santander",
            "numeroCuenta":"65507689784",
            "numeroClabe":"014680655076897846",
            "rfc":"VOM180712QI1",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"11",
            "razonSocial": "Vendete Online MX SA de CV",
            "banco": "BanRegio",
            "numeroCuenta":"168986020011",
            "numeroClabe":"058680000003870641",
            "rfc":"VOM180712QI1",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"12",
            "razonSocial": "Vendete Online MX SA de CV",
            "banco": "Afirme",
            "numeroCuenta":"16291008198",
            "numeroClabe":"062680162910081981",
            "rfc":"VOM180712QI1",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"13",
            "razonSocial": "Luve Manager SA de CV",
            "banco": "Santander",
            "numeroCuenta":"65507694445",
            "numeroClabe":"014680655076944456",
            "rfc":"LMA151019MU9",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"14",
            "razonSocial": "Luve Manager SA de CV",
            "banco": "Bajio",
            "numeroCuenta":"276182970201",
            "numeroClabe":"030680900021042524",
            "rfc":"LMA151019MU9",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"15",
            "razonSocial": "Luve Manager SA de CV",
            "banco": "HSBC",
            "numeroCuenta":"4068363753",
            "numeroClabe":"021680040683637534",
            "rfc":"LMA151019MU9",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"16",
            "razonSocial": "Dubai Investment SA de CV",
            "banco": "Santander",
            "numeroCuenta":"65507652330",
            "numeroClabe":"014680655076523301",
            "rfc":"DIN170214RA9",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"17",
            "razonSocial": "Interacciones Zavlin SA de CV",
            "banco": "BanRegio",
            "numeroCuenta":"168991410013",
            "numeroClabe":"058680000002371921",
            "rfc":"IZA120217TF3",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"18",
            "razonSocial": "Yaeta Development Group SA de CV",
            "banco": "ASP Integra",
            "numeroCuenta":"1000000111100002",
            "numeroClabe":"659803000000004942",
            "rfc":"YDG170214DU5",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"19",
            "razonSocial": "Yaeta Development Group SA de CV",
            "banco": "Azteca",
            "numeroCuenta":"",
            "numeroClabe":"",
            "rfc":"YDG170214DU5",
            "active":false,
            "status":CuentaStatus.PENDING
        },
        {
            "id":"21",
            "razonSocial": "Intelnes Capital Market SA de CV",
            "banco": "Santander",
            "numeroCuenta":"65507665091",
            "numeroClabe":"014680655076650915",
            "rfc":"ICM180904JEA",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"22",
            "razonSocial": "Intelnes Capital Market SA de CV",
            "banco": "ASP Integra",
            "numeroCuenta":"",
            "numeroClabe":"",
            "rfc":"ICM180904JEA",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"23",
            "razonSocial": "Intelnes Capital Market SA de CV",
            "banco": "Santander USD",
            "numeroCuenta":"82500949407",
            "numeroClabe":"014680825009494075",
            "rfc":"ICM180904JEA",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"24",
            "razonSocial": "YC Arati SC",
            "banco": "BBVA Bancomer",
            "numeroCuenta":"0115750164",
            "numeroClabe":"012680001157501649",
            "rfc":"YAR141104631",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"25",
            "razonSocial": "YC Arati SC",
            "banco": "HSBC",
            "numeroCuenta":"4067220350",
            "numeroClabe":"021680040672203500",
            "rfc":"YAR141104631",
            "active":false,
            "status":CuentaStatus.DONE
        },
        {
            "id":"26",
            "razonSocial": "Viasunsa Ventures SA de CV",
            "banco": "Mifel",
            "numeroCuenta":"1600434698",
            "numeroClabe":"042180016004346988",
            "rfc":"VVE0911192D3",
            "active":false,
            "status":CuentaStatus.DONE
        },
        {
            "id":"27",
            "razonSocial": "Laguna Freight SA de CV",
            "banco": "HSBC",
            "numeroCuenta":"4068363985",
            "numeroClabe":"021680040683639859",
            "rfc":"LFR070523G59",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"28",
            "razonSocial": "Laguna Freight SA de CV",
            "banco": "BBVA Bancomer",
            "numeroCuenta":"0116291554",
            "numeroClabe":"012680001162915547",
            "rfc":"LFR070523G59",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"29",
            "razonSocial": "Laguna Freight SA de CV",
            "banco": "ASP Integra",
            "numeroCuenta":"",
            "numeroClabe":"",
            "rfc":"LFR070523G59",
            "active":true,
            "status":CuentaStatus.DONE 
        },
        {
            "id":"30",
            "razonSocial": "Edge Factor SA de CV",
            "banco": "HSBC",
            "numeroCuenta":"4067716621",
            "numeroClabe":"21680040677166200",
            "rfc":"EFA111118G21",
            "active":false,
            "status":CuentaStatus.DONE
        },
        {
            "id":"31",
            "razonSocial": "Edge Factor SA de CV",
            "banco": "Inbursa",
            "numeroCuenta":"50063291003",
            "numeroClabe":"036680500632910038",
            "rfc":"EFA111118G21",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"33",
            "razonSocial": "Cornejo SA de CV",
            "banco": "ASP Integra",
            "numeroCuenta":"1000000147300001",
            "numeroClabe":"659803000000066809",
            "rfc":"COR840411UR8",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"34",
            "razonSocial": "REM 360 SAPI de CV",
            "banco": "Santander",
            "numeroCuenta":"65508534542",
            "numeroClabe":"014680655085345428",
            "rfc":"REM200312KW9",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"35",
            "razonSocial": "REM 360 SAPI de CV",
            "banco": "HSBC",
            "numeroCuenta":"",
            "numeroClabe":"",
            "rfc":"REM200312KW9",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"36",
            "razonSocial": "Sindicato Obrero de Capital Humano e Industria Quimica, similares y conexos de la Republica Mexicana",
            "banco": "BBVA Bancomer",
            "numeroCuenta":"",
            "numeroClabe":"",
            "rfc":"SOC160704GK3",
            "active":false,
            "status":CuentaStatus.DONE
        },
        {
            "id":"37",
            "razonSocial": "Sindicato Obrero de Capital Humano e Industria Quimica, similares y conexos de la Republica Mexicana",
            "banco": "Santander",
            "numeroCuenta":"65505155837",
            "numeroClabe":"014225655051558374",
            "rfc":"SOC160704GK3",
            "active":false,
            "status":CuentaStatus.DONE
        },
        {
            "id":"38",
            "razonSocial": "Sindicato de Trabajadores y Obreros de la Industri Hotelera Restaurantera Alimenticia y",
            "banco": "BBVA Bancomer",
            "numeroCuenta":"00118344957",
            "numeroClabe":"",
            "rfc":"STO210426GX8",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"39",
            "razonSocial": "Interacciones Zavlin SA de CV",
            "banco": "Intercam",
            "numeroCuenta":"018980070022",
            "numeroClabe":"136680189800700223",
            "rfc":"IZA120217TF3",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"40",
            "razonSocial": "Bidentes del Real Estate Sa de CV",
            "banco": "Banorte",
            "numeroCuenta":"1026075447",
            "numeroClabe":"072680010260754479",
            "rfc":"BRE170214UV4",
            "active":false,
            "status":CuentaStatus.DONE
        },
        {
            "id":"41",
            "razonSocial": "Bidentes del Real Estate Sa de CV",
            "banco": "Bajio",
            "numeroCuenta":"76111440201",
            "numeroClabe":"030680900021034590",
            "rfc":"BRE170214UV4",
            "active":true,
            "status":CuentaStatus.DONE
        },
        {
            "id":"42",
            "razonSocial": "Aham Comercial SA de CV",
            "banco": "Kuspit",
            "numeroCuenta":"",
            "numeroClabe":"653180003810182657",
            "rfc":"ACO170214RI9",
            "active":true,
            "status":CuentaStatus.DONE
        },
    ]

    getAllAccount(){
        return this.cuentas;
    }
    createAccount(razonSocial:string,banco:string,numeroCuenta:string,numeroClabe:string,rfc:string,active:boolean,status:CuentaStatus){
        const cuenta = {
            id : v4(),
            razonSocial : razonSocial,
            banco: banco,
            numeroCuenta: numeroCuenta,
            numeroClabe: numeroClabe,
            rfc:rfc,
            active: false,
            status: CuentaStatus.PENDING
        };
        this.cuentas.push(cuenta);
        return this.cuentas;
    }
    getAccountById(id:string):Cuenta{
        return this.cuentas.find(cuentas => cuentas.id === id);
    }
    updateAccount(id:string, updatedFields: UpdateClassDto): Cuenta{
        const cuenta = this.getAccountById(id);
        const nuevaCuenta= Object.assign(cuenta,updatedFields);
        this.cuentas = this.cuentas.map((cuenta)=>(cuenta.id===id ? nuevaCuenta : cuenta));
        return nuevaCuenta;
    }
    deleteAccount(id:string){
        const cuenta = this.getAccountById(id)

    }

}
 