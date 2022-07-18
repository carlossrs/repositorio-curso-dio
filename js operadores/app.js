function teste(num1, num2) {
    let igualdade;
    let soma = num1 + num2;
    let saoNao;
    let comparador10;
    let comparador20;
  
    if (num1 == num2) {
      saoNao = "são";
    } else if (num1 != num2) {
      saoNao = "não são";
    }
    if (soma < 10 && soma < 20) {
      comparador10 = "menor";
      comparador20 = "menor";
    } else if (soma > 10 && soma < 20) {
      comparador10 = "maior";
      comparador20 = "menor";
    } else if (soma > 10 && soma > 20) {
      comparador10 = "maior";
      comparador20 = "maior";
    } else if ((soma = 10)) {
      comparador10 = "igual";
      comparador20 = "menor";
    } else if ((soma = 20)) {
      comparador10 = "maior";
      comparador20 = "igual";
    }
  
    return `Os números ${num1} e ${num2} ${saoNao} iguais. Sua soma é ${soma}, que é ${comparador10} que 10 e ${comparador20} que 20`;
  }
  
  console.log(teste(5, 5));