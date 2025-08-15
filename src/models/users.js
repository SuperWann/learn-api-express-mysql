const dbPool = require('../config/database')

const getAllUsers = () => {
    const query = 'SELECT * FROM users';

    return dbPool.execute(query);
}

const createNewUser = (body) => {
    const query = 'INSERT INTO users (name, email, address) VALUES (?, ?, ?)';

    return dbPool.execute(query, [body.name, body.email, body.address]);
};

const updateUser = (body, idUser) => {
    const query = ' UPDATE users SET name=?, email=?, address=? WHERE id=? ';

    return dbPool.execute(query, [body.name, body.email, body.address, idUser]);
}

const deleteUser = (idUser) => {
    const query = 'DELETE FROM users WHERE id=?';

    return dbPool.execute(query, [idUser]);
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}