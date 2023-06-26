# Projeto Personagens Marvel

Projeto Criado usando React, Vite, TailwindCSS, styled-components, framer-motion, axios, @react-hookz/web, react-query, react-router-dom.

> Link para o projeto online no final do README

## Justificativas

**Vite**: Ao invés de ser utilizado o cra (create-react-app) foi utilizado `yarn create vite`, por preferência minha (dev).

**styled-components**: Foi utilizado como a lib para criar a estilização do projeto.

**tailwind-styled-components**: Foi utilizado em conjunto com TailwindCSS e o styled-components como a lib para criar a estilização do projeto.

**framer-motion**: Foi utilizado para criar algumas animações dentro do projeto.

**axios**: Foi utilizado como biblioteca de requisições HTTP por conta de algumas configurações que o mesmo permite fazer bem como a facilidade de se utiliza-lo.

**react-query**: Foi utilizado em conjunto do *axios* para controle de requisições HTTP dentro dos componentes React.

**react-router-dom**: Foi usado como lib de router para as rotas do SPA (single page application).

**@react-hookz/web**: Esta lib foi usado por conta de sua funcionalidade com o 'useDebouncedEffect' que funciona de maneira similar ao useEffect, contudo não vai disparar toda vez que que um dos hooks que está dentro do `[]` atualizar caso ocorre várias atualizações dentro de um certo período de tempo, ele só funcionará para o último disparo.

### Libs para padronizar commit-msg

Foi utilizado libs como _commitlint_, _husky_, _cz-conventional-changelog_, _husky_, _commitizen_ para seguir um padrão nas emissões de mensagens de commits visando o padrão **conventional commits**, porém não foi seguido de forma 100% fidedigna.

### Deploy

Foi utilizado o _netlify_ para o deploy do projeto.

[Link para o Projeto web rodando](https://keen-medovik-a4ebbb.netlify.app/)
