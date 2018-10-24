INSERT INTO adm_seccion_sindical VALUES 
(1,'Oficina Central'),
(2,'UGDD'),
(3,'Gesti�n de Proyectos'),
(4,'Ingenier�a'),
(5,'Estructura'),
(6,'Especialidades'),
(7,'USTI'),
(8, 'UGDC #4'),
(9, 'UGDC #1'),
(10, 'UGDC #2'),
(11, 'UGDC #3'),
(12, 'UGDC #5'),
(13, 'UGDC #6'),
(14, 'Servicios Generales');

INSERT INTO adm_escala_salarial VALUES 
(1,'I',1.00,225.00),
(2,'II',1.04,235.00),                                        
(3,'III',1.07,240.00),
(4,'IV',1.12,250.00),
(5,'V',1.14,255.00),
(6,'VI',1.16,260.00),
(7,'VII',1.23,275.00),
(8,'VIII',1.27,285.00),
(9,'IX',1.41,315.00),
(10,'X',1.44,325.00),
(11,'XI',1.63,365.00),
(12,'XII',1.72,385.00),
(13,'XIII',1.77,400.00),
(14,'XIV',1.90,425.00),
(15,'XV',1.96,440.00),
(16,'XVI',2.02,455.00),
(17,'XVII',2.11,475.00),
(18,'XVIII',2.22,500.00),
(19,'XIX',2.33,525.00),
(20,'XX',2.44,550.00),
(21,'XXI',2.67,600.00),
(22,'XXII',2.89,650.00);

