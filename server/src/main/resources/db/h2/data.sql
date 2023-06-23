  -- 테이블명: member (11)
INSERT INTO member (email, nickname, password, created_at, modified_at, bio_title, bio_content, location)
VALUES
  ('john@example.com', 'John Doe', 'password123', '2022-04-15 10:30:00', '2022-07-18 10:35:00', '', 'Computer Science student at TU Dresden. C++, Java, Python and Kotlin enthusiast.', 'Germany'),
  ('jane@example.com', 'Jane Smith', 'password456', '2022-06-15 11:45:00', '2022-06-15 11:48:00', 'Senior Software Engineer at Fuse Integration', 'Started programming on a Control Data mainframe in FORTRAN IV, back when that was still a new thing.', 'San Diego, CA, United States'),
  ('mark@example.com', 'Mark Johnson', 'password789', '2022-07-08 12:15:00', '2022-07-10 15:15:00', 'Sr. Software Development Engineer', 'I love the challenge of helping other developers resolve and overcome their hurdles, and expanding my own knowledge base at the same time.', 'Seattle, WA, USA'),
  ('tanaike@example.com', 'Tanaike', 'password321', '2022-09-21 13:20:00', '2023-04-15 01:20:00', null, 'Google Developer Expert (GDE) and Google Cloud Champion Innovator', 'Japan'),
  ('michael@example.com', 'Michael Lee', 'password987', '2022-11-15 14:45:00', '2022-11-15 14:45:00', 'DevOps', 'In love with Python from early 2.4 days, with occasional C++/Lua/PHP/Js in-between.', 'Slovakia'),
  ('sarah@example.com', 'Sarah Wilson', 'password654', '2022-12-05 15:30:00', '2022-12-15 15:39:00', 'Hi!', 'about SQL, Python, and Java. Always learning!', 'Melbourne, Australia'),
  ('peter@example.com', 'Peter Davis', 'password789', '2023-01-01 16:15:00', '2023-01-01 16:15:00', 'Developer', 'Im a developer at heart. I love C++ even though it is bad for you :) I love many more languages, but I specialize in C++.', 'Netherlands'),
  ('emily@example.com', 'Emily Johnson', 'password234', '2023-02-26 17:00:00', '2023-02-27 17:00:00', 'Flutter developper', 'Dart makes my heart Flutter', 'Paris, France'),
  ('selenium@example.com', 'Selenium', 'password567', '2023-04-01 18:15:00', '2023-04-01 18:15:00', 'Team Lead (Test Automation Engineer and a Web Security Analyst)', 'A full stack test automation engineer and a web security analyst working with Selenium (Java/Python).', 'Pune, Maharashtra, India'),
  ('olivia@example.com', 'Olivia Brown', 'password890', '2023-05-20 19:30:00', '2023-05-20 19:30:00', 'Senior iOS Lead Developer', 'Mobile Software Architect', 'Iran'),
  ('james@example.com', 'James Wilson', 'password123', '2023-06-06 20:45:00', '2023-06-06 20:45:00', null, 'I develop primarily in C and Java, with interests in network programming, encryption, network security, and multicast', 'New Jersey');

  -- 테이블명: question (15)
  INSERT INTO question (member_id, title, content, created_at, modified_at, views, vote_score)
  VALUES
    (1, 'How to get company earning announcements data api?','Content2', '2023-06-15 10:30:00', '2023-06-15 10:30:00', 10, 1),
    (2, 'Question 2', 'Content 2', '2023-06-15 11:45:00', '2023-06-15 11:45:00', 5, -1),
    (3, 'Question 3', 'Content 3', '2023-06-15 12:15:00', '2023-06-15 12:15:00', 8, 0),
    (4, 'Question 4', 'Content 4', '2023-06-15 13:20:00', '2023-06-15 13:20:00', 12, 0),
    (5, 'Question 5', 'Content 5', '2023-06-15 14:45:00', '2023-06-15 14:45:00', 3, 0),
    (6, 'Question 6', 'Content 6', '2023-06-15 15:30:00', '2023-06-15 15:30:00', 20, 0),
    (7, 'Question 7', 'Content 7', '2023-06-15 16:15:00', '2023-06-15 16:15:00', 15, 0),
    (8, 'Question 8', 'Content 8', '2023-06-15 17:00:00', '2023-06-15 17:00:00', 6, 0),
    (9, 'Question 9', 'Content 9', '2023-06-15 18:15:00', '2023-06-15 18:15:00', 9, 0),
    (10, 'Question 10', 'Content 10', '2023-06-15 19:30:00', '2023-06-15 19:30:00', 2, 0),
    (11, 'Question 11', 'Content 11', '2023-06-16 08:15:00', '2023-06-16 08:15:00', 0, 0),
    (1, 'Question 12', 'Content 12', '2023-06-16 12:42:00', '2023-06-16 12:42:00', 7, 0),
    (2, 'Question 13', 'Content 13', '2023-06-17 15:10:00', '2023-06-17 15:10:00', 16, 0),
    (3, 'Question 14', 'Content 14', '2023-06-17 23:52:00', '2023-06-17 23:52:00', 1, 0),
    (4, 'Question 15', 'Content 15', '2023-06-18 07:29:00', '2023-06-18 07:29:00', 12, 0);

