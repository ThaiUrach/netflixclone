NetflixClone

Clone da plataforma de streaming Netflix
Interface da aplicação

Funcionamento da aplicação

🚀tecnologias
React.js
TypeScript
Ícones de reação
Componentes de estilo
Axios
💻Sobre o projeto
Recriar a interface do Netflix como forma de aprender e treinar as habilidades perante o uso de TypeScript, React e CSS. Durante a construção deste projeto foi usado este vídeo como material de apoio.

Todos os dados dos catálogos como título, descrição, capa, foto de fundo e avaliação foram extraídos ao usar a API TMDb .

Funcionalidades
 Spinning Loading : Efeito ao trazer os dados da API.

 Catálogo Destaque : selecione um catálogo de forma aleatória e apresentá-lo na página inicial.

 Listagem Sessões : Ao consumir a API separar os catálogos em sessões.

 Effect Menu : Criar um efeito no background do menu conforme o scroll da tela do usuário.


 Listagem Carrossel : Apresenta botões de controle para manipular a visualização dos itens da sessão.

 Listagem Infinita : Ao chegar no final da lista dos catálogos deve-se apresentar os mesmos itens do início.

📥Instalação e execução
Faça um clone desse repositório e acesse o diretório.

$ git clone git@github.com:LeeonardoVargas/netflix-clone.git && cd netflix-clone
Para ter acesso a API você precisa de uma chave, basta criar uma conta no TMDB para ter acesso, link do cadastro . Caminho da chave: Perfil -> configurações -> API -> Chave da API

Renomeie o arquivo .env.examplepara .enve cole o valor da sua chave no campo REACT_APP_API_KEY . Agora instale as dependências e execute o projeto:

# Instalando as dependências
$ yarn

# Executanto aplicação
$ yarn start
💪Contribuir
Faça o forke clone o projeto a partir do seu usuário.

# Clonando projeto
$ git clone https://github.com/SEU-NOME-DE-USUARIO/netflix-clone.git

# Criando um branch
$ git branch minha-alteracao

# Acessando o novo branch
$ git checkout -b minha-alteracao

# Adicionando os arquivos alterados
$ git add .

# Criando commit e a mensagem
$ git commit -m "Corrigindo...."

# Enviando alterações para o brach
$ git push origin minha-alteracao
Você deve navegar até o seu repositório onde fez o fork e clicar no botão New pull request no lado esquerdo da página.

📝Licença
Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes..