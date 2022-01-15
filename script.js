const email = document.getElementById('email');
const password = document.getElementById('senha');
const button = document.getElementById('botao');
const sendButton = document.querySelector('#submit-btn');
const agreementChecked = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const remainingLetters = document.querySelector('#counter');
const maxLetters = 500;
const takingTheSubjects = document.querySelector('.subject');

// Vamos criar uma função para validar o e-mail no avaliador. Essa função vai ver se o valor dentro dos inputs é o exigido pelo avaliador e caso seja irá emitir um alerta de bem vindo ao clicarmos em enviar, caso não ele mandará outro indicando um err o:

const validation = () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
};

button.addEventListener('click', validation);

// Vamos criar uma função que checa se a pessoa marcou check no agreement ou não. Caso ela tenha marcado ela podera enviar o formulario dela e caso ela não tenha marcado o botão ficará desativado:

const canYouAgrePlease = () => {
  if (agreementChecked.checked) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
};

agreementChecked.addEventListener('click', canYouAgrePlease);

// Vamos criar uma função que vai mostrar o número de letras que falta:

function itsOverBrow() {
  const toTheEnd = maxLetters - textArea.value.length;

  remainingLetters.textContent = `${toTheEnd} characters remaining`;
}

textArea.addEventListener('input', itsOverBrow);

// Vamos criar as funções que pegam os valores dos inputs:

// Começando pela função que pega o nome:

const fullNamaeForm = () => {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const fullName = document.getElementById('fullname');
  fullName.innerHTML = '';
  const createP = document.createElement('p');
  fullName.appendChild(createP);
  createP.innerText = `Nome: ${name} ${lastName}`;
};
