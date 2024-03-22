const velocidade = 86;
const warn = 85;

/*
    condicao ? true : false;
*/

const radar = velocidade >= warn ? console.log('Recebeu uma multa!') : console.log('Continua andando!');