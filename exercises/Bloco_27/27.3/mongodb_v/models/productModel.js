const { ObjectId } = require('mongodb');
const connection = require('./connection');

const add = async (name, brand) => {
  try {
    const connect = await connection();
    const created = await connect.collection('products').insertOne({ name, brand });

    return { id: created.insertedId, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const connect = await connection();
    const result = await connect.collection('products').find().toArray();
    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const connect = await connection();
    const result = await connect.collection('products').findOne({ _id: ObjectId(id) });
    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    const connect = await connection();
    await connect.collection('products').updateOne({ _id: ObjectId(id) }, { $set: { name, brand }});
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const connect = await connection();
    await connect.collection('products').deleteOne({ _id: ObjectId(id) });
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };
