const botão =document.querySelector('button');
const m = document.querySelector('#mensagem');

botão.addEventListener('click', () => {
    const input = document.querySelector('input').value;

    m.innerHTML = input
})