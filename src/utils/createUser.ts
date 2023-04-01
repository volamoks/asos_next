// import { connectToDatabase } from './modgoDB';

// export async function createUser(user: {
//     id: string;
//     email: string;
//     firstName: string;
//     lastName: string;
//     password: string;
// }) {
//     const db = await connectToDatabase();

//     // Insert the user into the "users" collection
//     const result = await db.collection('users').insertOne(user);

//     console.log(`Created a new user with the following ID: ${result.insertedId}`);
// }

// const newUser = {
//     id: '123456789',
//     firstName: 'John Doe',
//     lastName: 'John Doe',
//     email: 'john.doe@example.com',
//     password: 'password123',
// };

// createUser(newUser);
