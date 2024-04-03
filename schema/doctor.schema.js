const mongoose = require('mongoose');
const doctorSchema = new mongoose.Schema({
    prefix:{        //use for mr/mrs
        type: String,
        required: true,
        enum: ["Mr", "Mrs"]        
    },
    name:{
        first_name:{
            type:String,
            required: true,
        },
        middle_name:{
            type:String,
        },
        last_name:{
            type:String,
            required: true,
        }
    },
    degree:{
        type: String,
        required: true,
    },
    expertise:{
        type: String,
        required: true,
    },
    experience:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    contact:{
        type: Number,
        required: true,
    },
    star:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
})

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;