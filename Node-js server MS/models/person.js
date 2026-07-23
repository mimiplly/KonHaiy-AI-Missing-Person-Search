const mongoose=require("mongoose");
const {Schema}=mongoose;
const personSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    // required:true,
    
},
date:{
    type:Date,
    default:Date.now
}
,
Gender:{
    type:String
},
identification:{
    type:String 
},
nationality:{
    type:String
},
height:{
    type:Number
}
,Date_missing:{
    type:Date
},
address:{
    type:String,
},
identification_number:{
    type:String
},
image:{
    data:Buffer,
    contentType:String
},
phonenumber:{
    type:Number
}
})
personSchema.index(
  { identification_number: 1 },
  { unique: true, partialFilterExpression: { identification_number: { $type: 'string' } } }
);
const person=mongoose.model("person",personSchema);
person.createIndexes();
module.exports=person;