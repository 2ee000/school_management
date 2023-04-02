const schoolModels = require('../models/schoolModels');

module.exports = {

    getAllSchools: async () => {
        try {
            const schools = await schoolModels.getAllSchools();
            return schools;
        } catch (error) {
            console.log(error);
            throw new Error('Error while finding all schools');
        }
    },

    insertSchool: async (reqData) => {
        try {
            const school = await schoolModels.createSchool(reqData.body);
            return school;
        } catch (error) {
            console.log(error);
            throw new Error('Error while creating a school');
        }
    },

    deleteSchool: async (reqData) => {
        try {
            const { school_code } = reqData.params;
            const school = await schoolModels.deleteSchool(school_code);
            return school;
        } catch (error) {
            console.log(error);
            throw new Error('Error while deleting a school');
        }
    },

    updateSchool: async (reqData) => {
        try {
            const { school_code } = reqData.params;
            const columName = "school_code";
            const columValue = reqData.body.school_code;
            const school = await schoolModels.updateSchool(school_code, columName, columValue);
            return school;
        } catch (error) {
            console.log(error);
            throw new Error('Error while updating a school');

        }
    }
}