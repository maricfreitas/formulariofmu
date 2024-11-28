# Pesquisa Sobre Gêneros Literários
<p align="center"><img src="/assets/images/bibliotecaLogo.png" alt="Logo da Biblioteca" width="300px" align="center"></p>

<p align="justify">&emsp;Uma pesquisa com com os nossos leitores sobre quais são os gêneros literários mais lidos e procurados do nosso catálogo.
A Pesquisa tem por finalidade melhorar a experiência dos nossos leitores a fim de apresentar novos horizontes através da infinidade de conteúdos encontrados em nosso acervo.</p>

## Índice
1. <a href="#como-funciona">Como Funciona?</a>
2. <a href="#campos-de-preenchimento">Campos de Preenchimento</a>
3. <a href="#layout">Layout</a>
4. <a href="#como-rodar">Como Rodar o Projeto?</a>
5. <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a>
6. <a href="#tabela">Tabela</a>
7. <a href="#pessoas-autoras">Pessoas Autoras</a>

## Como Funciona?
<p align="justify">&emsp;Trata-se de um formulário que será utilizado não apenas para estudarmos os gêneros literários mais lidos, mas também uma forma de divulgar livros relacionados para incentivar ainda mais a leitura e impulsionar as vendas de outros livros importantes do acervo.<br>&emsp;No formulário, o leitor precisará inserir os dados de identificação e contato, o tipo de mídia, autor preferido e o gênero literário. Após isso, um botão de indicação de livros poderá ser acionado para num pop-up a indicação ser mostrada.<br>&emsp;Caso o usuário não selecione o gênero literário, uma mensagem ("Por favor, selecione pelo menos uma categoria.") aparecerá solicitando o preenchimento.<br>&emsp;Ao acionar os botões "Enviar" e "Cancelar", os dados preenchidos no formulário serão apagados para que uma nova pesquisa seja iniciada e um pop-up com a mensagem "Formulário enviado com sucesso" aparecerá ao "pressionar"o primeiro botão.</p>

## Campos de Preenchimento
- [x] E-mail (endereço eletrônico);
- [x] Nome Completo;
- [x] Data de Nascimento;
- [x] Número de CPF (número do Cadastro de Pessoa Física do usuário);
- [x] Número da Carteirinha (número do registro de cadastro na biblioteca);
- [x] Tipo de mídia (se o tipo de livro é físico ou digital);
- [x] Autor Favorito (nome do autor (es) do livro);
- [x] Seleção de gêneros literários;
- [x] Opção para receber novidades e atualizações sobre novos livros.

## Layout
<p align="center"><img src="/assets/images/layout.jpeg" alt="Layout do Formulário" width="500px"></p>

## Tecnologias Utilizadas
- [x] HTML;
- [x] CSS;
- [x] CSS-Bootstrap;
- [x] Javascript;
- [x] Vercel;
- [x] PHP;
- [x] SQL.

## Tabela
<p align="justify">&emsp;Código utilizado para a criação da tabela:<br><br>CREATE TABLE generos_literarios (<br>
    id INT AUTO_INCREMENT PRIMARY KEY,<br>
    email VARCHAR(255) NOT NULL,<br>
    nome VARCHAR(255) NOT NULL,<br>
    data_nasc DATE,<br>
    cpf VARCHAR(14),<br>
    fone VARCHAR(11),<br>
    carteirinha VARCHAR(6),<br>
    tipo_livro VARCHAR(10),<br>
    autor_favorito VARCHAR(255),<br>
    categorias TEXT,<br>
    novidades VARCHAR(3)<br>
);</p>

## Como Rodar?
<p align="justify">&emsp;O formulário foi hospedado no <a href="https://vercel.com">Vercel</a>, e para acessá-lo, basta copiar o link (https://formulariofmu.vercel.app/) e colar no seu navegador ou <a href="https://formulariofmu.vercel.app/">clicar aqui</a>.

## Pessoas Autoras
- Alan Ishikawa;
- Dayane Lisboa da Silva;
- John Bispo dos Santos Silva;
- Mariana de Campos Freitas;
- Vitor Manoel de Jesus Santana.
