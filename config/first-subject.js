function result() {
    let score = 0;
    if (document.getElementById('correct1').checked) { score++; }
    if (document.getElementById('correct2').checked) { score++; }
    if (document.getElementById('correct3').checked) { score++; }
    if (document.getElementById('correct4').checked) { score++; }

    const scoreAnswers = document.getElementById("scoreAnswers");
    scoreAnswers.innerHTML = "<p>Sua pontuação é: " + score + "</p> <p>Respostas corretas: <br> 1) head entre <> <br>2) body entre <> <br> 3) / <br>4) p entre <></p>";
}    