INSERT INTO adm_antiguedad (id,tecnico,pago_adicional,porciento_5,escala_id,valor) 
VALUES 
(1,FALSE,FALSE,TRUE,1,11.00),
(2,FALSE,TRUE,TRUE,1,15.00), 
(3,FALSE,FALSE,FALSE,1,23.00),
(4,FALSE,TRUE,FALSE,1,30.00),
(5,FALSE,FALSE,TRUE,2,12.00),
(6,FALSE,TRUE,TRUE,2,16.00), 
(7,FALSE,FALSE,FALSE,2,24.00),
(8,FALSE,TRUE,FALSE,2,31.00),
(9,FALSE,FALSE,TRUE,3,12.00),
(10,FALSE,TRUE,TRUE,3,16.00),
(11,FALSE,FALSE,FALSE,3,24.00),
(12,FALSE,TRUE,FALSE,3,32.00),
(13,FALSE,FALSE,TRUE,4,13.00),
(14,FALSE,TRUE,TRUE,4,16.00),
(15,FALSE,FALSE,FALSE,4,25.00),
(16,FALSE,TRUE,FALSE,4,33.00),
(17,FALSE,FALSE,TRUE,5,13.00),
(18,TRUE,FALSE,TRUE,5,14.00),
(19,FALSE,TRUE,TRUE,5,17.00),
(20,TRUE,TRUE,TRUE,5,18.00),
(21,FALSE,FALSE,FALSE,5,26.00),
(22,TRUE,FALSE,FALSE,5,29.00),
(23,FALSE,TRUE,FALSE,5,33.00),
(24,TRUE,TRUE,FALSE,5,36.00),
(25,FALSE,FALSE,TRUE,6,13.00),
(26,TRUE,FALSE,TRUE,6,15.00),
(27,FALSE,TRUE,TRUE,6,17.00),
(28,TRUE,TRUE,TRUE,6,18.00),
(29,FALSE,FALSE,FALSE,6,26.00),
(30,TRUE,FALSE,FALSE,6,29.00),
(31,FALSE,TRUE,FALSE,6,34.00),
(32,TRUE,TRUE,FALSE,6,37.00),
(33,FALSE,FALSE,TRUE,7,14.00),
(34,TRUE,FALSE,TRUE,7,15.00),
(35,FALSE,TRUE,TRUE,7,18.00),
(36,TRUE,TRUE,TRUE,7,19.00),
(37,FALSE,FALSE,FALSE,7,28.00),
(38,TRUE,FALSE,FALSE,7,31.00),
(39,FALSE,TRUE,FALSE,7,35.00),
(40,TRUE,TRUE,FALSE,7,38.00),
(41,FALSE,FALSE,TRUE,8,14.00),
(42,TRUE,FALSE,TRUE,8,16.00),
(43,FALSE,TRUE,TRUE,8,18.00),
(44,TRUE,TRUE,TRUE,8,20.00),
(45,FALSE,FALSE,FALSE,8,29.00),
(46,TRUE,FALSE,FALSE,8,32.00),
(47,FALSE,TRUE,FALSE,8,36.00),
(48,TRUE,TRUE,FALSE,8,39.00),
(49,FALSE,FALSE,TRUE,9,16.00),
(50,TRUE,FALSE,TRUE,9,17.00),
(51,FALSE,TRUE,TRUE,9,20.00),
(52,TRUE,TRUE,TRUE,9,21.00),
(53,FALSE,FALSE,FALSE,9,32.00),
(54,TRUE,FALSE,FALSE,9,35.00),
(55,FALSE,TRUE,FALSE,9,39.00),
(56,TRUE,TRUE,FALSE,9,42.00),
(57,FALSE,FALSE,TRUE,10,16.00),
(58,TRUE,FALSE,TRUE,10,18.00),
(59,FALSE,TRUE,TRUE,10,20.00),
(60,TRUE,TRUE,TRUE,10,22.00),
(61,FALSE,FALSE,FALSE,10,33.00),
(62,TRUE,FALSE,FALSE,10,36.00),
(63,FALSE,TRUE,FALSE,10,40.00),
(64,TRUE,TRUE,FALSE,10,43.00),
(65,FALSE,FALSE,TRUE,11,18.00),
(66,TRUE,FALSE,TRUE,11,20.00),
(67,FALSE,TRUE,TRUE,11,22.00),
(68,TRUE,TRUE,TRUE,11,24.00),
(69,FALSE,FALSE,FALSE,11,37.00),
(70,TRUE,FALSE,FALSE,11,40.00),
(71,FALSE,TRUE,FALSE,11,44.00),
(72,TRUE,TRUE,FALSE,11,47.00),
(73,FALSE,FALSE,TRUE,12,19.00),
(74,TRUE,FALSE,TRUE,12,21.00),
(75,FALSE,TRUE,TRUE,12,23.00),
(76,TRUE,TRUE,TRUE,12,25.00),
(77,FALSE,FALSE,FALSE,12,39.00),
(78,TRUE,FALSE,FALSE,12,42.00),
(79,FALSE,TRUE,FALSE,12,46.00),
(80,TRUE,TRUE,FALSE,12,49.00),
(81,FALSE,FALSE,TRUE,13,20.00),
(82,TRUE,FALSE,TRUE,13,22.00),
(83,FALSE,TRUE,TRUE,13,24.00),
(84,TRUE,TRUE,TRUE,13,25.00),
(85,FALSE,FALSE,FALSE,13,40.00),
(86,TRUE,FALSE,FALSE,13,43.00),
(87,FALSE,TRUE,FALSE,13,48.00),
(88,TRUE,TRUE,FALSE,13,51.00),
(89,FALSE,FALSE,TRUE,14,21.00),
(90,TRUE,FALSE,TRUE,14,23.00),
(91,FALSE,TRUE,TRUE,14,31.00),
(92,TRUE,TRUE,TRUE,14,27.00),
(93,FALSE,FALSE,FALSE,14,43.00),
(94,TRUE,FALSE,FALSE,14,46.00),
(95,FALSE,TRUE,FALSE,14,63.00),
(96,TRUE,TRUE,FALSE,14,53.00),
(97,FALSE,FALSE,TRUE,15,22.00),
(98,TRUE,FALSE,TRUE,15,24.00),
(99,FALSE,TRUE,TRUE,15,32.00),
(100,TRUE,TRUE,TRUE,15,27.00),
(101,FALSE,FALSE,FALSE,15,44.00),
(102,TRUE,FALSE,FALSE,15,47.00),
(103,FALSE,TRUE,FALSE,15,64.00),
(104,TRUE,TRUE,FALSE,15,55.00),
(105,FALSE,FALSE,TRUE,16,23.00),
(106,TRUE,FALSE,TRUE,16,24.00),
(107,FALSE,TRUE,TRUE,16,33.00),
(108,TRUE,TRUE,TRUE,16,28.00),
(109,FALSE,FALSE,FALSE,16,46.00),
(110,TRUE,FALSE,FALSE,16,49.00),
(111,FALSE,TRUE,FALSE,16,66.00),
(112,TRUE,TRUE,FALSE,16,56.00),
(113,FALSE,FALSE,TRUE,17,24.00),
(114,FALSE,TRUE,TRUE,17,34.00),
(115,FALSE,FALSE,FALSE,17,48.00),
(116,FALSE,TRUE,FALSE,17,68.00),
(117,FALSE,FALSE,TRUE,18,25.00),
(118,FALSE,TRUE,TRUE,18,35.00),
(119,FALSE,FALSE,FALSE,18,50.00),
(120,FALSE,TRUE,FALSE,18,70.00),
(121,FALSE,FALSE,TRUE,19,26.00),
(122,FALSE,TRUE,TRUE,19,36.00),
(123,FALSE,FALSE,FALSE,19,53.00),
(124,FALSE,TRUE,FALSE,19,73.00),
(125,FALSE,FALSE,TRUE,20,28.00),
(126,FALSE,TRUE,TRUE,20,38.00),
(127,FALSE,FALSE,FALSE,20,55.00),
(128,FALSE,TRUE,FALSE,20,75.00),
(129,FALSE,FALSE,TRUE,21,30.00),
(130,FALSE,TRUE,TRUE,21,40.00),
(131,FALSE,FALSE,FALSE,21,60.00),
(132,FALSE,TRUE,FALSE,21,80.00),
(133,FALSE,FALSE,TRUE,22,33.00),
(134,FALSE,TRUE,TRUE,22,43.00),
(135,FALSE,FALSE,FALSE,22,65.00),
(136,FALSE,TRUE,FALSE,22,85.00);


