exports.up = function(knex) {
    return (
        knex.schema
            .createTable("order", tbl => {
                tbl.increments();

                tbl.integer("orderNum")

                tbl.string("name", 128)

                tbl.integer("phone")
            })
    )
};

exports.down = function(knex) {
    return  knex.schema
        .dropTableIfExists("order")
};