-- 테이블명: answer
INSERT INTO answer (question_id, member_id, content, created_at, modified_at)
VALUES
  (1, 2, 'Answer 1', '2023-06-15 10:30:00', '2023-06-15 10:30:00'),
  (1, 1, 'Answer 2', '2023-06-15 11:45:00', '2023-06-15 11:45:00'),
  (2, 1, 'Answer 3', '2023-06-15 12:15:00', '2023-06-15 12:15:00'),
  (2, 2, 'Answer 4', '2023-06-15 13:20:00', '2023-06-15 13:20:00'),
  (2, 2, 'Answer 5', '2023-06-15 14:45:00', '2023-06-15 14:45:00'),
  (2, 2, 'Answer 6', '2023-06-15 15:30:00', '2023-06-15 15:30:00'),
  (3, 2, 'Answer 7', '2023-06-15 16:15:00', '2023-06-15 16:15:00'),
  (3, 3, 'Answer 8', '2023-06-15 17:00:00', '2023-06-15 17:00:00'),
  (4, 3, 'Answer 9', '2023-06-15 18:15:00', '2023-06-15 18:15:00'),
  (4, 4, 'Answer 10', '2023-06-15 19:30:00', '2023-06-15 19:30:00'),
  (4, 5, 'Answer 11', '2023-06-15 20:45:00', '2023-06-15 20:45:00'),
  (4, 5, 'Answer 12', '2023-06-15 21:00:00', '2023-06-15 21:00:00'),
  (5, 5, 'Answer 13', '2023-06-15 22:15:00', '2023-06-15 22:15:00'),
  (6, 5, 'Answer 14', '2023-06-15 23:30:00', '2023-06-15 23:30:00'),
  (7, 6, 'Answer 15', '2023-06-16 00:45:00', '2023-06-16 00:45:00'),
  (7, 7, 'Answer 16', '2023-06-16 01:15:00', '2023-06-16 01:15:00'),
  (7, 7, 'Answer 17', '2023-06-16 02:30:00', '2023-06-16 02:30:00'),
  (8, 7, 'Answer 18', '2023-06-16 03:45:00', '2023-06-16 03:45:00');

-- 테이블명: comment
INSERT INTO comment (question_id, member_id, content, created_at, modified_at)
VALUES
    (1, 4,'content 1', '2023-06-17 20:07:00', '2023-06-17 20:07:00'),
    (2, 3,'content 2', '2023-06-18 10:05:20', '2023-06-18 10:05:20'),
    (5, 1,'content 3', '2023-06-18 16:12:00', '2023-06-18 16:12:00'),
    (4, 9,'content 4', '2023-06-19 04:45:00', '2023-06-19 04:45:00');

-- 테이블명 : votes
INSERT INTO votes (status, member_id, question_id)
VALUES
    ('GOOD', 2, 1),
    ('BAD', 2, 2);
