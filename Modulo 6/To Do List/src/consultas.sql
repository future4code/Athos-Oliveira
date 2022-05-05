CREATE TABLE Users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    nickname varchar(255)NOT NULL,
    email VARCHAR(255) NOT NULL
);
INSERT INTO Users (id, name, email, nickname)
VALUES(
  "005", 
  "Buttles",
  "Buttles@hotmail.com",
  "Buttles"
);
select * from Users;
CREATE TABLE Tasks (
    taskId VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    description VARCHAR (255) NOT NULL,
    limitDate DATE NOT NULL,
    status varchar (255) not null,
    creatorUserId VARCHAR(255) ,    
    creatorUserNickname VARCHAR(255),
    FOREIGN KEY (creatorUserId) REFERENCES Users(id)
 
);

INSERT INTO Tasks (taskId, title, description, limitDate,status,creatorUserId,creatorUserNickname)
VALUES(
  "007", 
  "go scholl",
  " go scholl  ",
"2022-08-25",
  "done",
  "005",
  "Buttles"
);
select * from Tasks;
select * from Tasks where limitDate < current_date();
update Tasks set creatorUserNickname ="Orange" where  creatorUserId = "001";

CREATE TABLE ResponsibleUsers (
    idTaskId VARCHAR(255) PRIMARY KEY,
    userId VARCHAR (255) NOT NULL,
    FOREIGN KEY (idTaskId) REFERENCES Tasks(taskId),
    FOREIGN KEY (userId) REFERENCES Users(id)
);
select * from ResponsibleUsers;
INSERT INTO ResponsibleUsers (idTaskId, userId)VALUES("001", "001");



