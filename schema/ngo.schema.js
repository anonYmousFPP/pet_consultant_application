const mongoose = require('mongoose');
const ngoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    owner:{             //if any
        type: String,
        default: "NaN",
    },
    contact:{
        type: Number,
        required: true,
    },
    Phone_Number:{
        type: Number,
    },
    address:{
        line1:{
            type: String,
        },
        line2:{
            type:String,
        },
        state:{
            type:String,
            required: true,
        },
        pincode:{
            type: Number,
            requried: true,
        },
        country:{
            type: String,
            required: true,
            default: "India",
            enum: [ "India", "Bangladesh", "Nepal", "Sri-Lanks"]
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    }
})

const NGO = mongoose.model('NGO', ngoSchema);
module.exports = NGO;