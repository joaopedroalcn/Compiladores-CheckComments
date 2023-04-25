function checaComentarios(str) {
  let dentroComentario = false;
  let comentario = '';
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '/' && str[i+1] === '*') {
      if (!dentroComentario) {
        dentroComentario = true;
        comentario += '/*';
      } else {
        comentario = 'Não é comentário';
        break;
      }
      i++;
    } else if (str[i] === '*' && str[i+1] === '/') {
      if (dentroComentario) {
        dentroComentario = false;
        comentario += '*/';
        break;
      } else {
        comentario = 'Não é comentário';
        break;
      }
      i++;
    } else if (dentroComentario) {
      comentario += str[i];
    } else {
      comentario = 'Não é comentário';
      break;
    }
  }
  
  if (dentroComentario) {
    comentario = 'Não é comentário';
  }
  
  console.log(comentario);
}

checaComentarios("/*aadfsdfsd*/fdgfdgd435/*fghfg*/")
