const email = document.getElementById('email');
const password = document.getElementById('senha');
const button = document.getElementById('botao');
const sendButton = document.querySelector('#submit-btn');
const agreementChecked = document.querySelector('#agreement');

// Vamos criar uma função para validar o e-mail no avaliador. Essa função vai ver se o valor dentro dos inputs é o exigido pelo avaliador e caso seja irá emitir um alerta de bem vindo ao clicarmos em enviar, caso não ele mandará outro indicando um err o:

function validation() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', validation);

// Vamos criar uma função que checa se a pessoa marcou check no agreement ou não. Caso ela tenha marcado ela podera enviar o formulario dela e caso ela não tenha marcado o botão ficara desativado:

function areYouareRobbot() {
  if (agreementChecked.checked) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}

agreementChecked.addEventListener('click', areYouareRobbot);
