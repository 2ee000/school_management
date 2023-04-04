// const { adminModels } = require('../models');

const { createUUID } = require('../utils/uuidUtil');
const { createSalt, createHashedPassword } = require('../utils/cryptoUtils');
const { adminModels } = require('../models');
module.exports = {

    getAllAdmins: async () => {
        try {
            const admins = await adminModels.getAllAdmins();
            return admins;
        } catch (error) {
            console.log(error);
            throw new Error('Error while finding all admins');
        }
    },

    getOneAdmin: async (reqData) => {
        try {
            const columName = "admin_name";
            const columValue = reqData.body.admin_name;
            const admin = await adminModels.getOneAdmin(columName, columValue);
            return admin;
        } catch (error) {
            throw new Error('Error while finding an admin');
        }
    },

    createAdminUser: async (reqData) => {
        try {
            const admin_uuid = createUUID();
            const { school_code, password } = reqData.body;
            const current_salt = await createSalt();
            const { hashedPassword, salt } = await createHashedPassword(password, current_salt);
            const admin = await adminModels.createAdmin(admin_uuid, school_code, hashedPassword, salt, reqData.body);
            return admin;
        } catch (error) {
            console.log(error);
            throw new Error('Error while creating an admin');
        }
    },

    deleteAdmin: async (reqData) => {
        try {
            const { admin_uuid } = reqData.query;
            const admin = await adminModels.deleteAdmin(admin_uuid);
            return admin;
        } catch (error) {
            console.log(error);
            throw new Error('Error while deleting an admin');
        }
    }
}