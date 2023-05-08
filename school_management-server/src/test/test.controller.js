// const UsersService = require('./test.service');
// const Service = new UsersService();
const response = require('../common/response');


module.exports = (userService) =>{
    const authController = {};

    authController.generateUser = (req,res,next) =>{
        

        userService.generateUser(req);
        // const data = userService.getByUserId(user_id);
        return response.success("유저 생성 성공",{

        } )
    }
}


// module.exports = {
//     generateUser : async(req,res) =>{
//         try {
//             const role_id = SCHOOL_ADMIN;
//             const {user_id,password} =req.body;
//             const user = await Service.generateUser({school_code,role_id,user_id,password});
//             return response.success("유저 생성 성공",{
//                 user,
//             });
//         } catch (error) {
// 			if (error.errno === 1062) return response.fail("이미 사용중인 유저네임입니다.");
//         }
//     },

//     generateAnotherUser : async(req,res) =>{
//         try {
//             const dto = {
                
//             }
//             const anotherUser = await Service.generateAnotherUser(dto);
//         } catch (error) {
            
//         }
//     },

//     generateUserProfile : async(dto) =>{

//     }
// }