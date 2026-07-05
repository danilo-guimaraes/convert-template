const USD = 5.17
const EUR = 5.93
const GBP = 6.91

const form = document.querySelector('form');
const amount = document.querySelector('#amount');
const currency = document.querySelector('#currency');
const footer = document.querySelector('main footer');
const description = document.querySelector('#description');
const result = document.querySelector('#result');
const sugestoes = document.querySelector('#sugestoes');

amount.addEventListener('input', () => {

    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")

})

form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, 'US$')
            break;
        case 'EUR':
            convertCurrency(amount.value, EUR, '€')
            break
        case 'GBP':
            convertCurrency(amount.value, GBP, '£')
            break
    }

}

function convertCurrency(amount, price, symbol) {
    try {

        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = amount * price

        if (isNaN(total)) {
            return alert('Por favor, digite apenas valores numericos!')
        }
        footer.classList.add('show-result')

        total = formatCurrencyBRL(total)
        result.textContent = `${total}`
    } catch (error) {
        alert('Nao foi possivel converter, tente mais tarde')
        footer.classList.remove('show-result')
        console.log(erro);

    }

}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}

sugestoes.addEventListener('click', (event) => {
    const botao = event.target.closest('button')

    if (!botao) return

    amount.value = botao.value
    amount.focus()

})
