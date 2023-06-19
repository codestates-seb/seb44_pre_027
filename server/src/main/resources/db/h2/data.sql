  -- 테이블명: member
INSERT INTO member (email, nickname, password, created_at, modified_at, bio_title, bio_content, location)
VALUES
  ('john@example.com', 'John Doe', 'password123', '2023-06-15 10:30:00', '2023-06-15 10:30:00', 'Title 1', 'Content 1', 'Location 1'),
  ('jane@example.com', 'Jane Smith', 'password456', '2023-06-15 11:45:00', '2023-06-15 11:45:00', 'Title 2', 'Content 2', 'Location 2'),
  ('mark@example.com', 'Mark Johnson', 'password789', '2023-06-15 12:15:00', '2023-06-15 12:15:00', 'Title 3', 'Content 3', 'Location 3'),
  ('alice@example.com', 'Alice Brown', 'password321', '2023-06-15 13:20:00', '2023-06-15 13:20:00', 'Title 4', 'Content 4', 'Location 4'),
  ('michael@example.com', 'Michael Lee', 'password987', '2023-06-15 14:45:00', '2023-06-15 14:45:00', 'Title 5', 'Content 5', 'Location 5'),
  ('sarah@example.com', 'Sarah Wilson', 'password654', '2023-06-15 15:30:00', '2023-06-15 15:30:00', 'Title 6', 'Content 6', 'Location 6'),
  ('peter@example.com', 'Peter Davis', 'password789', '2023-06-15 16:15:00', '2023-06-15 16:15:00', 'Title 7', 'Content 7', 'Location 7'),
  ('emily@example.com', 'Emily Johnson', 'password234', '2023-06-15 17:00:00', '2023-06-15 17:00:00', 'Title 8', 'Content 8', 'Location 8'),
  ('david@example.com', 'David Smith', 'password567', '2023-06-15 18:15:00', '2023-06-15 18:15:00', 'Title 9', 'Content 9', 'Location 9'),
  ('olivia@example.com', 'Olivia Brown', 'password890', '2023-06-15 19:30:00', '2023-06-15 19:30:00', 'Title 10', 'Content 10', 'Location 10'),
  ('james@example.com', 'James Wilson', 'password123', '2023-06-15 20:45:00', '2023-06-15 20:45:00', 'Title 11', 'Content 11', 'Location 11');

  -- 테이블명: question
  INSERT INTO question (member_id, title, content, created_at, modified_at, views, vote_score)
  VALUES
    (1, 'Question 1', 'Content 1', '2023-06-15 10:30:00', '2023-06-15 10:30:00', 10, 1),
    (1, 'Question 2', 'Content 2', '2023-06-15 11:45:00', '2023-06-15 11:45:00', 5, 6),
    (3, 'Question 3', 'Content 3', '2023-06-15 12:15:00', '2023-06-15 12:15:00', 8, 5),
    (4, 'Question 4', 'Content 4', '2023-06-15 13:20:00', '2023-06-15 13:20:00', 12, 4),
    (5, 'Question 5', 'Content 5', '2023-06-15 14:45:00', '2023-06-15 14:45:00', 3, 6),
    (5, 'Question 6', 'Content 6', '2023-06-15 15:30:00', '2023-06-15 15:30:00', 20, 7),
    (5, 'Question 7', 'Content 7', '2023-06-15 16:15:00', '2023-06-15 16:15:00', 15, 10),
    (6, 'Question 8', 'Content 8', '2023-06-15 17:00:00', '2023-06-15 17:00:00', 6, 15),
    (7, 'Question 9', 'Content 9', '2023-06-15 18:15:00', '2023-06-15 18:15:00', 9, -3),
    (8, 'Question 10', 'Content 10', '2023-06-15 19:30:00', '2023-06-15 19:30:00', 10, -1);

-- 테이블명: answer
INSERT INTO answer (question_id, member_id, content, created_at, modified_at)
VALUES
  (1, 1, 'Answer 1', '2023-06-15 10:30:00', '2023-06-15 10:30:00'),
  (1, 1, 'Answer 2', '2023-06-15 11:45:00', '2023-06-15 11:45:00'),
  (2, 2, 'Answer 3', '2023-06-15 12:15:00', '2023-06-15 12:15:00'),
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