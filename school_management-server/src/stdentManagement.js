/**
 * @api {get} /admin/all [GET] 모든 관리자 찾기
 * @apiName 모든 관리자 찾기
 * @apiGroup Admin
 * @apiVersion 1.0.0
 *
 * @apiSuccess (Success 200) {Object} response Response of Success
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "statusCode": 200,
 *       "message": "Success to find all admins"
 *     }
 *
 * @apiError (Error 404) AdminNotFound The admins were not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "statusCode": 404,
 *      "message": "Admins were not found"
 *     }
 *
 * @apiError (Error 400) BadRequest Client's request was not correct
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *      "statusCode": 400,
 *      "message": "Bad Request"
 *     }
 */


/**
 * @api {post} /admin/check-id [POST] 관리자 ID 체크
 * @apiName 관리자 ID 체크
 * @apiGroup Admin
 * @apiVersion 1.0.0
 * 
 * @apiParam (Body) {String} admin_name Admin name
 * @apiParam (Body) {Int} school_code School Code
 * 
 * @apiSuccess (Success 200) {Object} response Response of Success
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "statusCode": 200,
 *       "message": "This ID is available"
 *     }
 *
 * @apiError (Error 400) BadRequest AdminName is duplicate
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *      "statusCode": 400,
 *      "message": "Duplicate ID"
 *     }
 */


/**
 * @api {post} /admin/sign-up [POST] 관리자 등록하기
 * @apiName 관리자 등록하기
 * @apiGroup Admin
 * @apiVersion 1.0.0
 * 
 * @apiParam (Body) {String} admin_name Admin name
 * @apiParam (Body) {String} [admin_pwd] this is saved from sha512 
 * @apiParam (Body) {Int} school_code School Code
 * 
 * @apiSuccess (Success 201) {Object} response Response of Success
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "statusCode": 201,
 *       "message": "Success to signup"
 *     }
 *
 * @apiError (Error 400) BadRequest Client's request was not correct
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *      "statusCode": 400,
 *      "message": "Bad Request"
 *     }
 */


/**
 * @api {post} /admin/login [POST] 관리자 로그인
 * @apiName 관리자 로그인
 * @apiGroup Admin
 * @apiVersion 1.0.0
 * 
 * 
 * @apiParam (Body) {String} admin_name Admin name
 * @apiParam (Body) {String} [admin_pwd] this is saved from sha512 
 * 
 * @apiSuccess (Success 200) {String} token AccessToken 
 * @apiSuccess (Success 200) {Int} school_code SchoolCode
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMTE1MjYyMjViNDkxNDNiYjhjZmMiLCJpYXQiOjE2ODA3NjAzOTEsImV4cCI6MTY4MDc2MjE5MX0.fJ63mnTWSp2R6nJ4Kp3PFppxzq-XX3vnCLJUD6tXIpU",
 *       "school_code": 1,
 *       "statusCode": 200,
 *       "message": "Success login"
 *     }
 * 
 * @apiError (Error 403) Forbidden accessToken was invalid.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     {
 *      "statusCode": 403,
 *      "message": "Forbidden"
 *     }
 * 
 * @apiError (Error 401) Unauthorized refreshToken is invalid
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *      "statusCode": 401,
 *      "message": "Unauthorized"
 *     }
 * 
 * @apiError (Error 400) BadRequest admin_name or amdin_pwd is not correct.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *      "statusCode": 400,
 *      "message": "Bad Request"
 *     }
 */


