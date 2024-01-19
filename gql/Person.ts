import {checkNumber} from "../controllers/checkNumber.ts"
import { checkDate }  from"../controllers/checkDate.ts"
import { checkCity }  from "../controllers/checkCity.ts"
import { PersonModelType, PersonModel} from "../db/Person.ts";

export const Person ={
    country :async (parent:PersonModelType):Promise<string> => {
        console.log("estoy mirando si es valido");
        const numero = parent.number;
        const data = await checkNumber(numero)
        console.log(data);
        return data
    },

    timezone :async (parent:PersonModelType):Promise<string> => {
        console.log("estoy mirando si es valido");
        const cosa = parent.number;
        const pais = await checkNumber(cosa)
        console.log(pais);
        const ciudad = await checkCity(pais)
        console.log(ciudad)
        const hora = await checkDate(ciudad)
        return hora
    },
}