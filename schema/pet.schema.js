const mongoose = require('mongoose');
const petSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
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
            enum: [ "India", "Bangladesh", "Nepal", "Sri-Lanka"]
        }
    },
    contact_Number:{
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

    // pet information is filled at there
    pet_type:{
        type: String,
        required: true,
        enum: ["Dog", "Cat", "Cattle"],
        default: "Dog",
    },
    breed:{
        type: String,
        required: true,
    },
    pet_name:{
        type: String,
    },
    age:{                           // in year
        type: Number
    },
    past_disease:{                      //if any
        type: String,
        default: "none"
    }
})
const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;