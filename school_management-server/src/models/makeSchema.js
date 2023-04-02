const pool = require('./db');

module.exports = {

    createAdminSchema: async () => {
        const sql = `CREATE table admin (
            admin_uuid VARCHAR(36) NOT NULL COMMENT '관리자 UUID',
            admin_name VARCHAR(30) NOT NULL COMMENT '관리자 이름',
            password VARCHAR(128) NOT NULL COMMENT '비밀번호(SHA512)',
            salt VARCHAR(128) NOT NULL COMMENT '솔트값',
            school_code INT NOT NULL COMMENT '학교 분류 코드',
            PRIMARY KEY(admin_uuid)
        )`;
        const result = await pool.execute(sql);
        return result;
    },

    createSchoolSchema: async () => {
        const sql = `CREATE table school (
            school_code INT NOT NULL AUTO_INCREMENT COMMENT '학교 분류 코드',
            school_name VARCHAR(30) NOT NULL COMMENT '학교 이름',
            school_email VARCHAR(50) NOT NULL COMMENT '학교 이메일',
            PRIMARY KEY(school_code)
        )`;
        const result = await pool.execute(sql);
        return result;
    },

    createStudentSchema: async () => {
        const sql = `CREATE table student (
            student_code VARCHAR(30) NOT NULL COMMENT '학생 학번',
            student_name VARCHAR(30) NOT NULL COMMENT '학생 이름',
            student_email VARCHAR(50) NOT NULL COMMENT '학생 이메일',
            password VARCHAR(128) NOT NULL COMMENT '비밀번호(SHA512)',
            salt VARCHAR(128) NOT NULL COMMENT '솔트값',
            class TINYINT(3) NOT NULL DEFAULT 1 COMMENT '1: 1학년 ,2: 2학년, 3: 3학년',
            gender TINYINT(2) NOT NULL DEFAULT 0 COMMENT '0 : MALE, 1:FEMALE',
            phone_number VARCHAR(20) NOT NULL COMMENT '핸드폰 번호',
            profile_image VARCHAR(50) COMMENT '프로필 사진',
            student_about VARCHAR(300) COMMENT '학생 소개',
            school_code INT NOT NULL COMMENT '학교 분류 코드',
            PRIMARY KEY(student_code)
        )`;
        const result = await pool.execute(sql);
        return result;
    },

    createTeacherSchema: async () => {
        const sql = `CREATE table teacher (
            teacher_code VARCHAR(30) NOT NULL COMMENT '선생님 학번',
            teacher_name VARCHAR(30) NOT NULL COMMENT '선생님 이름',
            teacher_email VARCHAR(50) NOT NULL COMMENT '선생님 이메일',
            password VARCHAR(128) NOT NULL COMMENT '비밀번호(SHA512)',
            salt VARCHAR(128) NOT NULL COMMENT '솔트값',
            class TINYINT(3) NOT NULL DEFAULT 1 COMMENT '1: 1학년 ,2: 2학년, 3: 3학년',
            gender TINYINT(2) NOT NULL DEFAULT 0 COMMENT '0 : MALE, 1:FEMALE',
            subject TINYINT(5) NOT NULL DEFAULT 0 COMMENT '0 : 국어 , 1: 수학 , 2 : 사회 , 3: 과학, 4: 영어',
            phone_number VARCHAR(20) NOT NULL COMMENT '핸드폰 번호',
            profile_image VARCHAR(50) COMMENT '프로필 사진',
            teacher_about VARCHAR(300) COMMENT '선생님 소개',
            school_code INT NOT NULL COMMENT '학교 분류 코드',
            PRIMARY KEY(teacher_code)
        )`;
        const result = await pool.execute(sql);
        return result;
    }
}