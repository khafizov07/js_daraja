let son = +prompt('Son kiriting ')


while (isNaN(son)) {
    son = +prompt('Bu son emas son kiriting 🤬')
}
alert('Mana bolarkanu 😁' + son)


let sonJuftToq = +prompt("Son kiriting biz juft yoki toqligini aniqlab beramiz")

if (sonJuftToq % 2 === 0) {
    alert("Siz juft son kiritingiz " + sonJuftToq);
} else if (sonJuftToq % 2 === 1) {
    alert("Siz toq son kiritingiz " + sonJuftToq);
} else {
    alert('Siz sondan boshqa narsa kiritingiz');
}


let a = +prompt('son kiriting')
let b = +prompt('daraja kiriting')


    let javob = a;
    for (let i = 1; i < b; i++) {
        javob *= a;
    }
alert(javob)
