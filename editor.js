function gerarPagina() {
  // Obter o conteúdo editável
  var conteudo = document.getElementById("editor").innerHTML;

  // Obter o nome do arquivo do input
  var nomeArquivo = document.getElementById("nomeArquivo").value;

  // Criar o conteúdo final
  var paginaHTML =
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>' +
    nomeArquivo +
    "</title>\n</head>\n<body>\n" +
    conteudo +
    "\n</body>\n</html>";

  // Exibir o resultado
  document.getElementById("resultado").innerText = paginaHTML;

  // Opção: Salvar o conteúdo em um arquivo (pode ser feito no lado do cliente, dependendo do navegador)
  // var blob = new Blob([paginaHTML], { type: 'text/html' });
  // var link = document.createElement('a');
  // link.href = window.URL.createObjectURL(blob);
  // link.download = nomeArquivo + '.html';
  // link.click();
}
