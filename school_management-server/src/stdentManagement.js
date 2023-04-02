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
 * @api {post} /admin/ [POST] 관리자 등록하기
 * @apiName 관리자 등록하기
 * @apiGroup Admin
 * @apiVersion 1.0.0
 * 
 * @apiParam (Body) {String} admin_name Admin name
 * @apiParam (Body) {String} [password] this is saved from sha512 
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


