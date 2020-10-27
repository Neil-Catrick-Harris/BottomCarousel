const assert = require('assert');
const cassandra = require('cassandra-driver');
const PlainTextAuthProvider = cassandra.auth.PlainTextAuthProvider;
const client = new cassandra.Client({
    contactPoints:['127.0.0.1:9042'],
    localDataCenter: 'datacenter1',
    authProvider: new PlainTextAuthProvider('cassandra', 'cassandra')
})
var query1 = 'DROP KEYSPACE IF EXISTS furnitureSpace;'
var query2 = 'CREATE KEYSPACE IF NOT EXISTS furnitureSpace WITH REPLICATION = {\'class\' : \'SimpleStrategy\',\'replication_factor\' : 1}';
var query3 = 'CREATE TABLE IF NOT EXISTS furnitureSpace.furniture ("_id" INT PRIMARY KEY, ID INT, name TEXT, category TEXT, price DECIMAL, rating DECIMAL, imageUrl TEXT, onSale BOOLEAN)';
client.execute(query1, (error, res) => {
    if (error) {
        console.log('error', error)
    } else {
        console.log('If there was a previous KEYSPACE it was dropped D:')
        client.execute(query2, (error, res) => {
            if (error) {
                console.log('error:', error)
            } else {
                console.log('KEYSPACE created!')
                client.execute( query3, (error, res) => {
                    if (error) {
                        console.log('error:', error)
                    } else {
                        console.log('table created!')
                       console.log('now go into cqlsh and run this command: COPY furnitureSpace.furniture ("_id", ID, name, category, price, rating, imageUrl, onSale) FROM \'/Users/juanvargas/Desktop/SDC/BottomCarousel/10MillionKs.csv\' WITH HEADER=TRUE AND PAGETIMEOUT=40 AND PAGESIZE=20 AND NUMPROCESSES=5;')
                    }
                })
            }
        })
    }
})
