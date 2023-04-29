document.addEventListener('DOMContentLoaded', () => {
  const linkSobreNos = document.querySelector('a[href="#sobrenos_container"]');

  linkSobreNos.addEventListener('click', (event) => {
    event.preventDefault();
    const sobrenosContainer = document.getElementById('sobrenos_container');
    sobrenosContainer.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const botao = document.querySelector(".botaocontatodirecao");
  if (botao) {
    botao.addEventListener("click", function() {
      window.open("https://shre.ink/netds", "_blank");
    });
  }
});
