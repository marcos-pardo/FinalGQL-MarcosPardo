import mongoose,{Document} from 'mongoose';
import { checkNumber }  from "../controllers/checkNumber.ts"
import {Person} from "../types.ts"
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    nombreCompleto:{type: String, required :true},
    number:{type: String, required :true},
    country:{type: String, required :false},
    timezone:{type: String, required :false}

});
PersonSchema.path('number').validate(async(number) =>{
console.log ("estoy ejecutando el validate");
try{
    return await checkNumber(number); 
}
catch(error){
    return false;
}});
PersonSchema.path('number').validate(async(number) =>{
    console.log ("estoy ejecutando el validate");
    try{
        return await checkNumber(number); 
    }
    catch(error){
        return false;
    }});  


export type PersonModelType= Document&Omit<Person,"id">;
export const PersonModel = mongoose.model<PersonModelType>("Person",PersonSchema);



