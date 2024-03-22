/*
    Falsy = false, 0, "", NaN, undefined e null
    Truthy = todos os outros diferentes do { falsy }
*/

if ('Johnny' * 10) {
    console.log('Bom dia!');
} else {
    console.log('Boa noite!');
}

console.log();

if (!null) {
    console.log('Falsy ou False');
}

console.log();

if (1 + 1) {
    console.log('True');
}