window.onload = () => {
  const button = document.querySelector('#btn-login');
  //Seleciona o botão criado no html
  const loginInfo = ['tryber@teste.com', '123456'];
  //Lista com informações de login
  let inputLogin = document.querySelector('#infoLogin');
  //Seleciona formulário com elementos de login. (email, etc)
  
  const loginConected = () => {
    //Percorre o campo com elementos de login e os compara com a nova variável infoInput.
    for (let i = 0; i < inputLogin.length - 1; i += 1) {
      const infoInput = inputLogin[i];
      if (infoInput.value === loginInfo[i]) {
        alert('Olá, Tryber!');
        return;
      }
    }
    alert('Email ou senha inválidos.');
  }

  button.addEventListener('click', loginConected);
}

//Usei como referência esse site: "https://pt.stackoverflow.com/questions/207822/cannot-read-property-addeventlistener-of-null". 
//Usado para aplicar o window.onload já o script foi colocado no início do html e sempre retornava o erro Cannot read property 'addEventListener' of null ao usar no button.
//Usei também esse site: "https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Build_your_own_function"; para me auxiliar na lógica de como montar uma função pegando elementos a partir do DOM de modo geral.
