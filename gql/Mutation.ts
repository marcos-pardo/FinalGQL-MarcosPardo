import mongoose from 'mongoose';
import { GraphQLError } from "graphql";
import { PersonModelType, PersonModel} from "../db/Person.ts";

import {checkNumber} from "../controllers/checkNumber.ts"
import { checkDate }  from"../controllers/checkDate.ts"
import { checkCity }  from "../controllers/checkCity.ts"


export const Mutation = {
    addContact: async(parent_:unknown, args : {nombreCompleto: string, number: string}):Promise<PersonModelType>=>{
        const {nombreCompleto,number} = args;
        const person = new PersonModel({nombreCompleto,number});
        await person.save();
        return person;
    },
    
    updateContact: async(parent_:unknown, args : {id: string, nombreCompleto: string, number: string}):Promise<PersonModelType>=>{
        const {id,nombreCompleto,number} = args;
        const person = await PersonModel.findByIdAndUpdate(id,{nombreCompleto,number},{new:true});
        if (!person){
            throw new GraphQLError("Person Not Found");
        }
        const pais = await checkNumber(number);
        person.country=pais
        const ciudad = await checkCity(pais)
        const hora = await checkDate(ciudad)
        person.timezone=hora
        await person.save()
        return person;
  
    },


    deleteContact: async(parent_:unknown, args :{id:string}):Promise<PersonModelType>=>{
        const {id} = args;
        const person= await PersonModel.findByIdAndDelete(id);
        if (!person){
            throw new GraphQLError("Person Not Found");
        }
        return person;

    },
    
    
    
}