/**
 * @api {get} /admin/:school_code/teacher/all [GET] 모든 선생님 찾기
 * @apiName 모든 선생님 찾기
 * @apiGroup Teacher
 * @apiVersion 1.0.0
 * 
 * @apiParam (Params) {Int} :school_code 학교고유번호
 * 
 * @apiSuccess (Success 200) {FILE} profile_image ProfileImage
 * @apiSuccess (Success 200) {String} teacher_uuid TeacherUUID
 * @apiSuccess (Success 200) {String} teacher_name TeacherName
 * @apiSuccess (Success 200) {Int} subject 0 : 국어 , 1: 수학 , 2 : 사회 , 3: 과학, 4: 영어
 * @apiSuccess (Success 200) {Int} class 1 : 1학년, 2: 2학년, 3: 3학년
 * @apiSuccess (Success 200) {String} teacher_email TeacherEmail
 * @apiSuccess (Success 200) {Int} gender 0: MALE , 1: FEMALE
 * @apiSuccess (Success 200) {String} teacher_about TeacherAbout
 * @apiSuccess (Success 200) {Object} response Response of Success
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data" : [{
 *           "profile_image" : file,
 *           "teacher_uuid" : "damdognwfowem",
 *           "teacher_name": "Lee",
 *           "subject": 2,
 *           "class": 1,
 *           "teacher_email": "le1e@gmail.com",
 *           "gender": 0,
 *           "teacher_about" : "about..."
 *           },
 *          ...
 *       ],
 *       "statusCode": 200,
 *       "message": "Success to find all teachers"
 *     }
 *
 * @apiError (Error 404) TeachersNotFound The teachers were not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "statusCode": 404,
 *      "message": "Teachers were not found"
 *     }
 * 
 * @apiError (Error 400) BadRequest Client's request was not correct
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *      "statusCode": 400,
 *      "message": "Bad Request"
 *     }
 */


/**
 * @api {post} /admin/:school_code/teacher/ [POST] 선생님 등록하기 
 * @apiName [관리자 서비스] 선생님 등록하기
 * @apiGroup Teacher
 * @apiVersion 1.0.0
 * 
 * @apiParam (Params) {Int} :school_code 학교고유번호
 * @apiParam (Body) {String} teacher_code Teacher Code
 * @apiParam (Body) {String} teacher_name Teacher Name
 * @apiParam (Body) {String} teacher_email Teacher Email
 * @apiParam (Body) {String} [password] this is saved from sha512 
 * @apiParam (Body) {Int} class 1: 1학년 ,2: 2학년, 3: 3학년
 * @apiParam (Body) {Int} gender 0 : MALE, 1:FEMALE
 * @apiParam (Body) {Int} subject 0 : 국어 , 1: 수학 , 2 : 사회 , 3: 과학, 4: 영어
 * @apiParam (Body) {String} phone_number Phone Number
 * @apiParam (Body) {String} profile_image ProfileImage
 * @apiParam (Body) {String} teacher_about TeacherAbout
 * 
 * @apiSuccess (Success 201) {Object} response Response of Success
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "statusCode": 201,
 *       "message": "Success to signup"
 *     }
 *
 * @apiError (Error 400) BadRequest TeacherCode or Email is duplicate
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *      "statusCode": 400,
 *      "message": "TeacherCode or Email is duplicate"
 *     }
 */


/**
 * @api {patch} /admin/:school_code/teacher/teacher_uuid [PATCH] 선생님 세부정보 수정하기
 * @apiName [관리자 서비스] 선생님 세부정보 수정하기
 * @apiGroup Teacher
 * @apiVersion 1.0.0
 * 
 * @apiParam (Params) {Int} :school_code 학교고유번호
 * @apiParam (Query) {String} teacher_uuid 선생님 UUID
 * @apiParam (Body) {String} profile_url 프로필 URL
 * @apiParam (Body) {String} teacher_about 선생님 소개
 * 
 * @apiSuccess (Success 201) {Object} response Response of Success
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "statusCode": 201,
 *       "message": "Success to signup"
 *     }
 * 
 * @apiError (Error 400) BadRequest ProfileURL or About is not correct.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *      "statusCode": 400,
 *      "message": "ProfileURL or About is not correct."
 *     }
 */