INSERT INTO adm_calificacion (id,codigo,nombre) 
VALUES 
(1,'01','Carreras de Ciencias T�cnicas'),
(2,'10','Carreras de Dise�o'),
(3,'02','Carreras de Ciencias Naturales y Matem�tica'),
(4,'03','Carreras de Ciencias Agropecuarias'),
(5,'04','Carreras de Econom�a'),
(6,'05','Carreras de Ciencias Sociales y Human�sticas'),
(7,'11','Carreras Nucleares'),
(8,'07','Carreras Pedag�gicas'),
(9,'08','Carreras de Cultura'),
(10,'09','Carreras de Cultura F�sica'),
(11,'06','Carreras de Ciencias M�dicas'),
(12,'31','ETP. Y TM. Geolog�a, Miner�a y Metal�rgica'),
(13,'32','ETP. Y TM. Energ�tica'),
(14,'33','ETP. y TM. Construcci�n de Maquinarias'),
(15,'34','ETP. Y TM. INDUSTRIAS AZUC., QUIM. Y ALIM. Y OTRAS'),
(16,'35','ETP. Y TM. Electron, Automatiz y Comunicaciones'),
(17,'36','ETP. Y TM. Transporte'),
(18,'37','ETP. Y TM. Construcci�n'),
(19,'38','ETP. Y TM. Producci�n Agropecuaria'),
(21,'49','ETP. Y TM. ESPECIALIDADES FORMADAS POR EL MINSAP'),
(22,'40','ETP. Y TM. TECN. ARTICULOS INDUSTRIA LIGERA'),
(23,'41','ETP. Y TM. GASTRONOMIA Y ALOJAMIENTO'),
(24,'39','ETP. Y TM. Econom�a'),
(25,'46','ETP. Y TM. COMERCIO'),
(26,'42','ETP. Y TM. Cer�mica'),
(27,'43','ETP. Y TM. Otras profesiones'),
(28,'44','ETP. Y TM. Servicios de belleza'),
(29,'45','ETP. Y TM. Relojer�a'),
(30,'47','ETP. Y TM. Artesan�a'),
(31,'48','ETP. Y TM. EDUCACION FORMACION PERS. DOC. TM.'),
(32,'50','ETP. Y TM. ESPECIALIDADES FORMADAS POR EL MINCULT');

