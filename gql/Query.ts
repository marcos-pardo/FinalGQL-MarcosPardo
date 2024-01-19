import mongoose from 'mongoose';
import { GraphQLError } from "graphql";
import { PersonModelType, PersonModel} from "../db/Person.ts";

export const Query = {

    person: async(_:unknown, args: { id:string}):Promise<PersonModelType> =>{
        try{
            const p = await PersonModel.findById(args.id);
            if (!p){
                throw new GraphQLError("Person Not Found");
            }
            return p;
        }catch(e){
            throw new GraphQLError(e.message);
        }
        
    }
};