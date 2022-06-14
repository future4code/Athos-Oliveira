CREATE TABLE Labook_User (
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);


CREATE TABLE Labook_Post (
	id VARCHAR(255) PRIMARY KEY, 
    photo VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    type VARCHAR(255) NOT NULL,
    createdAt VARCHAR(255)  NOT NULL,
    authorId varchar(255) NOT NULL,
    FOREIGN KEY (authorId) REFERENCES Labook_User(id)
);
CREATE TABLE Labook_UserPost_relation (
	post_id VARCHAR(255),
    authorId VARCHAR(255),
    FOREIGN KEY (post_id) REFERENCES Labook_Post(id),
    FOREIGN KEY (authorId) REFERENCES Labook_User(id)
);
CREATE TABLE Labook_UserFriend_relation (
	user_id VARCHAR(255),
    FriendId VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES Labook_User(id),
    FOREIGN KEY (FriendId) REFERENCES Labook_User(id)
);

SELECT * FROM Labook_User;
SELECT * FROM Labook_Post;


INSERT INTO  Labook_UserFriend_relation (user_id,FriendId)
VALUES("005", "001");

drop table Labook_Post;