INSERT INTO adm_cies (id,tecnico,pago_adicional,porciento_30,cies, escala_id) 
VALUES 
(1,FALSE,FALSE,TRUE,68.00,1),
(2,FALSE,TRUE,TRUE,90.00,1),
(3,FALSE,FALSE,FALSE,113.00,1),
(4,FALSE,TRUE,FALSE,150.00,1),
(5,FALSE,FALSE,TRUE,71.00,2),
(6,FALSE,TRUE,TRUE,93.00,2),
(7,FALSE,FALSE,FALSE,118.00,2),
(8,FALSE,TRUE,FALSE,155.00,2),
(9,FALSE,FALSE,TRUE,72.00,3),
(10,FALSE,TRUE,TRUE,95.00,3),
(11,FALSE,FALSE,FALSE,120.00,3),
(12,FALSE,TRUE,FALSE,158.00,3),
(13,FALSE,FALSE,TRUE,75.00,4),
(14,FALSE,TRUE,TRUE,98.00,4),
(15,FALSE,FALSE,FALSE,125.00,4),
(16,FALSE,TRUE,FALSE,163.00,4),
(17,FALSE,FALSE,TRUE,77.00,5),
(18,TRUE,FALSE,TRUE,86.00,5),
(19,FALSE,TRUE,TRUE,99.00,5),
(20,TRUE,TRUE,TRUE,108.00,5),
(21,FALSE,FALSE,FALSE,128.00,5),
(22,TRUE,FALSE,FALSE,143.00,5),
(23,FALSE,TRUE,FALSE,165.00,5),
(24,TRUE,TRUE,FALSE,180.00,5),
(25,FALSE,FALSE,TRUE,78.00,6),
(26,TRUE,FALSE,TRUE,87.00,6),
(27,FALSE,TRUE,TRUE,101.00,6),
(28,TRUE,TRUE,TRUE,110.00,6),
(29,FALSE,FALSE,FALSE,130.00,6),
(30,TRUE,FALSE,FALSE,145.00,6),
(31,FALSE,TRUE,FALSE,168.00,6),
(32,TRUE,TRUE,FALSE,183.00,6),
(33,FALSE,FALSE,TRUE,83.00,7),
(34,TRUE,FALSE,TRUE,92.00,7),
(35,FALSE,TRUE,TRUE,105.00,7),
(36,TRUE,TRUE,TRUE,114.00,7),
(37,FALSE,FALSE,FALSE,138.00,7),
(38,TRUE,FALSE,FALSE,153.00,7),
(39,FALSE,TRUE,FALSE,175.00,7),
(40,TRUE,TRUE,FALSE,190.00,7),
(41,FALSE,FALSE,TRUE,86.00,8),
(42,TRUE,FALSE,TRUE,95.00,8),
(43,FALSE,TRUE,TRUE,108.00,8),
(44,TRUE,TRUE,TRUE,117.00,8),
(45,FALSE,FALSE,FALSE,143.00,8),
(46,TRUE,FALSE,FALSE,158.00,8),
(47,FALSE,TRUE,FALSE,180.00,8),
(48,TRUE,TRUE,FALSE,195.00,8),
(49,FALSE,FALSE,TRUE,95.00,9),
(50,TRUE,FALSE,TRUE,104.00,9),
(51,FALSE,TRUE,TRUE,117.00,9),
(52,TRUE,TRUE,TRUE,126.00,9),
(53,FALSE,FALSE,FALSE,158.00,9),
(54,TRUE,FALSE,FALSE,173.00,9),
(55,FALSE,TRUE,FALSE,195.00,9),
(56,TRUE,TRUE,FALSE,210.00,9),
(57,FALSE,FALSE,TRUE,98.00,10),
(58,TRUE,FALSE,TRUE,107.00,10),
(59,FALSE,TRUE,TRUE,120.00,10),
(60,TRUE,TRUE,TRUE,129.00,10),
(61,FALSE,FALSE,FALSE,163.00,10),
(62,TRUE,FALSE,FALSE,178.00,10),
(63,FALSE,TRUE,FALSE,200.00,10),
(64,TRUE,TRUE,FALSE,215.00,10),
(65,FALSE,FALSE,TRUE,110.00,11),
(66,TRUE,FALSE,TRUE,119.00,11),
(67,FALSE,TRUE,TRUE,132.00,11),
(68,TRUE,TRUE,TRUE,141.00,11),
(69,FALSE,FALSE,FALSE,183.00,11),
(70,TRUE,FALSE,FALSE,198.00,11),
(71,FALSE,TRUE,FALSE,220.00,11),
(72,TRUE,TRUE,FALSE,235.00,11),
(73,FALSE,FALSE,TRUE,116.00,12),
(74,TRUE,FALSE,TRUE,125.00,12),
(75,FALSE,TRUE,TRUE,138.00,12),
(76,TRUE,TRUE,TRUE,147.00,12),
(77,FALSE,FALSE,FALSE,193.00,12),
(78,TRUE,FALSE,FALSE,208.00,12),
(79,FALSE,TRUE,FALSE,230.00,12),
(80,TRUE,TRUE,FALSE,245.00,12),
(81,FALSE,FALSE,TRUE,120.00,13),
(82,TRUE,FALSE,TRUE,129.00,13),
(83,FALSE,TRUE,TRUE,143.00,13),
(84,TRUE,TRUE,TRUE,152.00,13),
(85,FALSE,FALSE,FALSE,200.00,13),
(86,TRUE,FALSE,FALSE,215.00,13),
(87,FALSE,TRUE,FALSE,238.00,13),
(88,TRUE,TRUE,FALSE,253.00,13),
(89,FALSE,FALSE,TRUE,128.00,14),
(90,TRUE,FALSE,TRUE,137.00,14),
(91,FALSE,TRUE,TRUE,188.00,14),
(92,TRUE,TRUE,TRUE,159.00,14),
(93,FALSE,FALSE,FALSE,213.00,14),
(94,TRUE,FALSE,FALSE,228.00,14),
(95,FALSE,TRUE,FALSE,313.00,14),
(96,TRUE,TRUE,FALSE,265.00,14),
(97,FALSE,FALSE,TRUE,132.00,15),
(98,TRUE,FALSE,TRUE,141.00,15),
(99,FALSE,TRUE,TRUE,192.00,15),
(100,TRUE,TRUE,TRUE,164.00,15),
(101,FALSE,FALSE,FALSE,220.00,15),
(102,TRUE,FALSE,FALSE,235.00,15),
(103,FALSE,TRUE,FALSE,320.00,15),
(104,TRUE,TRUE,FALSE,273.00,15),
(105,FALSE,FALSE,TRUE,137.00,16),
(106,TRUE,FALSE,TRUE,146.00,16),
(107,FALSE,TRUE,TRUE,197.00,16),
(108,TRUE,TRUE,TRUE,168.00,16),
(109,FALSE,FALSE,FALSE,228.00,16),
(110,TRUE,FALSE,FALSE,243.00,16),
(111,FALSE,TRUE,FALSE,328.00,16),
(112,TRUE,TRUE,FALSE,280.00,16),
(113,FALSE,FALSE,TRUE,143.00,17),
(114,FALSE,TRUE,TRUE,203.00,17),
(115,FALSE,FALSE,FALSE,238.00,17),
(116,FALSE,TRUE,FALSE,338.00,17),
(117,FALSE,FALSE,TRUE,150.00,18),
(118,FALSE,TRUE,TRUE,210.00,18),
(119,FALSE,FALSE,FALSE,250.00,18),
(120,FALSE,TRUE,FALSE,350.00,18),
(121,FALSE,FALSE,TRUE,158.00,19),
(122,FALSE,TRUE,TRUE,218.00,19),
(123,FALSE,FALSE,FALSE,263.00,19),
(124,FALSE,TRUE,FALSE,363.00,19),
(125,FALSE,FALSE,TRUE,165.00,20),
(126,FALSE,TRUE,TRUE,225.00,20),
(127,FALSE,FALSE,FALSE,275.00,20),
(128,FALSE,TRUE,FALSE,375.00,20),
(129,FALSE,FALSE,TRUE,180.00,21),
(130,FALSE,TRUE,TRUE,240.00,21),
(131,FALSE,FALSE,FALSE,300.00,21),
(132,FALSE,TRUE,FALSE,400.00,21),
(133,FALSE,FALSE,TRUE,195.00,22),
(134,FALSE,TRUE,TRUE,255.00,22),
(135,FALSE,FALSE,FALSE,325.00,22),
(136,FALSE,TRUE,FALSE,425.00,22);


