import { model, Schema } from "mongoose"


export interface results {
id:string;
course:string,
date:string,
meetInfo: [object],
meetName:string,
nameYear:string,
smName:string
}

export const resultsSchema = new Schema<results>(
    {
course:{type:String,required:true},
date:{type:String, required:true},
meetInfo:{type:[Object],required:true},
meetName:{type:String, required:true},
nameYear:{type:String, required:true},
smName:{type:String, required:true},
}, {
    toJSON: {
        virtuals:true
    },
    
        toObject: {
            virtuals:true
        },
     timestamps:true
}
)

export const ResultsModel = model<results>('results', resultsSchema)
