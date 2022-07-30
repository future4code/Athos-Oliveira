
CREATE TABLE IF NOT EXISTS Dog_Walking  (
  id VARCHAR(255) PRIMARY KEY,
  status VARCHAR(50) NOT NULL,
  data_agendamento date NOT NULL,
  preco double NOT NULL,
  duracao time not	null,
  latitude double NOT NULL,
  longitude double NOT NULL,
  pets VARCHAR(50) NOT NULL,
  hora_inicio time not	null,
  hora_termino time not	null
);

INSERT INTO  Dog_Walking(id,status,data_agendamento,preco,duracao,latitude,longitude,pets,hora_inicio,hora_termino)
VALUES("001", "In Progress","2022-07-19","100","30:00","21.125","-11.403611","Camelo","01:30:00","03:00:00");

select * from Dog_Walking;