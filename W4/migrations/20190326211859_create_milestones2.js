exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('milestones', function(table){
      table.integer('actor_id').unsigned()
      table.foreign('actor_id').references('famous_people.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function (table) {
     table.dropColumn('actor_id');
    })
  ])
};
