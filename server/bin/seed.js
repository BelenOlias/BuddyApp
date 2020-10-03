const mongoose = require('mongoose')

const dbName = 'buddy'

mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

//mongoose.connect('mongodb+srv://BelenOlias:qUW2FYfzj25NzjU@cluster0.eyzhh.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true})

// Dogs

const Dog = require('../models/dog.model')

const dogs = [
    {
        name: 'Pancho',
        age: '6',
        race: 'Jack Russell',
        gender: 'macho',
        description: 'Pequeñito pero matón',
        imageUrl: 'https://www.webanimales.com/ficheros/2014/03/Parson-Russell-Terrier1-165x124.jpg'
    },

    {
        name: 'Alma',
        age: '1',
        race: 'Golden Retriever',
        gender: 'hembra',
        description: 'Adorable y cariñosa',
        imageUrl: 'https://i.pinimg.com/564x/95/77/3a/95773a62497aadf957fb800b99dae301.jpg'
    },

    {
        name: 'Hammer',
        age: '5',
        race: 'Pitbull',
        gender: 'macho',
        description: 'Leal y protector',
        imageUrl: 'https://estaticos.muyinteresante.es/media/cache/400x300_thumb/uploads/images/gallery/5abb51145cafe8eab0b34dec/pitbull-marron-blanco.jpg'
    },

    {
        name: 'Bibi',
        age: '3',
        race: 'Pinscher alemán',
        gender: 'hembra',
        description: 'Juguetona, ideal para una casa con niños',
        imageUrl: 'https://fordogtrainers.es/images/razas-de-perros/P/perro-de-raza-pincher-aleman.jpg'
    }
]

mongoose.connection.collections['dogs'].drop()

Dog.create(dogs)
    .then(dogs => console.log(`Se han creado ${dogs.length} perretes en la DDBB`))
    .catch(err => console.log(err))