/**
 * @api {get} /admin/:school_code/student/all [GET] 모든 학생 찾기
 * @apiName 모든 학생 찾기
 * @apiGroup Student
 * @apiVersion 1.0.0
 * 
 * @apiParam (Params) {Int} :school_code 학교고유번호
 *
 * @apiSuccess (Success 200) {FILE} profile_image ProfileImage
 * @apiSuccess (Success 200) {String} student_uuid StudentUUID
 * @apiSuccess (Success 200) {String} student_name StudentName
 * @apiSuccess (Success 200) {String} student_code StudentCode
 * @apiSuccess (Success 200) {String} student_email StudentEmail
 * @apiSuccess (Success 200) {Int} class 1 : 1학년, 2: 2학년, 3: 3학년
 * @apiSuccess (Success 200) {Int} gender 0: MALE , 1: FEMALE
 * @apiSuccess (Success 200) {String} student_about StudentAbout
 * @apiSuccess (Success 200) {Object} response Response of Success
 *  
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data" : [{
 *           "profile_image" : "url",
 *           "student_uuid": "fkgowfqedoqemdq",
 *           "student_name": "Lee",
 *           "student_code": "2301001",
 *           "student_email": "lee0111@gmail.com",
 *           "class": 1,
 *           "gender": 0,
 *           "student_about" : "student_about"
 *           },
 *          ...
 *       ],
 *       "statusCode": 200,
 *       "message": "Success to find all students"
 *     }
 *
 * @apiError (Error 404) StudentsNotFound The students were not found.
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "statusCode": 404,
 *      "message": "Students were not found"
 *     }
 *
 * @apiError (Error 400) BadRequest Client's request was not correct
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *      "statusCode": 400,
 *      "message": "Bad Request"
 *     }
 */


/**
 * @api {post} /admin/:school_code/student/ [POST] 학생 등록하기 
 * @apiName [관리자 서비스] 학생 등록하기
 * @apiGroup Student
 * @apiVersion 1.0.0
 * 
 * @apiParam (Params) {Int} :school_code 학교고유번호
 * @apiParam (Body) {String} student_code Student Code
 * @apiParam (Body) {String} student_name Student Name
 * @apiParam (Body) {String} student_email Student Email
 * @apiParam (Body) {String} [password] this is saved from sha512 
 * @apiParam (Body) {Int} class 1: 1학년 ,2: 2학년, 3: 3학년
 * @apiParam (Body) {Int} gender 0 : MALE, 1:FEMALE
 * @apiParam (Body) {String} phone_number Phone Number
 * @apiParam (Body) {String} profile_image ProfileImage
 * @apiParam (Body) {String} student_about StudentAbout
 * 
 * @apiSuccess (Success 201) {Object} response Response of Success
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "statusCode": 201,
 *       "message": "Success to signup"
 *     }
 *
 * @apiError (Error 400) BadRequest StudentCode or Email is duplicate
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *      "statusCode": 400,
 *      "message": "StudentCode or Email is duplicate"
 *     }
 */


/**
 * @api {patch} /admin/:school_code/student/student_uuid [PATCH] 학생 세부정보 수정하기
 * @apiName [관리자 서비스] 학생 세부정보 수정하기
 * @apiGroup Student
 * @apiVersion 1.0.0
 * 
 * @apiParam (Params) {Int} :school_code 학교고유번호
 * @apiParam (Query) {String} :student_uuid 학생 UUID
 * 
 * @apiParam (Body) {String} profile_url 프로필 URL
 * @apiParam (Body) {String} student_about 학생 소개
 * 
 * @apiSuccess (Success 201) {Object} response Response of Success
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "statusCode": 201,
 *       "message": "Success to signup"
 *     }
 * 
 * @apiError (Error 400) BadRequest ProfileURL or About is not correct.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *      "statusCode": 400,
 *      "message": "ProfileURL or About is not correct."
 *     }
 */


/**
* @api {get} /school/all [GET] 모든 학교 찾기
* @apiName 모든 학교 찾기
* @apiGroup School
* @apiVersion 1.0.0
*
* @apiSuccess (Success 200) {Int} school_code School code
* @apiSuccess (Success 200) {String} school_name School name
* @apiSuccess (Success 200) {String} school_email School email
* @apiSuccess (Success 200) {Object} response Response of Success
* 
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "data": [
        {
            "school_code": 1,
            "school_name": "가나고등학교",
            "school_email": "gana.ac.kr"
        },
        {
            "school_code": 2,
            "school_name": "가천고등학교",
            "school_email": "gachen.ac.kr"
        }
        ],
        "statusCode": 200,
        "message": "Success to find all schools"
*     }
*
* @apiError (Error 404) SchoolNotFound The admins were not found.
* 
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*      "statusCode": 404,
*      "message": "Schools were not found"
*     }
*
* @apiError (Error 400) BadRequest Client's request was not correct
* 
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*      "statusCode": 400,
*      "message": "Bad Request"
*     }
*/