const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botao = document.getElementById('botao');

// Vamos criar uma função para validar o e-mail no avaliador. Essa função vai ver se o valor dentro dos inputs é o exigido pelo avaliador e caso seja irá emitir um alerta de bem vindo ao clicarmos em enviar, caso não ele mandará outro indicando um err o:

function validation() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botao.addEventListener('click', validation);
