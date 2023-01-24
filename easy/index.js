let time = 80000; //ms
let step = 1;

function tableCount(num, elem) {
  let l = document.querySelector('#' + elem);
  n = 0;
  let t = Math.round(time/(num/step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    l.innerHTML = n;
  }, t)
  
}
tableCount(300, 'count');



let button = document.getElementById('finish')

button.addEventListener('click', checkTest);

function checkTest() {
    let result = 0;

    let a1 = document.getElementById("q1").value;
    if (a1 === "4") {
    result ++;
    }

    let a2 = document.getElementById("q2").value;
    if (a2 === "0") {
    result ++;
    }

   let a3 = document.getElementById("q3").value;
   if (a3 === "15") {
   result ++;
   }

   let a4 = document.getElementById("q4").value;
   if (a4 === "69") {
   result ++;
   }

   let a5 = document.getElementById("q5").value;
   if (a5 === "1") {
   result ++;
  }
  alert(" Количество правильных ответов: "  + result)
}

checkTest();