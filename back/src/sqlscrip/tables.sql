create table clientes (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre varchar(20),
  edad int(2),
  profesion varchar(20)
);	

create table usuarios (
  id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre varchar(20),
  activo int(1)
);

create table auth (
  id int(10) PRIMARY KEY,
  usuario varchar(20) not null,
  password varchar(100) not null
);
