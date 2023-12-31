exports.up = knex =>
  knex.schema.createTable("tags", table => {
    table.increments('id');
    table.text('name').notNullable();

    table.integer('note_id').references('id').inTable('notes').onDelete("CASCADE");
    table.integer('users_id').references('id').inTable('notes');
  });

exports.down = knex => knex.schema.dropTable("tags");