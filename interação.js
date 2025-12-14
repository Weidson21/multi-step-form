const steps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next");
const backBtns = document.querySelectorAll(".back");
const progress = document.querySelectorAll(".step");
const email = document.querySelector("#emaill");
const nome = document.querySelector("#nome");
const password = document.querySelector("#senha");
const repassword = document.querySelector("#confirmar");
const usuario = document.querySelector("#usuario");

let current = 0;

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
    progress[i].classList.toggle("active", i <= index);
  });
}

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (!email.value.trim() || !nome.value.trim()){
        alert("Preencha todos os campos obrigatórios!");
        email.focus();
        return false;

    } 
    if (!email.value.includes("@")){
        alert("E-mail inválido. Falta o @")
        email.focus();
        return false;
    }

    if(password.value != repassword.value){
        alert("A senhas não se confirmam!")
        password.focus();
        repassword.focus();
        return false;
    }

    if (current < steps.length - 1) {
      current++;
      showStep(current);
    }
  });
});

backBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (current > 0) {
      current--;
      showStep(current);
    }
  });
});