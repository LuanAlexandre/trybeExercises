//Exercicio 1: Operacoes basicas

function sum(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function module(a, b) {
  return a % b;
}

//Exercicio 2: Retornar o maior de dois numeros

function higherTwoNumbers(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}

//Exercicio 3: Retornar o maior de tres numeros

function higherThreeNumbers(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= c) {
    return b;
  } else {
    return c;
  }
}

//Exercicio 4: Retornar se um numero e positivo, negativo ou zero

function signOfNumber(a) {
  if(a>0) {return 'Positive';}
  else if(a<0) {return 'Negative';}
  else {return 'zero';}
}

//Exercicio 5: Retornar se tres angulos formam um triangulo

function triangle(a, b, c) {
  if(a>0 && b>0 && c>0){
    if(a+b+c === 180) {return true; }
    else {return false;}
  }
}

//Exercicio 6: Retornar os movimentos de uma peca de xadrez

function chessPiece(a) {
  switch (a.toLowerCase()) {
    case 'pawn':
      return 'step forward, but can take two steps in the first move';
      break;
    
    case 'rook':
      return 'vertical and horizontal in any quantity, but cannot jump over others pieces';
      break;
  
    case 'knight':
      return 'in L format and can jump over others pieces';
      break;
    
    case 'bishop':
      return 'diagonals in any quantity, but cannot jump over others pieces';
      break;
  
    case 'queen':
      return 'vertical, horizontal and diagonals in any quantity; cannot jump over others pieces';
      break;
  
    case 'king':
      return 'vertical, horizontal and diagonals in a step';
      break;
  
    default:
      return 'Error. Unknow piece!';
  }
}

//Exercicio 7: Converter notas do sistema de porcentagem para sistema A~F

function avaliationSystem(a) {
  if (a >= 90 && a <= 100) {
    return 'A';
  } else if (a < 90 && a >= 80) {
    return 'B';
  } else if (a < 80 && a >= 70) {
    return 'C';
  } else if (a < 70 && a >= 60) {
    return 'D';
  } else if (a < 60 && a >= 50) {
    return 'E';
  } else if (a < 50 && a >= 0) {
    return 'F';
  } else if (a > 100 || a < 0){
    return 'Erro! Invalid value.';
  }
}

//Exercicio 8: Retornar se existe um par entre tres numeros

function hasEven(a, b, c) {
  if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

//Exercicio 9: Retornar se existe um impar entre tres numeros

function hasOdd(a, b, c) {
  if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    return true;
  } else {
    return false;
  }
}

//Exercicio 10: Calcular o lucro de venda de 1000 unidades de um produto

function profit(costValue, saleValue) {
  if (costValue >= 0 && saleValue >= 0) {
    let totalCostValue = costValue + 0.2*costValue;
    return 'R$ ' + 1000.0*(saleValue - totalCostValue);
  } else {
    return 'Error! Invalid values.';
  }
}

//Exercicio 11: Calcular salario liquido

function salary(grossSalary) {
  let aliquotInss;

  if (grossSalary > 0 && grossSalary <= 1556.94) {
    aliquotInss = 0.08;
    wage = grossSalary - aliquotInss*grossSalary;
  } else if (grossSalary > 1556.94 && grossSalary <= 2594.92) {
    aliquotInss = 0.09;
    wage = grossSalary - aliquotInss*grossSalary;
  } else if (grossSalary > 2594.92 && grossSalary <= 5189.82) {
    aliquotInss = 0.11;
    wage = grossSalary - aliquotInss*grossSalary;
  } else if (grossSalary > 5189.82) {
    aliquotInss = 570.88;
    wage = grossSalary - aliquotInss;
  }
  
  if (wage > 1903.98 && wage < 2826.65) {
    incomeTaxRate = 0.075;
    netSalary = wage - (wage*incomeTaxRate - 142.80);
  } else if (wage > 2826.65 && wage <= 3751.05) {
    incomeTaxRate = 0.15;
    netSalary = wage - (wage*incomeTaxRate - 354.8);
  } else if (wage > 3751.05 && wage <= 4664.68) {
    incomeTaxRate = 0.225;
    netSalary = wage - (wage*incomeTaxRate - 636.13);
  } else if (wage > 4664.68) {
    incomeTaxRate = 0.275;
    netSalary = wage - (wage*incomeTaxRate - 869.36);
  }

  return netSalary;

}
