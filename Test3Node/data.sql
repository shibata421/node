CREATE DATABASE IF NOT EXISTS posts_comments;
USE posts_comments;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY ,
    title VARCHAR(255) NOT NULL,
    content VARCHAR(4096) NOT NULL,
    creation_date DATETIME DEFAULT NOW()
);
CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(255) NOT NULL,
    content VARCHAR(4096) NOT NULL,
    creation_date DATETIME DEFAULT NOW(),
    post_id INT NOT NULL,
    FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE 
);
INSERT INTO posts(title, content) VALUES ("post1", "post2");
INSERT INTO comments(author, content, post_id)
VALUES ("author1", "content2", 1);
INSERT INTO comments(author, content, post_id)
VALUES ("author1", "content1", 1);
INSERT INTO comments(author, content, post_id)
VALUES ("author2", "content3", 1);