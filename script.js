window.onload = () => {
  const button = document.querySelector('#btn-login');
  const loginInfo = ['tryber@teste.com', '123456'];
  const inputLogin = document.querySelector('#infoLogin');
  
  const loginConected = () => {
    //Percorre o campo com elementos de login e os compara com a nova variável infoInput.
    for (let i = 0; i < inputLogin.length - 1; i += 1) {
      const infoInput = inputLogin[i];
      if (infoInput.value !== loginInfo[i]) {
        alert('Email ou senha inválidos.');
        return;
      }
    }
    alert('Olá, Tryber!');
  }

  button.addEventListener('click', loginConected);
};

// Usei como referência esse site: "https://pt.stackoverflow.com/questions/207822/cannot-read-property-addeventlistener-of-null". 
// Usado para aplicar o window.onload já o script foi colocado no início do html e sempre retornava o erro Cannot read property 'addEventListener' of null ao usar no button.
// Usei também esse site: "https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Build_your_own_function"; para me auxiliar na lógica de como montar uma função pegando elementos a partir do DOM de modo geral.
