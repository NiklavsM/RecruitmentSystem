DROP TABLE Student;

CREATE TABLE Student(id BIGINT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY, course VARCHAR(255),  cv TINYBLOB,  email VARCHAR(255),  gender VARCHAR(255), grad_year DATETIME, last_name VARCHAR(255), first_name  VARCHAR(255), login_token VARCHAR(255), time_stamp  DATETIME,  university  VARCHAR(255));

INSERT INTO Student (id, first_name, last_name, email, course, gender, grad_year, university, login_token) values (199, 'Nikola', 'Graham', 'nikola.graham@gmail.com', 'Computer Science', 'Female', '2018-12-01', 'University of Oxford', 'TOKEN123');
INSERT INTO Student (id, first_name, last_name, email, course, gender, grad_year, university) values (200, 'Niklavs', 'Meiers', 'niklavs.meiers@gmail.com', 'Computer Science', 'Female', '2018-12-01', 'University of Oxford');
INSERT INTO Student (id, first_name, last_name, email, course, gender, grad_year, university) values (201, 'John', 'Plea', 'john.plea@gmail.com', 'Medicine', 'Male', '2018-12-01', 'University of Cambridge');
INSERT INTO Student (id, first_name, last_name, email, course, gender, grad_year, university) values (202, 'Doe', 'Franci', 'doe.franci@gmail.com', 'Finance', 'Male', '2018-12-01', 'University of St Andrew');
INSERT INTO Student (id, first_name, last_name, email, course, gender, grad_year, university) values (203, 'Anna', 'Forest', 'anna.forest@gmail.com', 'Accounting', 'Female', '2018-12-01', 'University of Oxford');
INSERT INTO Student (id, first_name, last_name, email, course, gender, grad_year, university) values (204, 'Mary', 'Hill', 'mary.hill@gmail.com', 'Economics', 'Female', '2018-12-01', 'University of Strathclyde');
INSERT INTO Student (id, first_name, last_name, email, course, gender, grad_year, university) values (205, 'Smith', 'Hill', 'smith.hill@gmail.com', 'Economics', 'Male', '2018-12-01', 'University of Strathclyde');
INSERT INTO Student (id, first_name, last_name, email, course, gender, grad_year, university) values (206, 'Joe', 'Doe', 'joe.doe@gmail.com', 'Economics', 'Male', '2018-12-01', 'University of Strathclyde');
INSERT INTO Student (id, first_name, last_name, email, course, gender, grad_year, university) values (207, 'Mary', 'Hill', 'mary.hill@gmail.com', 'Economics', 'Other', '2018-12-01', 'University of Strathclyde');
INSERT INTO Student (id, first_name, last_name, email, course, gender, grad_year, university) values (208, 'Mary', 'Hill', 'mary.hill@gmail.com', 'Economics', 'Female', '2018-12-01', 'University of Strathclyde');
INSERT INTO Student (id, first_name, last_name, email, course, gender, grad_year, university) values (209, 'Mary', 'Hill', 'mary.hill@gmail.com', 'Economics', 'Female', '2018-12-01', 'University of Strathclyde');
INSERT INTO Student (id, first_name, last_name, email, course, gender, grad_year, university) values (210, 'Mary', 'Hill', 'mary.hill@gmail.com', 'Economics', 'Female', '2018-12-01', 'University of Strathclyde');
INSERT INTO Student (id, first_name, last_name, email, course, gender, grad_year, university) values (211, 'Mary', 'Hill', 'mary.hill@gmail.com', 'Economics', 'Female', '2018-12-01', 'University of Strathclyde');
INSERT INTO Student (id, first_name, last_name, email, course, gender, grad_year, university) values (212, 'Mary', 'Hill', 'mary.hill@gmail.com', 'Economics', 'Female', '2018-12-01', 'University of Strathclyde');
INSERT INTO Student (id, first_name, last_name, email, course, gender, grad_year, university) values (213, 'Mary', 'Hill', 'mary.hill@gmail.com', 'Economics', 'Female', '2018-12-01', 'University of Strathclyde');
INSERT INTO Student (id, first_name, last_name, email, course, gender, grad_year, university) values (214, 'Mary', 'Hill', 'mary.hill@gmail.com', 'Economics', 'Female', '2018-12-01', 'University of Strathclyde');
