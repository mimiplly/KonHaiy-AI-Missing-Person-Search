const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/facedb';
(async () => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const coll = client.db().collection('people');
    const deleteResult = await coll.deleteMany({ $or: [{ identification_number: null }, { identification_number: { $exists: false } }] });
    console.log('deletedCount:', deleteResult.deletedCount);
    console.log('remaining null count:', await coll.countDocuments({ identification_number: null }));
    console.log('remaining missing count:', await coll.countDocuments({ identification_number: { $exists: false } }));
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
})();
