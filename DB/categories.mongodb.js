/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'OBH';
const collection = 'categories';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

db.getCollection(collection).insertMany([
    { brand: 'Dell', filter: {condition: ['new', 'certified'], model: ['XPS', 'Alienware', 'Latitude'], line: ['m15', 'm18', '14 Rugged'], size: ['18 inch', '17 inch']} },
    { brand: 'Lenovo', filter: {condition: ['new', 'certified'], model: ['ThinkPad', 'Yoga', 'Legion'], processor: ['i9', 'i7', 'i5'], size: ['18" - 13.9"', '14"-14.9"']} },
    { brand: 'Apple', filter: {condition: ['new', 'certified'], model: ['MacBook', 'MacBook Pro', 'MacBook Air'], screen: ['13" - 13.9"', '14"-14.9"'], size: ['18" - 13.9"', '14"-14.9"']} },
    { brand: 'Acer', filter: {condition: ['new', 'certified'], model: ['Aspire', 'Predator', 'Chromebook'], screen: ['13" - 13.9"', '14"-14.9"'], size: ['18" - 13.9"', '14"-14.9"']} },
])

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
