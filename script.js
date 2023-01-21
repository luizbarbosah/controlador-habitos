const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', adicionar)
form.addEventListener('change', salvar)

function adicionar() {

    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

   if(dayExists) {
        alert("Dia: " + today + " já registrado!")
        return
    }

    alert("Adicionado com sucesso ✅")
    nlwSetup.addDay(today)
}

function salvar() {
    localStorage.setItem('registro', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('registro')) || {}
nlwSetup.setData(data)
nlwSetup.load()
