MZ UPDATES — versão funcional

ARQUIVOS
- index.html: página principal
- style.css: visual grafite, dourado e esmeralda
- script.js: lê o updates.json
- updates.json: arquivo que você edita para publicar novidades
- assets/logo.png: coloque aqui a sua logo

COMO USAR A LOGO
A imagem enviada na conversa não pôde ser incorporada automaticamente neste ZIP.
Salve a sua logo com o nome:
logo.png
e coloque dentro da pasta:
assets

COMO EDITAR AS ATUALIZAÇÕES
Abra updates.json no VS Code.
Altere versaoAtual, ultimaAtualizacao e a lista atualizacoes.
Para adicionar uma versão, copie um objeto existente dentro de "atualizacoes" e edite os campos.

IMPORTANTE
Não abra apenas index.html com duplo clique para testar o JSON, pois alguns navegadores bloqueiam fetch local.
Teste por um servidor HTTP (por exemplo, hospedando o projeto) para que updates.json seja carregado normalmente.

HOSPEDAGEM
A pasta contém os arquivos estáticos da página. O método exato de publicação/URL depende de como seu app na hospedagem está configurado para servir HTTP.
