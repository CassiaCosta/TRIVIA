function result() {
    let score = 0;
    if (document.getElementById('correct1').checked) { score++; }
    if (document.getElementById('correct2').checked) { score++; }
    if (document.getElementById('correct3').checked) { score++; }
    if (document.getElementById('correct4').checked) { score++; }

    const resultScore = document.getElementById("score");
    resultScore.innerHTML = "<p>Seu Score é: " + score + "<br> Respostas corretas: <br> 1) head <br>2) body<br> 3) / <br>4) Define a cor do fundo</p>";
}    