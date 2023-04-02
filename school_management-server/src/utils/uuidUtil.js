const uuid = require('uuid');

module.exports = {
    createUUID: () => {
        const new_uuid = uuid.v4();
        let user_uuid = new_uuid.split('-');
        return user_uuid[0] + user_uuid[1] + user_uuid[2] + user_uuid[3];
    }
}
