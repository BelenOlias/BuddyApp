const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dogSchema = new Schema({

    name: {
        type: String,
        required: true,
        default: 'dog',
    },

    age: {
        type: Number
    },

    gender: {
        type: String,
        enum: ['Macho', 'Hembra'],
        lowercase: true,
        trim: true
    },

    description: {
        type: String
    },

    imageUrl: {               
        type: String
    },

    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        rel: 'User'
    }

},
    {
        timestamps: true
        
    })

    
const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog