module.exports = {
  getNotas
};


function isValorDivisivelPor10(valor) {
  return (valor % 10) == 0;
}

function getNotas(valor) {

  const notasDisponivel = [100, 50, 20, 10];

  let quantidadeDeNotas=[];

  let i = 0;

  if ((isValorDivisivelPor10(valor) && (valor > 0))) {
    while (valor>0) {
      if (valor >= notasDisponivel[i]) {
        valor = valor - notasDisponivel[i];
        quantidadeDeNotas.push(notasDisponivel[i]);
      } else {
        i++;
      }
    }
  } else if (valor == 0) {
    quantidadeDeNotas = [];
  } else {
    quantidadeDeNotas = null;
  }

  return quantidadeDeNotas;
}