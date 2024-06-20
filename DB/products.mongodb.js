/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'OBH';
const collection = 'products';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

db.getCollection(collection).insertMany([
    { brand: 'Dell', model: 'xps 15', cpu: 'i7', ram: '16g', gpu: 'i7', storage: '512g', display: '1400 * 2240', usage: 'work', size: '14 inch' },
    { brand: 'Dell', model: 'xps 15', cpu: 'i5', ram: '32g', gpu: '3060', storage: '512g', display: '1400 * 2240', usage: 'work', size: '16 inch' },
    { brand: 'Dell', model: 'xps 15', cpu: 'i3', ram: '16g', gpu: '3060', storage: '512g', display: '1400 * 2240', usage: 'work', size: '14 inch' },
    { brand: 'HP', model: 'Envy', cpu: 'i5', ram: '32g', gpu: '3060', storage: '512g', display: '1400 * 2240', usage: 'work', size: '16 inch' },
    { brand: 'HP', model: 'Envy', cpu: 'i3', ram: '16g', gpu: '3060', storage: '512g', display: '1400 * 2240', usage: 'work', size: '14 inch' },
    { brand: 'lenovo', model: 'ThinkPad', cpu: 'i7', ram: '16g', gpu: '3060', storage: '512g', display: '1400 * 2240', usage: 'work', size: '14 inch' },
    { brand: 'lenovo', model: 'ThinkPad', cpu: 'i5', ram: '32g', gpu: '3060', storage: '512g', display: '1400 * 2240', usage: 'work', size: '16 inch' },
]);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
