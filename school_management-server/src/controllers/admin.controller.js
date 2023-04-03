const { adminService, authService } = require('../services');

module.exports = {

    findAll: async (req, res) => {
        try {
            const admins = await adminService.getAllAdmins();
            if (admins.length === 0) return res.status(404).send({ statudCode: 404, message: "admins were not found" });
            return res.status(200).send({ data: admins, statusCode: 200, message: "Success to find all admins" });

        } catch (error) {
            return res.status(500).send({ statusCode: 500, message: "Server Error" });
        }
    },

    findOne: async (req, res) => {
        try {
            const admin = await adminService.getOneAdmin(req);
            if (admin.length === 0) return res.status(404).send({ statudCode: 404, message: 'admin was not found' });
            return res.status(200).send({ data: admin, statudCode: 200, message: "Success to find an admins" });
        } catch (error) {
            return res.status(500).send({ statusCode: 500, message: "Server Error" });
        }
    },

    registAdmin: async (req, res) => {
        try {
            const admin = await adminService.createAdminUser(req);
            return res.status(201).send({ statudCode: 201, message: "Success to signup" });
        } catch (error) {
            return res.status(500).send({ statudCode: 500, message: "Server Error" });
        }
    },

    withdraw: async (req, res) => {
        try {
            const admin = await adminService.deleteAdmin(req);
            return res.status(201).send({ statusCode: 201, message: "Success to withdraw" });
        } catch (error) {
            return res.status(500).send({ statusCode: 500, message: "Server Error" });
        }
    },

    login: async (req, res) => {
        try {
            const admin = await adminService.getOneAdmin(req);
            if (admin.length === 0) return res.status(400).send('id or password is not correct!');
            const accessToken = await authService.login(admin, req);
            if (accessToken) return res.status(200).send({ token: accessToken, statusCode: 200, msg: "success login" });
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: error.message });
        }
    }
}
