const input = document.querySelector('.search-input')
const sugestoesContainer = document.querySelector('.sugestoes')


const options = ['Avenida Paulista', 'Corinthians Itaquera', 'Brás', 'Palmeiras Barra Funda']

input.addEventListener('input', () => {
    const textoDigitado = input.value.toLowerCase();
    const sugestoes = options.filter(option =>
      option.toLowerCase().includes(textoDigitado)
    );
  
    sugestoesContainer.innerHTML = '';
  
    sugestoes.forEach(sugestao => {
      const sugestaoElemento = document.createElement('div');
      sugestaoElemento.textContent = sugestao;
      sugestaoElemento.classList.add('sugestao');
      
      sugestaoElemento.addEventListener('click', () => {
        input.value = sugestao;
        sugestoesContainer.innerHTML = '';
      });
  
      sugestoesContainer.appendChild(sugestaoElemento);
    });
  });

  
  console.log('ta funfando')

