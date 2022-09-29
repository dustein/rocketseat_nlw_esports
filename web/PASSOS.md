npm install >> para instlar as dependências trazidas pelo Vite
npm run dev >> vai abrir o endereço para acessar pelo navegador
npm run dev
...
Passou pro mobile
...
Voltando na aula 2
Instalacao e config do tailwindCss
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p (a flag '-p' cria o postcss.config.cjs, que faz a integração com o Vite para este entender que estamos usando o tailwind)
Configurar o tailwind.config.cjs >>> indicou o caminho pro 'content' : './src/**/*.tsx'
Criar dentro de src a pasta styles e dentro desta, arquivo main.css com o conteudo da configuracao conforme documentacao
Instalar no VSCode extensao do "postcss language support" e do próprio tailwindcss
Instalar biblioteca phosphor react para icones
...
mudou pra mobile (aula 2 tempo 1:05:00)
...
Aula 4
Vamos pegar as ancoras no App.tsx que se repetem para cada imagem de game, e vamos criar um Componente react
Cria pasta components, arquivo GameBanner.tsx
Aula 4 - 16:00
Passa o banner para componente tambem, CreateAdBanner.tsx
