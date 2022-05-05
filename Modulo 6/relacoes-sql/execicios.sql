SELECT * FROM Actor;
SELECT * FROM filmes;
SELECT * FROM Avaliacao;
SELECT * FROM MovieCast;
CREATE TABLE Avaliacao (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		avaliacao FLOAT NOT NULL,
    filmes_id int,
    FOREIGN KEY (filmes_id) REFERENCES filmes(id)
);
INSERT INTO Avaliacao (id, comment, avaliacao, filmes_id) 
VALUES ("4","legal!",7,1);

ALTER TABLE filmes DROP COLUMN avaliacao;
delete from filmes where id = "3";

CREATE TABLE MovieCast (
		filmes_id int,
		actor_id VARCHAR(255),
    FOREIGN KEY (filmes_id) REFERENCES filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
INSERT INTO MovieCast (filmes_id, actor_id ) 
VALUES (3,"005");

SELECT * FROM filmes 
INNER JOIN Avaliacao ON filmes.id = Avaliacao.filmes_id;

SELECT m.id as filmes_id, r.avaliacao as avaliacao FROM filmes m
INNER JOIN Avaliacao r ON m.id = r.filmes_id;

SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;