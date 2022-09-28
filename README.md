# rocketseat_nlw_esports

RocketSeat_NLW_eSports

npm init -y
npm install express
npm install typescript
npm install express
npm install @types/express
npx tsc --init
"scripts" : >>> "build": "tsc"
tsconfig - configurar, target pra ES2020, rootDir pra ./src, outDir pra ./build
npm run build - a partir do server.ts vai criar o server.js dentro da pasta build
npm i ts-node-dev -D
"dev": "ts-node-dev src/server.ts" - rodar >>> npm run dev

// iniciou projeto React - usando Vite para compilar //
npm create vite@latest >>> configurar nome do projeto "web" usando React e Typescript
Vai criar o projeto na pasta web. Atentar para acessar a pasta e iniciar o vscode na pasta web
...
Passou pro React (web)
Depois do React vai iniciar o mobile
npm install --global --expo-cli
expo init mobile (vai iniciar um projeto com nome mobile e criar a pasta mobile)
...
voltando ao backend
npm i prisma -D
npx prisma init -h (se quiser ver a documentacao. Vai ver que quando inicia o prisma pode passar o tipo de banco de dados que vai utilizar, com o comando '--datasource-provider')
npx prisma init --datasource-provider SQlite
vai ser criado a pasta prisma com o schema, e o arquivo .env para variaveis de ambiente, onde definimos onde vai ficar o arquivo do banco de dados.
(obs no settings.json User ele colocou uma linha "[prisma]": { "editor.formatOnSave": true }, -- isso vai formatar a sintaxe do schema cada vez que salvamos)
No schema.prisma, criar o modelo, para em seguida rodar a migration (o controle de versoes) dele criando o db.
npx prisma migrate dev (vai perguntar o nome da migrate, no caso estamos criando a tabela game conforme o schema)
Para visualizar: npx prisma studio
Em seguida voltamos ao schema para criar nova tabela pra aplicacao, agora de anuncios Ads. Na configuracao do Ads, inserir uma entrada game Game, ou seja, um atributo game do tipo do modelo Game, ao auto save, vai fazer a ligacao, configuracao relacionada com o model Game, o @relation
Rodar a migration de novo para adicionar essa nova tabela
no id dos models para criacao de tabela, configurar o @default uuid, rodar o migrate
Instalar o client do prisma para acessar o banco de dados pela aplicacao
npm install @prisma/client
OBS - o tsnode dev vai parar de funcionar porque a conexao com o BD nbo prisma impede que ele restart sozinho. Adicionar a flag --exit-child no script dev do package.json
Criou ads nos games pelo prisma studio na unha
Finalizou aula 3 instalando o cors
npm i cors
npm i @types/cors -D
FIM aula 3
Aula 4
Vamos ao react web
...


