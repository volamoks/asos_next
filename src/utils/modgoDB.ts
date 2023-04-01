import { MongoClient, Db } from 'mongodb';

// Connection URI for your MongoDB database
const uri =
    'mongodb+srv://<komalov>:<abrorium72>@<komalov>.mongodb.net/<asos_DB>?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase(): Promise<Db> {
    try {
        // Connect to the MongoDB database
        await client.connect();
        console.log('Connected to the database');

        // Return a reference to the database object
        return client.db('<database>');
    } catch (error) {
        console.error('Error connecting to the database', error);
        throw error;
    }
}

export { connectToDatabase };
