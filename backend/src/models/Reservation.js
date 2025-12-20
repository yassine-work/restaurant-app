const mongoose = require('mongoose');

const reservationSchema=new mongoose.Schema({
    name:{type:String,required:true,minLength:2,trim:true},
    email:{type:String,required:true,match: /.+@.+\..+/,trim:true},
    phone: {
        type: String,
        required: true,
        validate: {
            validator: v => /^\d{8,15}$/.test(v),
            message: props => `${props.value} is not a valid phone number!`
        },
        trim:true
    },
    date:{type:Date,required:true},
    time:{type:String,required:true},
    guest:{type:Number,required:true,min:1,validate:Number.isInteger,max:20,trim:true},
    message:{type:String,default:'',trim:true},
    createdAt:{type:Date,default:Date.now,immutable:true},

})

const reservation= mongoose.model("Reservation",reservationSchema);
module.exports = reservation;
