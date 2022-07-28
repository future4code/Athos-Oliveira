
CREATE TABLE IF NOT EXISTS COMPETICOES  (
  id VARCHAR(255) PRIMARY KEY,
  competicao VARCHAR(255) NOT NULL,
  progresso VARCHAR(50) NOT NULL DEFAULT "pendente",
  data_inicio  VARCHAR(50) NOT NULL,
  hora_inicio VARCHAR(50) not	null,
  hora_termino VARCHAR(50) not	null
);
select * from COMPETICOES ;
INSERT INTO  COMPETICOES(id,competicao,progresso,data_inicio,hora_inicio,hora_termino)
VALUES("003","100m rasos final","","2022-07-28","10:00:00","11:30:00");

CREATE TABLE IF NOT EXISTS RESULTADOS  (
  id VARCHAR(255) PRIMARY KEY,
  competicao VARCHAR(255) NOT NULL,
  atleta VARCHAR(255) NOT NULL,
  resultado double NOT NULL,
  unidade varchar(1) NOT NULL,
  competicao_id VARCHAR(255) NOT NULL,
  FOREIGN KEY(competicao_id) REFERENCES COMPETICOES(id)
);
INSERT INTO  RESULTADOS(id,competicao,atleta,resultado,unidade,competicao_id)
VALUES("001","Lançamento de Dardo","Joaozinho","10.234","s","002");
INSERT INTO  RESULTADOS(id,competicao,atleta,resultado,unidade,competicao_id)
VALUES("003","100m rasos","Jorginho","70.234","s","001");

select * from RESULTADOS ;

Drop table RESULTADOS;
Delete from COMPETICOES;
