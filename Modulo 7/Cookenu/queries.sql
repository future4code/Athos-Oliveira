CREATE TABLE cookenu_User (
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE cookenu_Login (
	id VARCHAR(255) PRIMARY KEY, 
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);


CREATE TABLE cookenu_Recipes (
	id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    cratedAt DATE,
    authorId varchar(255) NOT NULL,
    FOREIGN KEY (authorId) REFERENCES cookenu_User(id)
);
CREATE TABLE friend_relation (
	user_id VARCHAR(255),
    friend_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES cookenu_User(id)
 
);

INSERT INTO  Labook_Recipes(id,title,description,cratedAt)
VALUES("001", "Arroz doce","Arroz + 1 xicara de açuca","2022-01-02","001");

INSERT INTO  cookenu_User(id,name,email,password)
VALUES("001", "Goku","Goku@dagonball.com","123456789");

INSERT INTO  cookenu_Login(id,name,email,password)
VALUES("001", "Goku","Goku@dagonball.com","123456789");