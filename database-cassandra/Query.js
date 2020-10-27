const cassandra = require('cassandra-driver');
const PlainTextAuthProvider = cassandra.auth.PlainTextAuthProvider;
const client = new cassandra.Client({
    contactPoints:['127.0.0.1:9042'],
    localDataCenter: 'datacenter1',
    authProvider: new PlainTextAuthProvider('cassandra', 'cassandra')
})

// let length = 0 // this is for testing as well

const queryMaker = (num) => {
    let query = [];
    let range = [];
    for (var a = 1; a <= 10; a ++) {
        range.push((num*10) - 10 + a)
    }
    range.forEach(num => {
        query.push(`SELECT * FROM furniturespace.furniture WHERE "_id"=${num} ALLOW FILTERING;`)
    })
    length = query.length
    return query
}

module.exports = queryMaker;
