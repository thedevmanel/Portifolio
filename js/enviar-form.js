document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault(); // Impede o envio do formulário

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "" || email === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(email)) {
    alert("E-mail inválido. Digite um endereço válido.");
    return;
  }

  alert("Mensagem enviada com sucesso!");

  // (opcional) Limpa os campos após envio
  document.getElementById("formContato").reset();
});
