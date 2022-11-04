player_1name = localStorage.getItem("player1name")
player_2name = localStorage.getItem("player2name")

console.log(player_1name)
console.log(player_2name)

score1 = 0
score2 = 0

document.getElementById("jogador_1").innerHTML = player_1name
document.getElementById("jogador_2").innerHTML = player_2name

document.getElementById("pontuação1").innerHTML = score1
document.getElementById("pontuação2").innerHTML = score2

document.getElementById("question_player").innerHTML = "Turno de pergunta - " + player_1name
document.getElementById("answer_player").innerHTML = "Turno de resposta - " + player_2name

function send() {
    number1 = document.getElementById("N1").value;
    number2 = document.getElementById("N2").value;

    actual_answer = parseInt(number1) * parseInt(number2)

    question_number = "<h4> " + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'> Checar </button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("N1").value = "";
    document.getElementById("N2").value = "";

}

var question_turn = "player1"
var answer_turn = "player2"

function check() {
    get_answer = document.getElementById("input_check_box").value
    if (get_answer == actual_answer) {
        if (question_turn == "player1") {
            score1++
            document.getElementById("pontuação1").innerHTML = ":" + score1
        }

        else {
            score2++
            document.getElementById("pontuação2").innerHTML = ":" + score2
        }


    }

    else {
        if (answer_turn == "player1") {
            score1 = score1 - 1
            document.getElementById("pontuação1").innerHTML = ":" + score1
        }

        else {
            score2 = score2 - 1
            document.getElementById("pontuação2").innerHTML = ":" + score2
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2"
        answer_turn = "player1"

        document.getElementById("question_player").innerHTML = "Turno de pergunta - " + player_2name
        document.getElementById("answer_player").innerHTML = "Turno de resposta - " + player_1name
    }

    else {
        question_turn = "player1"
        answer_turn = "player2"

        document.getElementById("question_player").innerHTML = "Turno de pergunta - " + player_1name
        document.getElementById("answer_player").innerHTML = "Turno de resposta - " + player_2name
    }

    document.getElementById("output").innerHTML = ""
}
