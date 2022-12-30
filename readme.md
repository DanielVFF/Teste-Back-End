PROJETO  BACK END

Durante este projeto de aplicação para a empresa de Geotecnologia Nice Planet, eu desenvolvi uma aplicação em BACK-END que responde às requests que podem ser feitas com intuito de adicionar Usuários, Produtores e Propriedades.
A principal linguagem de programação utilizada é Javascript, utilizanado o Node.js, então o primeiro passo é instalar o Node através do seguinte link:

    https://nodejs.org/en/download/

Após isso utilizaremos alguns pacotes da biblioteca do Node.js(NPM) e,portanto, devemos utilizar os seguintes códigos no terminal do Visual Studio(Recomendado), com a pasta do repositório aberta:


    npm intall body-parser

    npm intall express

    npm intall mysql2

    npm intall basic-auth

    npm intall swagger-ui-express
  

É ESSENCIAL A INSTALAÇÃO DE TODOS OS PACOTES ANTES DE INICIAR A APLICAÇÃO
Além disso é necessário ter o MySql server instalado em sua máquina, pode-se ser feito o download atráves do seguinte link:

    INSTALAR O MYSQL SERVER NA PORTA PADRÃO 3306
    https://dev.mysql.com/downloads/windows/installer/8.0.html
    
Caso haja algum erro na execução do servidor você tmabém pode baixar o aplicativo XAMPP e abrir a porta 3306 através dele:

    https://www.apachefriends.org/pt_br/download.html
    
Após isso é necessário abrir o MySQL WORKBENCH e conectar um servidor com as configurações padrão e USANDO A SENHA "12345"

![Captura de tela_20221230_182703](https://user-images.githubusercontent.com/114309972/210112995-64f149ad-a10c-4c72-83a8-4d68715dd8ff.png)










    
Enfim, para iniciar a aplicação você deve abrir a pasta do repositório com o Visual  digitará os seguintes código no terminal do Visual Studios:

    cd Codding
    cd server
    node index.js
    
    
Para acessar as diferentes rotas que a aplicação disponibiliza você deve acessar o seguinte acessar o seu localhost com na seguinte rota:

    http://localhost:3000/rotas/











