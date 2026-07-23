const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/facedb';
(async () => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const coll = client.db().collection('people');
    console.log('indexes:', await coll.indexes());
    console.log('count null:', await coll.countDocuments({ identification_number: null }));
    console.log('count missing:', await coll.countDocuments({ identification_number: { $exists: false } }));
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
})();
