const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
loadUserData()

function saveUserData() {
    
    if (email && password) {
        localStorage.email=emailInput.value
        localStorage.password=passwordInput.value
        // localStorage.getItem('email', email);
        // localStorage.getItem('password', password);
        console.log('Dados salvos com sucesso!');
        console.log('Email: ' + localStorage.email);
        console.log('Senha: ' + localStorage.password);
        alert('Dados salvos com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}


function loadUserData() {

    if (email && password) {
        console.log('Dados carregados com sucesso!');
        console.log('Email: ' + email);
        console.log('Senha: ' + password);
    } else {
        console.log('Não há dados salvos.');
    }
    
}