INSERT INTO adm_especialidad VALUES 
(1,'00010100','Geolog�a',1),
(2,'00010200','Miner�a',1),
(3,'00010300','Metalurgia',1),
(4,'00010400','Mec�nica',1),
(5,'00010500','El�ctrica',1),
(6,'00010600','Autom�tica',1),
(7,'00010700','Telecomunicaciones',1),
(8,'00010800','Inform�tica',1),
(9,'00010801','Inform�tica UCI',1),
(10,'00010900','Ingenier�a  Qu�mica',1),
(11,'00011000','Ingenier�a Industrial',1),
(12,'00011001','Organizaci�n de Empresa',1),
(13,'00011100','Hidr�ulica',1),
(14,'00011200','Civil',1),
(15,'00011201','Viales',1),
(16,'00011300','Arquitectura',1),
(17,'00011404','Dise�o Informacional',2),
(18,'00011405','Dise�o Industrial',2),
(19,'00022000','Ciencia Computacional',3),
(20,'00022100','Matem�tica',3),
(21,'00022200','F�sica',3),
(22,'00022300','Qu�mica',3),
(23,'00022400','Geograf�a',3),
(24,'00022500','Bioqu�mica',3),
(25,'00022600','Biolog�a',3),
(26,'00022700','Microbiolog�a',3),
(27,'00022800','Alimentos',3),
(28,'00022900','Ciencias Farmac�uticas',3),
(29,'00041500','Agronom�a',4),
(30,'00041501','Agronom�a (Plan Turquino)',4),
(31,'00041600','Forestal',4),
(32,'00041601','Forestal (Plan Turquino)',4),
(33,'00041700','Medicina Veterinaria',4),
(34,'00041701','Medicina Veterinaria (Plan Turquino)',4),
(35,'00041900','Mecaniz Produc Agropec',4),
(36,'00041901','Mecaniz Produc Agropec (Plan Turquino)',4),
(37,'00041902','Riego y Drenaje',4),
(38,'00051800','Econom�a',5),
(39,'00051801','Ciencias Empresariales',5),
(40,'00051802','Licenciatura en Turismo',5),
(41,'00051900','Contabilidad',5),
(42,'00051901','Contabilidad (Plan Turquino)',5),
(43,'00063100','Historia',6),
(44,'00063200','Filosof�a',6),
(45,'00063300','Historia del Arte',6),
(46,'00063400','Derecho',6),
(47,'00063500','Comunicaci�n Social',6),
(48,'00063501','Periodismo',6),
(49,'00063601','Lengua Rusa',6),
(50,'00063701','Lengua Inglesa',6),
(51,'00063801','Lengua Alemana',6),
(52,'00063901','Lengua Francesa',6),
(53,'00064000','Letras',6),
(54,'00064100','Bibliotecolog�a e Informaci�n Cient�fico T�cnica',6),
(55,'00064200','Sociolog�a',6),
(56,'00064300','Psicolog�a',6),
(57,'00064400','Estudios Sociocultural',6),
(58,'00070000','F�sica Nuclear',7),
(59,'00080000','Radioqu�mica Nuclear',7),
(60,'00080001','Lic. en Meteorolog�a',7),
(61,'00080002','Ingenier�a en Tecnolog�a Nuclear y Energ�tica',7),
(62,'00090001','Profesora, F�sica',8),
(63,'00090002','Lic. en Qu�mica',8),
(64,'00090003','Lic en Matem�tica-Computaci�n',8),
(65,'00090004','Lic. Ed. Ciencias Exactas',8),
(66,'00090005','Lic. Ed. Ciencias Naturales',8),
(67,'00090006','Lic. Ed. Ciencias Human�sticas',8),
(68,'00090007','Lic. Ed. Prof Integral de Secundaria B�sica',8),
(69,'00090008','Lic. Ed. Educaci�n Especial',8),
(70,'00090009','Lic. Ed. Lengua Extranjera',8),
(71,'00090010','Lic. Ed. Educaci�n Primaria',8),
(72,'00090011','Lic. Ed. Prescolar',8),
(73,'00090012','Lic. Ed. El�ctrica',8),
(74,'00090013','Lic. Ed. Mec�nica',8),
(75,'00090014','Lic. Ed. Veterinaria',8),
(76,'00090015','Lic. Ed. Agronom�a',8),
(77,'00090016','Lic. Ed. Mecanizaci�n',8),
(78,'00090017','Lic. Ed. Econom�a',8),
(79,'00090018','Lic. Ed. Construcci�n',8),
(80,'00090019','Lic. en F�sica y Astronom�a',8),
(81,'00090030','Lic. en M�sica',9),
(82,'00090031','Lic. en Arte Teatral',9),
(83,'00090032','Lic. en Artes Pl�sticas',9),
(84,'00090033','Lic. en Arte Danzario',9),
(85,'00090034','Lic. Arte de los Medios de Comunicaci�n Audiovisual',9),
(86,'00090035','Lic. en Cultura F�sica',10),
(87,'00090036','Lic. en Cultura F�sica (Plan Turquino)',10),
(88,'00091000','Medicina',11),
(89,'00091006','Lic. en Enfermer�a',11),
(90,'00091008','Lic. en Tecnolog�as de la Salud en administraci�n y econom�a',11),
(91,'00091009','Lic. en Tecnolog�as de la Salud Atenci�n Estomatol�gica',11),
(92,'00091010','Lic. en Tecnolog�as de la Salud Citohispatolog�a',11),
(93,'00091011','Lic. en Tecnolog�as de la Salud en Electromedicina',11),
(94,'00091012','Lic. en Tecnolog�as de la Salud en Farmacia Dispensarial',11),
(95,'00091013','Lic. en Tecnolog�as de la Salud en Higiene y Epidemiolog�a',11),
(96,'00091014','Lic. en Tecnolog�as de la Salud en Imagenolog�a',11),
(97,'00091015','Lic. en Tecn de la Salud en Informaci�n, Inform�tica y Estad',11),
(98,'00091016','Lic. en Tecnolog�as de la Salud en Laboratorio Cl�nico',11),
(99,'00091017','Lic. en Tecn de la Salud en Logopeda, Foniatr�a y Audiolog�a',11),
(100,'00091018','Lic. en Tecnolog�as de la Salud en Medicina Transfusional',11),
(101,'00091019','Lic. en Tecnolog�as de la Salud en Microbiolog�a',11),
(102,'00091020','Lic. en Tecnolog�as de la Salud en Nutrici�n Dietista',11),
(103,'00091021','Lic. en Tecnolog�as de la Salud en Optometr�a y �ptica',11),
(104,'00091022','Lic. en Tecnolog�as de la Salud en Podolog�a',11),
(105,'00091023','Lic. en Tecnolog�as de la Salud En Pr�tesis Dental',11),
(106,'00091024','Lic. en Tecn de la Salud en Pr�tesis Ortesis y Bandaje Ortop',11),
(107,'00091025','Lic. en Tecnolog�as de la Salud en Radiofisica M�dica',11),
(108,'00091026','Lic. en Tecn de la Salud en Terapia F�sica y Rehabilitaci�n',11),
(109,'00091027','Lic. en Tecnolog�as de la Salud en Rehabilitaci�n Soc Y Ocup',11),
(110,'00091028','Lic. en Tecnolog�as de la Salud en Traumatolog�a',11),
(111,'30101011','(TM) Geolog�a y prospecci�n de yacimiento',12),
(112,'30103011','(TM) Conformaci�n de metales',12),
(113,'30103110','(TM) Metalurgia',12),
(114,'30103111','(TM) Metalurgia no ferrosa',12),
(115,'30104011','(TM) Geodesia y cartograf�a',12),
(116,'30201141','(TM) Termoenerg�tica',13),
(117,'30202011','(TM) Electricidad',13),
(118,'30301011','(TM) Construcci�n Naval',14),
(119,'30301091','(TM) Maquinaria azucarera',14),
(120,'30301161','(TM) Mec�nica naval',14),
(121,'30301173','(TM) Metrolog�a',14),
(122,'30301191','(TM) Montaje y reparaci�n de equipos industriales',14),
(123,'30301251','(TM) Refrigeraci�n',14),
(124,'30301371','(TM) Mec�nica de taller',14),
(125,'30302011','(TM) Construcciones met�licas',14),
(126,'30401151','(TM) Procesos biol�gicos',15),
(127,'30401161','(TM) Qu�mica industrial',15),
(128,'30401162','(TM) Farmacia industrial',15),
(129,'30402051','(TM) Tecnolog�a de fabricaci�n de az�car',15),
(130,'30402131','(TM) Tecnolog�a de los alimentos',15),
(131,'30501031','(TM) Instrumentaci�n y control',16),
(132,'30502011','(TM) Comunicaciones y radiotecnica',16),
(133,'30502191','(TM) Electr�nica',16),
(134,'30503011','(TM) Sistemas telef�nicos',16),
(135,'30599019','(TM) Electr�nica, automatizaci�n y comunicaci�n',16),
(136,'30601081','(TM) Transporte automotor',17),
(137,'30602011','(TM) Explotaci�n del transporte ferroviario',17),
(138,'30602051','(TM) Equipos tractivos',17),
(139,'30604023','(TM) Explotaci�n del transporte mar�timo',17),
(140,'30701061','(TM) Hidr�ulica',18),
(141,'30701091','(TM) Viales',18),
(142,'30701221','(TM) Construcci�n civil',18),
(143,'30701231','(TM) Dise�o y elaboraci�n del mueble',18),
(144,'30701243','(TM) Mecanizaci�n de la construcci�n',18),
(145,'30701244','(TM) Edificaciones',18),
(146,'30801011','(TM) Agronom�a',19),
(147,'30801012','(TM) Agronom�a de monta�a',19),
(148,'30801051','(TM) Forestal',19),
(149,'30801071','(TM) Mecanizaci�n agr�cola',19),
(150,'30801091','(TM) Veterinaria',19),
(151,'30901251','(TM) Secretariado',24),
(152,'30901261','(TM) Secretariado operador de computadora',24),
(153,'30901271','(TM) Secretariado ejecutivo',24),
(154,'30901361','(TM) Contador',24),
(155,'30902011','(TM) Inform�tica',24),
(156,'30902012','(TM) Derecho laboral',24),
(157,'30902013','(TM) Econom�a',24),
(158,'30902014','(TM) Econom�a del Trabajo',24),
(159,'30902015','(TM) en OTS',24),
(160,'30902016','(TM) Planificaci�n',24),
(161,'31003013','(TM) Oftalmologia',21),
(162,'31006013','(TM) Bandaje ortop�dico',21),
(163,'31006023','(TM) Citohispatolog�a',21),
(164,'31007013','(TM) Dietetica',21),
(165,'31008003','(TM) Enfermer�a',21),
(166,'31014013','(TM) Terapia ocupacional',21),
(167,'31015013','(TM) Informaci�n, inform�tica y estad�stica cl�nica',21),
(168,'31016023','(TM) Atenci�n estomatol�gica',21),
(169,'31017013','(TM) Farmacia dispensarial',21),
(170,'31021013','(TM) Higiene y epidemiologia',21),
(171,'31024023','(TM) Patolog�a cl�nica',21),
(172,'31024033','(TM) Medicina transfucional',21),
(173,'31024043','(TM) Microbiologia',21),
(174,'31025013','(TM) Logopedia y foniatr�a',21),
(175,'31031023','(TM) Pr�tesis dental',21),
(176,'31032013','(TM) Pr�tesis y ortesis ortop�dica',21),
(177,'31033013','(TM) Psicometr�a',21),
(178,'31035033','(TM) Radiofisica m�dica',21),
(179,'31036053','(TM) Rayos x',21),
(180,'31037013','(TM) Terapia f�sica y rehabilitaci�n',21),
(181,'31040013','(TM) Trabajador social de la salud',21),
(182,'31045013','(TM) Podolog�a',21),
(183,'31401013','(TM) M�sica',32),
(184,'31402013','(TM) Artes pl�sticas',32),
(185,'31402023','(TM) Actuaci�n',32),
(186,'31402033','(TM) Espect�culos musicales',32),
(187,'31403013','(TM) Bibliotecario y t�cnica documentaria',32),
(188,'31406113','(TM) Promotor cultural',32),
(189,'31407023','(TM) Profesional de ballet',32),
(190,'31408013','(TM) Danza moderna y folkl�rica',32),
(191,'31409013','(TM) Circo',32),
(192,'31901021','(TM) Confecciones',22),
(193,'31901031','(TM) Hilander�a',22),
(194,'31901051','(TM) Tejedur�a plana',22),
(195,'31901071','(TM) Calzado y talabarter�a',22),
(196,'31901141','(TM) Mec�nica textil',22),
(197,'31902011','(TM) Poligraf�a',22),
(198,'31903031','(TM) Servicio gastron�mico',23),
(199,'31903032','(TM) Alojamiento hotelero',23),
(200,'31903041','(TM) Elaboraci�n de alimentos',23),
(201,'31905011','(TM) Bibliotecolog�a y t�cnicas documental',24),
(202,'31993031','(TM) Comercio',25),
(203,'31999011','(TM) Cer�mica',26),
(204,'31999021','(TM) Otras profesiones',27),
(205,'31999221','(TM) Servicios de belleza',28),
(206,'31999231','(TM) Relojer�a',29),
(207,'31999311','(TM) Artesan�a',30),
(208,'40100041','(TM)  Auxiliar pedag�gico',31),
(209,'40100111','(TM) Educaci�n formaci�n de personal doce',31),
(210,'40103001','(TM) Profesor de ense�anza pr�ctica',31),
(211,'41406013','(TM) Instructor de arte en m�sica',31),
(212,'41406023','(TM) Instructor de arte en danza',31),
(213,'41406033','(TM) Instructor de arte en teatro',31),
(214,'41406073','(TM) Instructor de arte en artes pl�sticas',31),
(215,'41406093','(TM) Instructor de coros aficionados',31),
(216,'41406103','(TM) Instructor de conjuntos musicales',31);


