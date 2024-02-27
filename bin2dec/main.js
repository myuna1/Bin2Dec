const input = document.querySelector('.input')
const result = document.querySelector('.result')

function BinarieToDecimal() {
    const regex = /^[01]+$/
    const errorDiv = document.createElement('div')
    errorDiv.className = 'error-message'

    input.parentNode.insertBefore(errorDiv, input)

    input.addEventListener('input', () => {
        const inputValue = input.value

        if (inputValue.length === 1 && regex.test(inputValue)) {
            result.innerText = inputValue
            removeError()
        } else if (regex.test(inputValue)) {
            const decimal = parseInt(input.value, 2)
            result.innerText = decimal
            removeError()
        } else if (input.value.length === 0) {
            result.innerText = ''
            removeError()
        }
        
        else {
            result.innerText = ""
            displayError('Você inseriu um dígito não binário (insira apenas 0 ou 1).')
        }
    })

    function displayError(message) {
        errorDiv.innerText = message
    }

    function removeError() {
        errorDiv.innerText = ''
    }
}

BinarieToDecimal()
