## Como usar
1. Criar uma conexão com o mongoDB com a URI: `mongodb://localhost:27017`

2. Executar o script **index.ts** com `npm start`
O script irá preencher o banco com os arquivos JSON que estão na pasta **data**

2. Após executar **index.ts**, poderão ser feitas as requisições da API;

3. URL de requisição da API (pode ser usada tanto no postman quanto no navegador): `http://localhost:3000/unifei/`

4. Requisições permitidas:
* Buscar cursos da Unifei (só um cadastrado): `http://localhost:3000/unifei/{idCurso}`
* * exemplo: `http://localhost:3000/unifei/ECO`

* Buscar grade completa de um curso (só uma cadastrada - ECO): `http://localhost:3000/unifei/grade/{idGrade}`
* * exemplo: `http://localhost:3000/unifei/grade/eco2015`

* Buscar disciplinas da Unifei (94 cadastradas - apenas da grade eco2015): `http://localhost:3000/unifei/disciplina/{codDisciplina}`
* * exemplo: `http://localhost:3000/unifei/disciplina/ECOS02`

* Buscar um período de uma grade de um curso da Unifei: `http://localhost:3000/unifei/periodo/:idGrade/:idPeriodo`
* * exemplo: `http://localhost:3000/unifei/periodo/eco2015/1`

