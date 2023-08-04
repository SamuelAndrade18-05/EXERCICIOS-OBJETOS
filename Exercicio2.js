const carros = {
    marca: 'Bugatti',
    modelo: 'Veyron',
    ano: '2009',
    cor: 'Preta',
    quantidade_portas: 2,
    potencia: '1001 cv',
    automatico: false
}

let cambio = carros.automatico ? "Câmbio automático" : "Câmbio manual"

let { marca, modelo, ano, cor, potencia, quantidade_portas } = carros
console.log(`As informações a respeito do veículo são:`);
console.log(`${marca}
Modelo ${modelo}
de ${ano}
na cor ${cor}
possui ${quantidade_portas} portas
tem ${potencia}
e ${cambio}`);