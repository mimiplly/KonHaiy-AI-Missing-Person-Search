const mongoose = require('mongoose');
const schema = new mongoose.Schema({ identification_number: String }, { strict: false });
const Person = mongoose.model('person_temp_check', schema, 'people');
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/facedb';
(async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const nullCount = await Person.countDocuments({ identification_number: null });
    const missingCount = await Person.countDocuments({ identification_number: { $exists: false } });
    const duplicates = await Person.aggregate([
      { $group: { _id: '$identification_number', count: { $sum: 1 } } },
      { $match: { _id: { $ne: null }, count: { $gt: 1 } } }
    ]);
    console.log('nullCount:', nullCount);
    console.log('missingCount:', missingCount);
    console.log('duplicateIds:', JSON.stringify(duplicates.map(d => ({ id: d._id, count: d.count }))));
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
  }
})();
