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
 * @apiSuccess (Success 200) {String} Token AccessToken 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiZDgwYzE5Yzk3ZTcwNGRlMjhmNDEiLCJpYXQiOjE2ODA1MDA0NzcsImV4cCI6MTY4MDUwMDUzN30.uCp80fhtVliTVVpKU7CKmK-KHhwtvSYTDvQJs2Piev0"
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
 * @apiSuccess (Success 200) {Object} response Response of Success
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
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
 * @apiParam (Body) {String} teacher_code Teacher Code
 * @apiParam (Body) {String} teacher_name Teacher Name
 * @apiParam (Body) {String} teacher_email Teacher Email
 * @apiParam (Body) {String} [password] this is saved from sha512 
 * @apiParam (Body) {Int} class Class
 * @apiParam (Body) {Int} gender Gender
 * @apiParam (Body) {Int} subject Subject
 * @apiParam (Body) {Int} phone_number Phone Number
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
 * @api {get} /admin/:school_code/student/all [GET] 모든 학생 찾기
 * @apiName 모든 학생 찾기
 * @apiGroup Student
 * @apiVersion 1.0.0
 * 
 * @apiSuccess (Success 200) {Object} response Response of Success
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "statusCode": 200,
 *       "message": "Success to find all teachers"
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
 * @apiParam (Body) {String} student_code Student Code
 * @apiParam (Body) {String} student_name Student Name
 * @apiParam (Body) {String} student_email Student Email
 * @apiParam (Body) {String} [password] this is saved from sha512 
 * @apiParam (Body) {Int} class Class
 * @apiParam (Body) {Int} gender Gender
 * @apiParam (Body) {Int} phone_number Phone Number
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
* @api {get} /school/all [GET] 모든 학교 찾기
* @apiName 모든 학교 찾기
* @apiGroup School
* @apiVersion 1.0.0
*
* @apiSuccess (Success 200) {String} school_code School code
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