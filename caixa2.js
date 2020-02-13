let notasArray = [10, 20, 50, 100]

const checkdivisivelpordez = async (valor) => {
    let resto = valor % 10

    if (resto != 0)
        resto = null

    return resto
}
const checkdivisivelporcem = async(valor) =>{
    let resto = valor/100
    return resto

}

const getNotas = async (valor) => {
    let divisao = await checkdivisivelpordez(valor)
    
    if (divisao == null)
        return divisao

    let qtdnotas10 =0
    let qtdnotas20 = 0
    let qtdnotas50 = 0
    let qtdnotas100 = 0


    do {
        let divisao = checkdivisivelporcem(valor)
        if(divisao > 0)
        qtdnotas100 = qtdnotas100 + 1
        valor = valor - 100
        console.log('resto de 100', valor)
    }
    while (valor > 100)
    do {
        qtdnotas50 = qtdnotas50+ 1
        valor = valor - 50
        console.log('resto de 50',valor);
    }
    while (valor >= 50)
    do {
        qtdnotas20 = qtdnotas20 + 1
        valor = valor - 20
        console.log('resto de 20',valor)

    }
    while (valor >= 20)
    if(valor > 0)
    qtdnotas10 = valor / 10


    console.log('QTD notas 100: ', qtdnotas100)
    console.log('QTD notas 50: ', qtdnotas50)
    console.log('QTD notas 20: ', qtdnotas20)
    console.log('QTD notas 10: ', qtdnotas10)

}

module.exports = {
    getNotas()
};
