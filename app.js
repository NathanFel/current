//CRUD CREATE READ UPDATE DELETE
require('dotenv').config();
const {MongoClient} = require('mongodb');
const client = new MongoClient(process.env.MONGO_URL)

async function main(){
    await client.connect();
    console.log('Connection OK!');
    const db =client.db('myTask');
    const collection =db.collection('documents');
    /*const insertStuff=await collection.insertMany([{a: 1} , {b: 2} ,{c: 3}]);
    console.log('Docuements insérés => ${inseertStuff}');*/
    
    /*Create
    try{
        const insertData=await collection.insertMany([
            {
                name : 'Emma',
                age : 15,
                sexe : 'F',
                country : 'Etats-Unis',
            },
            {
                name : 'Ines',
                age : 20,
                sexe : 'F',
                country : 'Espagne',
            },
            {
                name : 'Jules',
                age : 26,
                sexe : 'H',
                country : 'France',
            },
            {
                name : 'Alexandre',
                age : 45,
                sexe : 'Autre',
                country : 'Slovaquie',
            },
            {
                name : 'Lucas',
                age : 13,
                sexe : 'Autre',
                country : 'Japon',
            },
            {
                name : 'Antonin',
                age : 27,
                sexe : 'H',
                country : 'France',
            },
            {
                name : 'Gaston',
                age : 55,
                sexe : 'H',
                country : 'Bénin',
            },
            {
                name : 'Selima',
                age : 23,
                sexe : 'F',
                country : 'Tunisie',
            },
            {
                name : 'Mathis',
                age : 37,
                sexe : 'H',
                country : 'Vietnam',
            },
            {
                name : 'Ilona',
                age : 16,
                sexe : 'F',
                country : 'Etats-Unis',
            },
            {
                name : 'Tom',
                age : 32,
                sexe : 'H',
                country : 'Belgique',
            },
            {
                name : 'Gunter',
                age : 24,
                sexe : 'H',
                country : 'Allemagne',
            },
            {
                name : 'Esteban',
                age : 25,
                sexe : 'H',
                country : 'Espagne',
            },
            {
                name : 'Juan',
                age : 26,
                sexe : 'H',
                country : 'Espagne',
            },
            {
                name : 'Jean',
                age : 27,
                sexe : 'H',
                country : 'France',
            },
            {
                name : 'Jane',
                age : 28,
                sexe : 'F',
                country : 'Angleterre',
            },
            {
                name : 'Ceryss',
                age : 17,
                sexe : 'F',
                country : 'Angleterre',
            },
            {
                name : 'Pierre',
                age : 31,
                sexe : 'H',
                country : 'France',
            },        
            {
                name : 'Jeanne',
                age : 19,
                sexe : 'F',
                country : 'France',
            }
        ]);
        console.log('Docuements insérés =>', insertData);
    }catch(e) {throw e; }
    */

    //Read
    try{
        const findMultipleData=await collection.find({ country: 'France'});         
        console.log(await findMultipleData.toArray());
    }catch(e) {throw e; }
    


    return 'done!';
}

main()
.then(console.log)
.catch(console.error)
.finally(()=> client.close());