function result() {
    var score = 0;
    if (document.getElementById('correct5').checked) { score++; }
    if (document.getElementById('correct6').checked) { score++; }
    if (document.getElementById('correct7').checked) { score++; }
    if (document.getElementById('correct8').checked) { score++; }

    const scoreAnswers = document.getElementById("scoreAnswers");
    scoreAnswers.innerHTML = "<p>Sua pontuação é: " + score + "</p> <p>Respostas corretas: <br> 1) head <br>2) body<br> 3) / <br>4) Define a cor do fundo</p>";
}