INSERT INTO adm_unidad_org VALUES 
(1,'Oficina Central'),
(2,'Unidad de Gesti�n y Direcci�n de Dise�o'),
(3,'Unidad de Servicios T�cnicos de Ingenieria'),
(4,'Unidad de Gesti�n de Direcci�n de la Construcc #1'),
(5,'Unidad de Gesti�n de Direcci�n de la Construcc #2'),
(6,'Unidad de Gesti�n de Direcci�n de la Construcc #3'),
(7,'Unidad de Gesti�n de Direcci�n de la Construcc #4'),
(8,'Unidad de Gesti�n de Direcci�n de la Construcc #5'),
(9,'Unidad de Gesti�n de Direcci�n de la Construcc #6'),
(10,'Unidad Empresarial de Base Servicios Generales');

INSERT INTO adm_departamento (id,codigo,nombre,seccion_id,unidad_id, dirige_id) 
VALUES (1,1,'Direcci�n General',1,1,null), 
(2,'01020','Direccion Adjunta',1,1,null),
(3,'01025','Grupo de Asistencia Legal',1,1,null),
(4,'02000','Direcci�n de Gesti�n Organizacional',1,1,null),
(5,'03000','Direcci�n T�cnica',1,1,null),
(6,'03010','Grupo T�cnico',1,1,5),
(7,'03020','Grupo Inform�tico',1,1,5),
(8,'04000','Direcci�n de Operaciones',1,1,null),
(9,'05000','Direcci�n de Gesti�n del Capital Humano',1,1,null),
(10,'05010','Grupo Gesti�n de OTS y Recursos Laborales',1,1,null),
(11,'06000','Direcci�n de Contabilidad y Finanzas',1,1,null),
(12,'06010','Grupo de Contabilidad y Costos',1,1,null),
(13,'06020','Grupo de Econom�a y Finanzas',1,1,null),
(14,'07000','Unidad de Gesti�n y Direcci�n de Dise�o',2,2,null),
(15,'07010','Direcci�n UGDD',2,2,null),
(16,'07030','Grupo T�cnico',2,2,null),
(17,'07040','Grupo de Archivo y Reproducci�n',2,2,null),
(18,'07050','Equipo de Dise�o 1',2,2,null),
(22,'07051','Taller Arquitectura',2,2,18),
(23,'07052','Taller de Estructura',2,2,null),
(24,'07060','Equipo de Dise�o 2',2,2,null),
(25,'07061','Taller  Arquitectura',2,2,null),
(26,'07070','Equipo de Dise�o 6',2,1,null),
(27,'07071','Taller 1',2,2,24),
(28,'07072','Taller 2',2,2,24),
(29,'07080','Equipo de Dise�o 3',2,2,null),
(30,'07110','Grupo de Topograf�a',3,2,null),
(31,'07120','Grupo Obras de Transporte y V�as',4,2,null),
(32,'07130','Grupo Puentes',2,2,null),
(33,'07140','Grupo CAD',2,2,null),
(34,'07150','Grupo de Estructura',5,2,18),
(35,'07160','Equipo de Dise�o 4',2,2,null),
(36,'07170','Grupo Hidrosanitaria',6,2,18),
(37,'07180','Grupo Electricidad y Corrientes D�biles',6,2,18),
(38,'07190','Grupo de Instalaciones Especiales',6,2,18),
(39,'07200','Grupo Decoraci�n y Paisajismo',2,2,18),
(40,'07210','Grupo de Presupuesto y Organizaci�n de Obra',4,2,null),
(41,'08010','Direcci�n USTI',1,3,null),
(42,'08030','Grupo de Servicios T�cnicos',7,3,null),
(43,'09000','Unidad de Gesti�n de Direcci�n de la Construcc #1',9,4,null),
(44,'09010','Direcci�n',9,4,null),
(45,'09020','Grupo Econ�mico',9,4,null),
(46,'09030','Grupo de Gesti�n de Capital Humano',9,4,null),
(47,'09040','Grupo Comercial',3,4,null),
(48,'09050','Grupo T�cnico Productivo',9,4,null),
(49,'09070','Grupo de Ejecuci�n',9,4,null),
(50,'10000','Unidad de Gestion y Direcci�n de la Construcc #2',10,5,null),
(51,'10010','Direcci�n',10,5,null),
(52,'10020','Grupo Econ�mico',10,5,null),
(53,'10030','Grupo Comercial',10,5,null),
(54,'10040','Grupo T�cnico Productivo',10,5,null),
(55,'10050','Control de Producci�n',10,5,null),
(56,'11000','Unidad de Gesti�n de Direcci�n de la Construcc #3',11,6,null),
(57,'11010','Direcci�n',11,6,null),
(58,'11020','Grupo Econ�mico',11,6,null),
(59,'11030','Grupo Comercial',11,6,null),
(60,'11040','Grupo T�cnico Productivo',11,6,null),
(61,'11060','Grupos de Ejecuci�n de Obras',11,6,null),
(62,'11061','Grupo de Ejecuci�n',11,6,null),
(63,'11062','Grupo de Ejecuci�n No.2',11,6,null),
(64,'11063','Grupo de Ejecuci�n No.3',11,6,null),
(65,'12000','Unidad de Gestion de Direcci�n de la Construcc #4',8,7,null),
(66,'12010','Direcci�n',8,7,null),
(67,'12020','Grupo Econ�mico',8,7,null),
(68,'12030','Grupo Comercial',8,7,null),
(69,'12040','Grupo T�cnico Productivo',8,7,null),
(70,'12050','Grupo de Ejecuci�n',8,7,null),
(71,'12060','Grupos de Ejecuci�n de Obras',8,7,null),
(72,'12061','Grupo de Ejecuci�n No 1',8,7,null),
(73,'12062','Grupo de Ejecuci�n No 2',8,7,null),
 (74,'12063','Grupo de Ejecuci�n No 3',8,7,null),
