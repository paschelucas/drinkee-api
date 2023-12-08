# Drinkee-api

API construída para o case técnico da empresa Faster.


# Instalação

Acesse a pasta raíz do projeto e execute o comando
`npm i`

# Execução

Acesse a pasta raíz do projeto e execute o comando
`node ace serve --watch`

# Sobre o projeto

Não houve muitas decisões a serem tomadas. O projeto já estabelecia o uso de um banco relacional bem como as demais tecnologias a serem utilizadas. Optei pelo Lucid ORM em vez de algo como TypeORM ou Prisma porque é praticamente built in no Adonis, funcionando muito bem com ele. O uso de interfaces é para garantir consistência no código ao longo das camadas e, quanto ao gerenciamento de erros, optei por adicionar uma mensagem mais amigável mas não esconder o stack trace, uma vez que APIs são consumidas por desenvolvedores, e estes devem ter todo o auxílio possível na hora de debugar seu código. Também optei por não salvar as informações de favoritos em um banco de dados, pois a criação de usuários não era um requisito. Dessa forma, ganhei tempo e o local storage do navegador atende muito bem a essa demanda opcional, dadas as condições de aceite do projeto.

# Modelagem do banco de dados

Modelagem simples, contanto com duas entidades.
<img src="/database/modeling/diagrama-drinkee.svg">

