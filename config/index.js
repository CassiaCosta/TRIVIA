const name = prompt("Como você se chama?");
const welcomeUser = document.getElementById("welcome");
welcomeUser.innerHTML = "<p>Olá, " + name + "! Seja bem-vinda ao Trivia Dev! <br> Preparada para jogar?</p>";