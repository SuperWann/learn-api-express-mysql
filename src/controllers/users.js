const UsersModel = require('../models/users')

const getAllUsers = async (req, res) => {
    //[data] disini merupakan destructuring agar yang muncul rows tidak dengan fields, karena 
    try {
        const [data] = await UsersModel.getAllUsers();

        res.json({
            message: "Get all users success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Database error!',
            serverMessage: error
        })
    }

}

const createNewUser = async (req, res) => {
    const { body } = req; //destructuring yang bermaksud mengambil body dalam req
    try {
        await UsersModel.createNewUser(body);
        res.json({
            message: "Create New User Success",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Database error!',
            serverMessage: error
        })
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        await UsersModel.updateUser(body, id);
        res.json({
            message: "Update User Success",
            data: { id: id, ...body } //spread operator merupakan cara untuk menggabungkan beberapa object
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Database error!',
            serverMessage: error
        })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await UsersModel.deleteUser(id);
        res.json({
            message: "Delete User Success",
            id: id
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Database error!',
            serverMessage: error
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}