(75,'12064','Grupo de Liquidaci�n',8,7,null),
(76,'13000','Unidad de Gesti�n de Direcci�n de la Construcc #5',12,8,null),
(77,'13010','Direcci�n',12,8,null),
(78,'13020','Grupo Econ�mico',12,8,null),
(79,'13040','Grupo Tecnico Productivo',12,8,null),
(80,'13050','Grupo Comercial',12,8,null),
(81,'13060','Grupo de Ejecucion',12,8,null),
(82,'14000','Unidad de Gestion y Direcci�n de la Construcc #6',13,9,null),
(83,'14010','Direccion',13,9,null),
(84,'14020','Grupo Econ�mico',13,9,null),
(85,'14030','Grupo T�cnico',13,9,null),
(86,'14040','Grupo de Ejecuci�n',13,9,null),
(87,'19000','Unidad Empresarial de Base Servicios Generales',14,10,null),
(88,'19010','Direcci�n UEB',14,10,null),
(89,'19030','Grupo Comunicaciones y de Servicios',14,10,null);

INSERT INTO adm_cargo VALUES 
(1,100094,'Oficinista'),
(2,100095,'Controlador de Piquera de Autos'),
(3,100096,'Operador de Planta de Radio'),
(4,100208,'Encargado de Casa de Visita'),
(5,100440,'Encargada de Recepci�n y Pizarra Telef�nica')








