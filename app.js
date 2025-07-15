let btn = document.querySelectorAll(".btn")
let hide = document.querySelector(".hide")
let reset = document.querySelector(".Reset")

let player = "X"
const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        if (btn[i].innerText == "") {

            if (player == "X") {
                hide.innerText = "O turn"

                btn[i].innerText = "X"
                player = "O"
            }
            else {
                hide.innerText = "X turn"

                btn[i].innerText = "O"
                player = "X"
            }
        }
        checkwinner()
    })
}
reset.addEventListener("click", () => {
    for (let i = 0; i < btn.length; i++) {
        btn[i].innerText = ""
        btn[i].disabled = false
    }
    hide.innerText = "X Turn"
    player= "X"
})
function checkwinner() {
    for (let pattern of winpattern) {
        if (btn[pattern[0]].innerText != "" && btn[pattern[1]].innerText != "" && btn[pattern[2]].innerText != "") {
            if (btn[pattern[0]].innerText == btn[pattern[1]].innerText && btn[pattern[1]].innerText == btn[pattern[2]].innerText) {
                hide.innerText = `Player ${btn[pattern[0]].innerText} has won the match`

                btn.forEach(element => {
                    element.disabled = true;

                });


            }
        }
    }

}
