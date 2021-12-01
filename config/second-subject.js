function result() {
    var score = 0;
    if (document.getElementById('correct5').checked) { score++; }
    if (document.getElementById('correct6').checked) { score++; }
    if (document.getElementById('correct7').checked) { score++; }
    if (document.getElementById('correct8').checked) { score++; }

    const scoreAnswers = document.getElementById("scoreAnswers");
    scoreAnswers.innerHTML = "<p>Sua pontuação é: " + score + "</p> <p>Respostas corretas: <br> 1) Define o estilo da borda <br>2) font-size<br> 3) Altura e largura <br>4) Define a cor de fundo</p>";
}