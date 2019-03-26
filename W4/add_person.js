const settings = require("./settings"); //settings.json
const moment = require('moment');

//knex PostgreSQL client
var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user: settings.user,
    password : settings.password,
    database : settings.database,
  }
});

const first = process.argv[ 2 ];
const last = process.argv[ 3 ];
const dbirth = process.argv[ 4 ];


function addPerson (first, last, dbirth){
  //insert for knex
  knex.insert([{first_name: first, last_name: last, birthdate: dbirth}])
  .into('famous_people').then(printTable).then(close())
};

//first_name,
function printTable() {
  knex.select().from('famous_people').then(function (res) {
     res.forEach(function (row) {
      let m = moment(row.birthdate);
      console.log(`${row.id}:${row.first_name} ${row.last_name} born ${m.format("YYYY/MM/DD")}`);
     })
  });
}

function close() {
    setTimeout(function () { process.exit(); }, 2000);
}

addPerson(first, last, dbirth)

//last_name

//date
