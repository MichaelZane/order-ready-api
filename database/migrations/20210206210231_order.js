exports.up = function(knex) {
    return (
        knex.schema
            .createTable("order", tbl => {
                tbl.increments();

                tbl.string("orderNum")
                    .notNullable()

                tbl.string("name", 128)

                tbl.string("phone")
                    .notNullable()
                    .unique()
            })
    )
};

exports.down = function(knex) {
    return  knex.schema
        .dropTableIfExists("order")
};
