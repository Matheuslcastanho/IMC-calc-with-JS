const calcular = document.getElementById("calcular"); // variável referente ao botão(var global)

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classification = "";
    if (valorIMC < 18.5) {
      classification = "abaixo do peso.";
    } else if (valorIMC < 25) {
      classification = "com seu peso ideal. Parabéns!!";
    } else if (valorIMC < 30) {
      classification = "levemente acima do peso";
    } else if (valorIMC < 35) {
      classification = "com obesidade grau 1.";
    } else if (valorIMC < 40) {
      classification = " com obesidade grau 2";
    } else {
      classification = " com obesidade grau 3. Cuidado!!!";
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classification}`;
  } else {
    resultado.textContent = "Preencha todos os campos";
  }
}

calcular.addEventListener("click", imc);
