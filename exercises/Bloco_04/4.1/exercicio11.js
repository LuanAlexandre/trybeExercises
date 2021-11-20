let salarioBruto = 3000.0;
let aliquotaInss, aliquotaImpostoRenda;
let salarioBase;
let salarioLiquido;

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
  aliquotaInss = 0.08;
  salarioBase = salarioBruto - aliquotaInss*salarioBruto;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  aliquotaInss = 0.09;
  salarioBase = salarioBruto - aliquotaInss*salarioBruto;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  aliquotaInss = 0.11;
  salarioBase = salarioBruto - aliquotaInss*salarioBruto;
} else if (salarioBruto > 5189.82) {
  aliquotaInss = 570.88;
  salarioBase = salarioBruto - aliquotaInss;
}

if (salarioBase > 1903.98 && salarioBase < 2826.65) {
  aliquotaImpostoRenda = 0.075;
  salarioLiquido = salarioBase - (salarioBase*aliquotaImpostoRenda - 142.80);
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  aliquotaImpostoRenda = 0.15;
  salarioLiquido = salarioBase - (salarioBase*aliquotaImpostoRenda - 354.8);
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  aliquotaImpostoRenda = 0.225;
  salarioLiquido = salarioBase - (salarioBase*aliquotaImpostoRenda - 636.13);
} else if (salarioBase > 4664.68) {
  aliquotaImpostoRenda = 0.275;
  salarioLiquido = salarioBase - (salarioBase*aliquotaImpostoRenda - 869.36);
}

console.log('Salário: R$ ' + salarioLiquido);