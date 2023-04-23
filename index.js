function checaComentarios(codigo) {
  let semComentarios = "";
  let dentroDeComentario = false;
  let ignorarProximoCaractere = false;

  for (let i = 0; i < codigo.length; i++) {
    // verifica se o próximo caractere deve ser ignorado
    if (ignorarProximoCaractere) {
      ignorarProximoCaractere = false;
      continue;
    }

    // se encontrar uma barra ( / ) seguida de outro caracter
    if (codigo[i] === "/" && !dentroDeComentario && i < codigo.length - 1) {
      if (codigo[i + 1] === "/") {
        // é um comentário de linha, descarta o restante da linha
        i = codigo.indexOf("\n", i);
        if (i === -1) {
          i = codigo.length; // fim do arquivo
        }
        console.log(`${codigo} -> impressão de comentário de linha`);
      } else if (codigo[i + 1] === "*") {
        // é um comentário de bloco, marca a flag
        dentroDeComentario = true;
        ignorarProximoCaractere = true;

        console.log(`${codigo} -> impressão de tudo que vem após o primeiro /*`);
      } else {
        // não é um comentário, adiciona o caractere ao código sem comentários
        semComentarios += codigo[i];
      }
    } else if (codigo[i] === "*" && dentroDeComentario && i < codigo.length - 1 && codigo[i + 1] === "/") {
      // se encontrar um asterisco seguido de uma barra ( */ ) enquanto estiver dentro de um comentário de bloco, finaliza o comentário
      dentroDeComentario = false;

      const ultimoAsteriscoBarraIndex = codigo.indexOf('*/');
      codigo = codigo.substring(0, ultimoAsteriscoBarraIndex + 2);
      console.log(`${codigo} -> impressão do primeiro comentário`);

      ignorarProximoCaractere = true;
    } else if (!dentroDeComentario) {
      // se não estiver dentro de um comentário, adiciona o caractere ao código sem comentários
      semComentarios += codigo[i];
      console.log("Não é comentario");
    }
  }

  return codigo;
}

checaComentarios("/*aa*/fdfsdfds/*dhad*/")
