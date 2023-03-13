function clicar(clicar) {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var email = document.getElementById('email').value;
    
    funcao(nome,sobrenome,email);
  }

  function funcao(nome,sobrenome,email) {
     console.log("Nome: " + nome);
     console.log("Sobrenome: " + sobrenome);
     console.log("E-mail: " + email);
  }