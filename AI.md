Documentação de Inteligência Artificial — Confere Aí

1. Ferramentas utilizadas

*ChatGPT (OpenAI):* utilizado como ferramenta de apoio durante o desenvolvimento, principalmente para orientações sobre React, JavaScript, Tailwind CSS, integração com API e resolução de problemas.

*Geração de imagens por IA:* utilizada para auxiliar na criação de elementos visuais do projeto.

2. Principais interações com a IA

# 2.1. Moldura de celular na demonstração

*Pedido:* Ajuda para criar uma moldura de celular ao redor do vídeo da seção Demonstração, incluindo a borda e a câmera na parte superior.

*Resposta da IA:* Orientações de estrutura JSX e estilização com Tailwind CSS para posicionar o vídeo dentro de uma moldura que simula um celular.

*Aplicação:* Ajustes no componente de Demonstração para melhorar a apresentação visual do funcionamento do Confere Aí.

# 2.2. Criação e integração da API

*Pedido:* Explicação passo a passo para criar uma API utilizando MockAPI, desde a configuração inicial até sua utilização no projeto React.

*Resposta da IA:* Orientações para criar o projeto na MockAPI, configurar o recurso `contatos` com os campos `nome`, `telefone` e `parentesco` e utilizar `fetch` para realizar as operações GET, POST, PUT e DELETE.

*Aplicação:* Implementação da funcionalidade Contatos de Confiança, permitindo cadastrar, visualizar, editar e excluir contatos.

# 2.3. JavaScript — Verificação de mensagens

*Pedido:* Ajuda para implementar a lógica de verificação de mensagens suspeitas utilizando JavaScript.

*Resposta da IA:* Sugestão de uma função que analisa o texto informado, procura palavras e expressões associadas a possíveis golpes e apresenta um resultado ao usuário.

*Aplicação:* Funcionalidade Verificar Mensagem, utilizando JavaScript e estados do React para exibir os resultados.

# 2.4. JavaScript — Verificação de links

*Pedido:* Ajuda para criar a verificação de links suspeitos e entender como testar essa funcionalidade.

*Resposta da IA:* Orientações para utilizar JavaScript na validação de URLs, identificar alguns sinais de risco e apresentar mensagens de orientação.

*Aplicação:* Funcionalidade Verificar Link, na seção Veja na Prática.

# 2.5. Organização do código com custom hooks

*Pedido*: Ajuda para criar os dois custom hooks exigidos no projeto, sem modificar a interface ou as funcionalidades existentes.

*Resposta da IA:* Orientações para criar os arquivos `useContatos.js` e `useVerificacao.js`, separando os estados e funções dos componentes visuais.

*Aplicação:* Reorganização dos componentes `Contatos.jsx` e `Pratica.jsx`, mantendo a estilização em Tailwind CSS.

3. Validação e ajustes

As orientações recebidas foram aplicadas e verificadas durante o desenvolvimento no VS Code e no navegador.

Foram realizados testes de cadastro, edição e exclusão de contatos, além de testes das funcionalidades de verificação de mensagens e links.

Algumas respostas precisaram de ajustes para se adaptar à estrutura do projeto, à estilização desejada e aos conteúdos estudados em aula.

4. Análise crítica

A inteligência artificial foi utilizada principalmente para agilizar a implementação, esclarecer dúvidas e ajudar a encontrar soluções para problemas específicos.

Mesmo quando os conceitos já eram conhecidos, a ferramenta auxiliou na organização das ideias e na aplicação prática das funcionalidades.

As sugestões não foram utilizadas sem revisão: o código foi adaptado às necessidades do projeto e testado durante o desenvolvimento.

Também foram consideradas as limitações das verificações de mensagens e links, que identificam sinais comuns de risco, mas não garantem que um conteúdo seja seguro.