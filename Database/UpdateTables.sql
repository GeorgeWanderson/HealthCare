use projeto
select * from Hospital

alter table Hospital add Endereco varchar(max) null
update Hospital set Endereco = Endereço 
alter table Hospital drop column Endereço 

-- update [dbo].[Profissional]

select * from Profissional

alter table Profissional add Endereco varchar(max) null
update Profissional set Endereco = Endereço
alter table Profissional drop column Endereço

-- update [dbo].[Especialidade]

select * from Especialidade

alter table Especialidade add Descricao varchar(max) null
update Especialidade set Descricao = Descrição
alter table Especialidade drop column Descrição