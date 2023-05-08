module.exports =(dto) =>{
    const model = {};
    model.generateUser = (dto) =>{
        const sql = 'INSERT INTO users VALUES(?,?,?,?,?)';
        const params = [0,dto.school_code,dto.role_id,dto.user_id,dto.password];
        
        return {sql,params};
    }
}

// module.exports = {

//     //role : 1:user, 2:student, 3:teacher, 4:school_admin, 5:super_admin 
//     //user_id,role_id,username,school_code,password,class,gender,phone_number,profile_image_url,user_about

//     generateUser : async(dto) =>{
//         const sql = 'INSERT INTO users VALUES(?,?,?,?,?)';
//         const params = [0,dto.school_code,dto.role_id,dto.user_id,dto.password];
        
//         return {sql,params};
//     },

//     generateAnotherUser :async(dto) =>{
//         const sql = 'INSERT INTO another_user VALUES(?,?,?,?,?,?,?)';
//         const params = [0,dto.user_id,dto.proflie_id,dto.class,dto.subject,dto.gender,dto.phone_number];
        
//         return {sql,params};
//     },

//     generateUserProfile : async(dto) =>{
//         const sql = 'INSERT INTO profiles VALUES(?,?,?,?)';
//         const params = [0,dto.user_id,dto.profile_image.url,dto.user_about];
        
//         return {sql,params};
//     },


// }