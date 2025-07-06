emailjs.init(EMAILJS_CONFIG.public_key);

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    EMAILJS_CONFIG.service_id,
    EMAILJS_CONFIG.template_id,
    this
  )
  .then(() => {
    alert("Mensagem enviada com sucesso!");
    form.reset();
  })
  .catch((error) => {
    console.error("Erro:", error);
    alert("Ocorreu um erro ao enviar. Tente novamente.");
  });
});