import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb+srv://dmcnulty:dmcnulty@dealogy.zi0bv.mongodb.net/Dealogy', {
  useNewUrlParser: true,
  //useUnifiedTopolgoy: true <-- this was throwing an error: '(node:5343) DeprecationWarning: The `open` even is no longer supported by unified topology
});

export async function setUpDb(db) {
  db
    .collection('tokens')
    .createIndex({ expireAt: -1 }, { expireAfterSeconds: 0 });
  db.collection('posts').createIndex({ createdAt: -1 });
  db.collection('users').createIndex({ email: 1 }, { unique: true });
}

export default async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(process.env.DB_NAME);
  await setUpDb(req.db);
  return next();
}
