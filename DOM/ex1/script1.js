document.getElementById("calcular").addEventListener("click", () => {
    let numerzito01 = parseFloat(document.getElementById("num1").value);
    let numerzito02 = parseFloat(document.getElementById("num2").value);

    const seleciona = document.getElementById("seleção").value;
    let calcular = document.getElementById("calcular");
    let calcula = document.getElementById("calcula");

    let resultado;
    switch (seleciona) {
        case 'adicionar':
            resultado = numerzito01 + numerzito02;
            break;
        case 'subtrair':
            resultado = numerzito01 - numerzito02;
            break;
        case 'multiplicar':
            resultado = numerzito01 * numerzito02;
            break;
        case 'dividir':
            if (numerzito02 === 0) {
                calcular.textContent = 'É impossivel dividir um valor por zero.';
                return;
            }
            resultado = num1 / num2;
            break;
            default:
                return;
};
calcula.textContent = resultado
})