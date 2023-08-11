
  var characters = [];

  document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
      criarPersonagem();
    }
  });

  function validateForm() {
    var nome = document.getElementById("name").value;
    var classe = document.getElementById("class").value;
    var servidor = document.getElementById("server").value;

    if (nome === "" || classe === "selecione" || servidor === "selecione") {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return false;
    }
    return true;
  }

  function criarPersonagem() {
    var nome = document.getElementById("name").value;
    var classe = document.getElementById("class").value;
    var servidor = document.getElementById("server").value;

    var character = {
      nome: nome,
      classe: classe,
      servidor: servidor
    };

    characters.push(character);

    document.getElementById("info-name").textContent = character.nome;
    document.getElementById("info-class").textContent = character.classe;
    document.getElementById("info-server").textContent = character.servidor;

    document.getElementById("Informações").classList.remove("hidden");
  }


 