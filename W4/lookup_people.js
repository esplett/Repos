const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect()

const name = process.argv[ 2 ];

function printName (err, results){
  if(err) {
    console.log(err)
  } else {
    console.log("Searching...")
    console.log(`Found ${results.rows.length} person(s) by the name '${name}':`)
    results.rows.forEach(function (row){
      console.log(`- ${row.id}: ${row.first_name} ${row.last_name}, born '${row.birthdate}'`)
    });
  }
  client.end()
};

function firstName (name, callback) {
  client.query(`SELECT id, first_name, last_name, to_char(birthdate, 'yyyy-MM-dd') AS birthdate from famous_people where first_name=$1;`, [name], callback)
}

firstName(name, printName);

//SHOULD LOOK LIKE
// node lookup_people.js Paul
// Searching ...
// Found 2 person(s) by the name 'Paul':
// - 1: Paul Rudd, born '1969-04-06'
// - 2: Paul Giamatti, born '1967-06-06'

