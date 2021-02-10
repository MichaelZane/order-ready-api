const db = require('./database/dbConfig')

module.exports = {
    insert,
    find,
    findBy,
    findById,
    remove,
    get,
    update
}

function get(id) {
    return db('order as o')
        .select('o.id', 'o.name', 'o.orderNum', 'o.phone')
        .where({ id })
        .first()
}

function find() {
    return db('order')        
        .returning(['id', 'name', 'phone','orderNum'])

}

function findBy(filter) {
    return db('order')
        .where(filter)
}

function findById(id) {
    return db('order')
      .where({ id })
      .first();
  }

function insert(order) {
    return db('order')
        .returning(['id', 'name', 'phone','orderNum'])
        .insert(order)
}

function update(changes, id) {
    return db('order as o')
        .select('o.name', 'o.phone', 'o.orderNum')
        .where('id', Number(id))
        .update(changes)
}

function remove(id) {
    return db('order')
        .where({ id })
        .del()
}