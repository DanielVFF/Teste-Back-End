PROJETO  BACK END

Durante este projeto de aplicação para a empresa de Geotecnologia Nice Planet, eu desenvolvi uma aplicação em BACK-END que responde às requests que podem ser feitas com intuito de adicionar Usuários, Produtores e Propriedades.
A principal linguagem de programação utilizada é Javascript, utilizanado o Node.js, então o primeiro passo é instalar o Node através do seguinte link:

    https://nodejs.org/en/download/

Após isso utilizaremos alguns pacotes da biblioteca do Node.js(NPM) e,portanto, devemos utilizar os seguintes códigos no terminal do Visual Studio(Recomendado), com a pasta do repositório aberta:


    npm intall body-parser          //Utilizado para podermos usar alguns arquivos body de respostas em JSON

    npm intall express              //Utilizado para estabelecer as rotas

    npm intall mysql2               //Utilizado para nos conectarmos com a base de dados

    npm intall basic-auth           //Utilizado para fazer a Autenticação

    npm intall swagger-ui-express   //Utilizado para documentar as rotas   
    
    npm install bcrypt              //Utilizado para criptografar as senhas
  

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




Para utilizar o swagger, você deve primeiro inserir a autenticação, conforme mostra a imagem, o usuário que já está cadastrado no banco de dados é 

        nomeUsuario : "Nice Planet',
        senhaUsuario : "admin123"
        
  ![Captura de tela 2022-12-30 222549](https://user-images.githubusercontent.com/114309972/210121363-653018a3-094c-40d2-b76b-ac853a8cc407.png)
    
Após isso você deve clicar na request que deseja fazer, os nomes são intuitivos
        
 ![Captura de tela 2022-12-30 222653](https://user-images.githubusercontent.com/114309972/210121382-e9144d5e-bd0f-440f-94fa-9dd269b7bf31.png)
 
 
 
Então você clica em "try it out" para utilizar o get ou post desejado


![Captura de tela 2022-12-30 222816](https://user-images.githubusercontent.com/114309972/210121429-754e7fc0-fd1e-4bb6-8346-c64864416849.png)



Por fim, você insere os dados desejado com base no modelo




![Captura de tela 2022-12-30 222728](https://user-images.githubusercontent.com/114309972/210121437-ef3525c1-288b-40e0-b2b2-f1a6bdc68bd0.png)




Os pacotes

