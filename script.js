const email = document.getElementById('email');
const password = document.getElementById('senha');
const button = document.getElementById('botao');
const sendButton = document.querySelector('#submit-btn');
const agreementChecked = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const remainingLetters = document.querySelector('#counter');
const maxLetters = 500;

// Vamos criar uma função para validar o e-mail no avaliador. Essa função vai ver se o valor dentro dos inputs é o exigido pelo avaliador e caso seja irá emitir um alerta de bem vindo ao clicarmos em enviar, caso não ele mandará outro indicando um erro:

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
const saveFullNameForm = () => {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const fullName = document.getElementById('fullname');
  fullName.innerHTML = '';
  const createP = document.createElement('p');
  fullName.appendChild(createP);
  createP.innerText = `Nome: ${name} ${lastName}`;
};

// Agora vamos criar uma função que pega o e-mail e a casa:
const saveEmailAndHouseForm = () => {
  const emailForm = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const gettingBoth = document.getElementById('email-and-houses');
  gettingBoth.innerHTML = '';
  const createP = document.createElement('p');
  gettingBoth.appendChild(createP);
  createP.innerText = `Email: ${emailForm}
  Casa: ${house}`;
};

// Vamos prosseguindo aqui que o patrão ficou maluco e quer dar uma de Zuckerberg com as informações da galera. Então agora vamos criar a função que pega a familia escolhida e o conteúdo que a pessoa mais quer aprender:
const familyAndContentForm = () => {
  const yourFamily = document.querySelector('input[name="family"]:checked').value;
  const yourPreferdContent = document.querySelectorAll('input[class="subject"]:checked');
  const contentChecked = [];
  for (let index = 0; index < yourPreferdContent.length; index += 1) {
    contentChecked.push(` ${yourPreferdContent[index].value}`);
  }
  const letsClearEverything = document.getElementById('family-and-content');
  letsClearEverything.innerHTML = '';
  const createP = document.createElement('p');
  letsClearEverything.appendChild(createP);
  createP.innerText = `Família: ${yourFamily}
   Matérias: ${contentChecked}`;
};

// Vamos então agora pegar a nota que a pessoa usuaria deu para a Incrível Trybewarts:
const howYouHateMe = () => {
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const avaliator = document.getElementById('evaluate');
  avaliator.innerHTML = '';
  const createP = document.createElement('p');
  avaliator.appendChild(createP);
  createP.innerHTML = `Avaliação: ${rate}`;
};

// Que tal pegarmos os comments dessa pessoa pra ver o que ela acha da gente?
const wonderfulComment = () => {
  const comment = document.getElementById('textarea').value;
  const commentBox = document.getElementById('textarea');
  commentBox.innerHTML = '';
  const createP = document.createElement('p');
  commentBox.appendChild(createP);
  createP.innerText = `Observações: ${comment}`;
};

// Por último mas não menos importante temos aqui a função que chama todas as funções:
const saveInfo = (event) => {
  event.preventDefault();
  saveFullNameForm();
  saveEmailAndHouseForm();
  familyAndContentForm();
  howYouHateMe();
  wonderfulComment();
};

sendButton.addEventListener('click', saveInfo);
