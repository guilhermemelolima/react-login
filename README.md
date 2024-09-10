# Aplicação de Login

> Aplicação simples de login feita com ReactJS.

## 📱 Sobre o Projeto

Este projeto é uma aplicação de login que permite ao usuário cadastrar credencias e as inserir para redalizar login no sistema. A aplicação realiza a altenticação com um [backend](https://github.com/guilhermemelolima/spring-login) feito em Java utilziando o framework [Spring Boot](https://spring.io/projects/spring-boot) e o [JSON Web Token](https://jwt.io/).

## 🚀 Tecnologias Utilizadas

- [ReactJS + Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) para navegação entre as páginas
- [Axios](https://axios-http.com/) para fazer requisições HTTP
- [React Icons](https://react-icons.github.io/react-icons/) para utilizar ícones em React.

## 💻 Estrutura do Projeto

Abaixo está a estrutura básica do projeto, com uma breve descrição de cada diretório e arquivo:

```bash
├── src/
│   ├── context/auth/ # Contém o contexto de autenticação.
│   ├── hooks/        # Hook personalizado para lidar com a comunição com a API.
│   ├── pages/        # Páginas principais da aplicação.
│   ├── types/        # Definições de tipos TypeScript.
│   ├── main.tsx      # Ponto de entrada da aplicação.
│   └── App.tsx       # Componente raiz.
├── package.json      # Dependências e scripts do projeto.
└── README.md         # Documentação do projeto.
```
