# Global Solution - CitizenTech 

## Breve descrição do nosso projeto -> Confere Aí: Uma proteção contra golpes digitais

O Confere Aí é uma aplicação desenvolvida para proteger pessoas com 60 anos ou mais contra golpes digitais, como falsos pedidos de Pix urgente, links maliciosos e ligações suspeitas.
O sistema funciona como uma segunda opinião explicada e acessível antes de o usuário clicar em links ou transferir dinheiro. A interface foi desenvolvida considerando a usabilidade do público idoso, com tipografia ampliada, alto contraste, botões grandes e linguagem simples.

## Funcionalidades

*Verificar Mensagem:* identifica palavras e expressões que podem indicar tentativas de golpe.

*Verificar Link:* analisa a estrutura de URLs e apresenta possíveis sinais de risco.

*Contatos de Confiança:* permite cadastrar, visualizar, editar e excluir pessoas de confiança.

*Conteúdo educativo:* apresenta informações e orientações para a prevenção de golpes digitais.

*Demonstração:* vídeo que apresenta o funcionamento da solução.

As verificações são preventivas e não garantem que uma mensagem ou link seja seguro.

## Tecnologias Utilizadas

- **React**
- **JavaScript** 
- **Vite**
- **Tailwind CSS**
- **MockAPI**
- **Git & GitHub** 

## Integração com API

A aplicação utiliza a MockAPI para armazenar e gerenciar os Contatos de Confiança. A comunicação com a API é realizada utilizando fetch e os métodos HTTP:

*GET:* consultar contatos cadastrados.

*POST:* cadastrar um novo contato.

*PUT:* atualizar informações de um contato.

*DELETE:* excluir um contato.

## Organização do Código

O projeto utiliza componentes React e dois custom hooks:

- *useContatos.js:* gerencia os estados e as operações relacionadas aos contatos.

- *useVerificacao.js:* organiza a lógica de verificação de mensagens e links.

As funções de comunicação com a API estão separadas no arquivo contatosApi.js.

## Como Instalar as Dependências

Para rodar esse projeto na sua máquina local, certifique-se de ter o [Node.js](https://nodejs.org) instalado. Uma vez instalado, siga os passos abaixo:

1. Clone este repositório para o seu computador:
   ```bash
   git clone https://github.com/Victoriabandeira-sys/ConfereA-_GS.git
   ```

2. Acesse a subpasta principal do projeto (onde contém os arquivos do código):
   ```bash
   cd ConfereA-_GS
   ```

3. Instale todas as dependências necessárias:
   ```bash
   npm i
   ```
      ou 
   ```bash
   npm install
   ```


## Como Executar o Projeto

Após instalar as dependências, inicie o servidor de desenvolvimento local com o comando:

```bash
npm run dev
```

Após o comando rodar com sucesso, digite a letra "o" para abrir no servidor local.

## Exemplo de mensagem suspeita para testar
```
"Oi mãe, troquei de número hoje. Preciso pagar uma conta agora e meu aplicativo deu erro,
consegue me fazer um Pix de R$ 450,00? Depois te devolvo a transferência."
```

## Exemplo de link suspeito para testar
```
http://atualizacao-cadastral-banco-urgente.com
```

## Integrantes e RM´s

- Enzo Oldani Camargo – RM571685
- Giulia Mardegan Russo – RM571468
- Kauan de Carlo Merida – RM573997
- Kayque Amaro Martins Souza – RM572031
- Victoria Bandeira Berumen – RM571183

## Link do Deploy (Vercel)

A aplicação foi publicada no link abaixo:

**[Clique aqui para acessar o Deploy na Vercel](https://confere-a-gs.vercel.app/)**  
