const botaoFlutuante = document.querySelector('.agendamentos__btn')
const botaoLista = document.querySelector('.lista')
const botoes = document.querySelectorAll('.lista__btn')

botaoFlutuante.addEventListener('click', () =>
    botaoLista.classList.toggle('lista--ativo'))

botoes.forEach(item =>
    item.addEventListener('click', () =>
        botaoLista.classList.remove('lista--ativo')))
