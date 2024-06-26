let personagens = []
const div = document.querySelector('#lista_personagem')
function salvarProtagonista(){
    const dadosPersonagem = []
    
    const form = document.querySelector('form')
    const input = new FormData(form)
    

    const foto = input.get('foto')
    const heroi = input.get('heroi')
    const filme = input.get('filme')
    const ator = input.get('ator')
    const descricao = input.get('descricao')
    const habilidade = input.get('habilidade')
    dadosPersonagem.push(foto,heroi,filme,ator,descricao,habilidade)
    personagens.push(dadosPersonagem)

    localStorage.setItem('personagens', JSON.stringify(personagens))


    div.innerHTML += `<div>
    <img src="${dadosPersonagem[0]} " alt="">
    <h2>${dadosPersonagem[1]}</h2>
    <p>${dadosPersonagem[2]}</p>
    <p>${dadosPersonagem[3]}</p>
    <p>${dadosPersonagem[4]}</p>
    <p>${dadosPersonagem[5]}</p>
  </div>`


}
let personagensArmazenados = localStorage.getItem('personagens')
if(personagensArmazenados){
    personagens =  JSON.parse(personagensArmazenados)
  
    for(const dadosPersonagem of personagens){
        div.innerHTML += `<div>
    <img src="${dadosPersonagem[0]} " alt="">
    <h2>${dadosPersonagem[1]}</h2>
    <p>${dadosPersonagem[2]}</p>
    <p>${dadosPersonagem[3]}</p>
    <p>${dadosPersonagem[4]}</p>
    <p>${dadosPersonagem[5]}</p>
  </div>`

    }


}

