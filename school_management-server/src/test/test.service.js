const bcrypt = require('bcrypt');

module.exports = (model) =>{
    const userService = {};

    userService.generateUser = (data) =>{
        const dto = {
            school_code : data.query.school_code,
            role_id : 5,
            user_id : data.body.user_id,
            password : await bcrypt.hash(data.body.password,10)
        };
        const user = await model(dto);
        return user;
    }
}


//school_code(FK),admin_id,password,role_id(FK)

// module.exports  = class UsersService {
    
//     async generateUser({school_code,role_id,user_id,password}){
//         const hashedPassword = await bcrypt.hash(password,10);
//         const user = await model.generateUser({school_code,role_id,user_id,hashedPassword});
        
//         return user;
//     }

//     async generateAnotherUser(dto) {
//         const anotherUser = await model.generateAnotherUser(dto);
//         return anotherUser;
//     }

//     async generateUserProfile(dto) {
//         const profile = await model.generateUserProfile(dto);
//         return profile;
//     }
// }