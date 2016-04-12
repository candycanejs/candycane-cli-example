
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`posts`, function(table) {
    table.increments();
    table.string(`title`);
    table.text(`body`);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(`posts`);
};
