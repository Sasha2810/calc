let main_mas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let mas_vvod = [];
let mas_znak = [document.querySelector(".plus"), document.querySelector(".minus"), document.querySelector(".percent"), document.querySelector(".plus-minus"), document.querySelector(".del"), document.querySelector(".umn")];
let numbers_mas = [document.querySelector(".seven"), document.querySelector(".zap"), document.querySelector(".eight"), document.querySelector(".nine"), document.querySelector(".six"), document.querySelector(".five"), document.querySelector(".four"), document.querySelector(".three"), document.querySelector(".two"), document.querySelector(".one"), document.querySelector("zero")];
let vvod = document.querySelector(".vvod");
let chislo = "";
let chislo2 = "";
let sumi = 0;

function vvod_number() {
    let number = numbers_mas;
    for (let i = 0; i < number.length; i++)
        number[i].onclick = function() {
            chislo += this.innerText;
            vvod.innerText = chislo;
            // console.log(answer);
        }

    return chislo

}

function AC() {
    let ac = document.querySelector(".ac");
    ac.onclick = function() {
        chislo = "";
        chislo2 = "";
        vvod.innerText = '0';
        vvod_number();
    }
    return ac
}

function shet() {
    let vvod = document.querySelector(".vvod");
    let sum = document.querySelector(".plus");
    let znak = document.querySelectorAll(".znak");
    let number = numbers_mas;
    let mas_znak1 = mas_znak;

    // for (let element of mas_znak1) { // берём элементы из масива, element - это переменная, которая моджет быть любая

    //     element.onclick = function() {
    //         for (let i = 0; i < number.length - 1; i++) {
    //             number[i].onclick = function() {
    //                 chislo2 += this.innerText;
    //                 vvod.innerHTML = chislo2;

    //                 // sum.onclick = function() {
    //                 //     if (chislo2 == "") {
    //                 //         sumi = Number(chislo) + Number(chislo2);
    //                 //         console.log(sumi);
    //                 //     }
    //                 //     vvod.innerText = '0';



    //             }
    //             vvod.innerText = '0';
    //         }
    //     }
    // }
    for (i = 0; i < znak.length; i++) {

        znak[i].onclick = function() {
            if (chislo2 == "") {
                for (let i = 0; i < number.length; i++)
                    number[i].onclick = function() {
                        chislo2 += this.innerText;
                        vvod.innerText = chislo2;


                        sum.onclick = function() {
                            sumi = Number(chislo) + Number(chislo2);
                            console.log(sumi);
                        }
                    }
                vvod.innerText = '0';

            }

            number.onclick = function() { vvod.innerText = '0'; }
            return chislo2, sumi

        }
    }
}


function mega_answer(chislo2) {
    let button_answer = document.querySelector(".answer");
    button_answer.onclick = function() {
        if (chislo2 != "") {
            vvod.innerText = Number(sumi);
        }

    }

}


mega_answer();
shet();
vvod_number();
AC();