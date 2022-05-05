@@ -1,49 +1,34 @@
USE DATABASE joy-419419-athos-oliveira
SELECT * FROM filmes WHERE data_lancamento < "2017-05-04" and (sinopse LIKE "%anel%" OR titulo LIKE "%doce%") and avaliacao > 9.5;
SELECT * FROM filmes WHERE id = 001;
SET SQL_SAFE_UPDATES = 0;
-- execicio 1
-- remove coluna salario
ALTER TABLE Actor DROP COLUMN salary;
-- altera coluna genero para sex com 6 caracteres
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- altera coluna genero para genero com 255 caracteres
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
-- altera coluna genero para genero com 100 caracteres
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
-- execicio 2 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
    update Actor set name ="JULIANA PAES" where name LIKE "%Juliana Paes%";
update Actor set name ="Juliana Paes" where name LIKE "%JULIANA PAES%";
update Actor set name ="Wendy", birth_date ="1999.07.01",salary="400",gender="Kid" where id ="005";
-- execicio 3
delete from Actor where name ="Tony Ramos";
delete from Actor where gender ="male" and salary >=12000;

-- execicio 4
SELECT COUNT(*) FROM Actor;
SELECT COUNT(*) FROM Actor WHERE gender = "female";
SELECT avg(salary) FROM Actor;
SELECT max(salary) FROM Actor;
SELECT MIN(salary) FROM Actor WHERE gender = "female";
SELECT COUNT(*) FROM Actor WHERE gender = "female";
SELECT SUM(salary) FROM Actor WHERE gender = "female";
-- EXECICIO 5
SELECT * FROM Actor LIMIT 3;
SELECT * FROM Actor ORDER BY name DESC;
SELECT * FROM Actor ORDER BY name ASC LIMIT 2;
SELECT * FROM Actor WHERE gender = 'female' ORDER BY name DESC LIMIT 2;
SELECT COUNT(*), gender FROM Actor GROUP BY gender;
select name, id from Actor order by name desc;
select * from Actor order by salary asc;
SELECT salary, name FROM Actor ORDER BY salary DESC LIMIT 3;
SELECT avg(salary),gender FROM Actor GROUP BY gender;
--Execicio 6
SELECT * FROM Actor;
SELECT * FROM filmes;
ALTER TABLE filmes ADD data_limite date ;
ALTER TABLE filmes CHANGE avaliacao avaliacao FLOAT;
update filmes set data_limite ="2023.12.01" where id = "3";
update filmes set data_limite ="2020.04.11" where id = "2";
update filmes set data_limite ="2021.12.31" where id = "4";
update filmes set data_limite ="2000.12.21" where id = "1";
DELETE FROM filmes WHERE id = "002";
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