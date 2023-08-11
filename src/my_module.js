/**
 * Retorna uma mensagem de saudação.
 * @param {string} name - O nome da pessoa a ser saudada.
 * @returns {string} A mensagem de saudação.
 */
function sayHello(name) {
    return `Hello, ${name}!`;
}

/**
 * Soma dois números.
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma dos dois números.
 */
function addNumbers(a, b) {
    return a + b;
}

module.exports = { sayHello, addNumbers };
