const input = document.getElementById('adctext');
const corpoPagina = document.body; 
// Captura o corpo da página

var listaFilmes = [
  'https://http2.mlstatic.com/D_NQ_NP_854854-MLU50423477552_062022-O.webp',
  'https://m.media-amazon.com/images/I/81YoKLnmDTL._AC_UF1000,1000_QL80_.jpg',
  'https://bdjogos.com.br/capas/2463-monster-hunter-playstation-2-capa-1.jpg',
  'https://jovemnerd.com.br/wp-content/uploads/2021/03/resident-evil-4-capa-ps2.jpg'
];

function adicionarFilme() {
  // Adiciona o valor do input à listaFilmes
  
  if (input.value.endsWith('jpg') || (input.value.endsWith('webp')) || (input.value.endsWith('png'))){
      listaFilmes.push(input.value);

  }
  
  // Remove todas as imagens existentes
  var imagens = document.querySelectorAll('img#img');
  for (var i = 0; i < imagens.length; i++) {
    imagens[i].remove();
  }

  // Atualiza as imagens na tela
  refresh();
}

function removerFilme(){
  listaFilmes.pop();
  // Remove todas as imagens existentes
  var imagens = document.querySelectorAll('img#img');
  for (var i = 0; i < imagens.length; i++) {
    imagens[i].remove();
  }

  // Atualiza as imagens na tela
  refresh();

}

//atualizar as coisa na tela
function refresh() {
  // Adiciona as imagens ao corpo da página
  for (var i = 0; i < listaFilmes.length; i++) {
    var img = document.createElement('img');
    img.src = listaFilmes[i];
    img.id = 'img';
    corpoPagina.appendChild(img);
  }
}

// Inicializa as imagens na tela
refresh();


