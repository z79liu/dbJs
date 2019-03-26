
const pg = require("pg");
var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'development',
    password : 'development',
    database : 'test_db'
  }
});

var name = process.argv[2]
const settings = require("./settings"); // settings.json

knex.select().from('famous_people').where('first_name','like', name).orWhere('last_name','like', name)
  .asCallback(function(err, rows) {
      if (err) return console.error(err);
      console.log(rows);
    });

// knex('famous_people').where({
//   first_name: 'Test',
//   last_name:  'User'
// }).select('id')

// knex.select("SELECT * FROM famous_people WHERE (first_name like $1::text) OR (last_name like $1::text) ", [name], (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     console.log(result.rows);
//     client.end();
//   });