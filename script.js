let elementoPai = document.getElementById('elementoPai');
let button = document.getElementById("button-text");
let buttonRemove = document.getElementById('button-remove');
let textInput = document.getElementById("textInput");

button.addEventListener('click', () => {
    let newText = textInput.value;
    let newElement = document.createElement('p');
    newElement.textContent = newText;
    elementoPai.appendChild(newElement);
    console.log(newElement)
})

buttonRemove.addEventListener('click', () =>{
    if (elementoPai.children.length > 0) {
        let ultimoFilho = elementoPai.lastElementChild;
        elementoPai.removeChild(ultimoFilho);
    } else {
        alert('Não tem elementos filhos para remover')
    }
} )