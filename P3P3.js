function evaluateQuiz() {
    let totalScore = 0;
    let userScores = [];

    let questions = document.querySelectorAll('.question');
    questions.forEach((question, index) => {
        let selectedAnswer = question.querySelector('input[type="radio"]:checked');
        let score = 0;
        if (selectedAnswer) {
            score = parseInt(selectedAnswer.value);
            totalScore += score;
        }
        userScores.push(score);
    });

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Puntaje Total: ${totalScore} de ${questions.length * 10}`;

    generateChart(userScores[0], 'chart1', 'Pregunta 1');
    generateChart(userScores[1], 'chart2', 'Pregunta 2');
    generateChart(userScores[2], 'chart3', 'Pregunta 3');
    generateChart(userScores[3], 'chart4', 'Pregunta 4');
}

function generateChart(score, chartId, label) {
    let ctx = document.getElementById(chartId).getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [label],
            datasets: [{
                label: 'Puntos por Pregunta',
                data: [score],
                backgroundColor: '#4CAF50',
                borderColor: '#388E3C',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });
}

