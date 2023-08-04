// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] };
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

let quantidade = 0

jose.carrinho.push(tv, 'quantidade = 1');
jose.carrinho.push(caboUsb, 'quantidade = 2')
jose.carrinho.push(webcam, 'quantidade = 1')



carlos.carrinho.push(notebook, 'quantidade = 2');


patricia.carrinho.push(teclado, 'quantidade = 1')
patricia.carrinho.push(caboUsb, 'quantidade = 2')
patricia.carrinho.push(carregador, 'quantidade = 1')
patricia.carrinho.push(mouse, 'quantidade = 1')
patricia.carrinho.push(monitor, 'quantidade = 1')

renato.carrinho.push(webcam, 'quantidade = 5')


roberto.carrinho.push(webcam, 'quantidade = 1')
roberto.carrinho.push(caboUsb, 'quantidade = 2')




console.log(patricia, carlos, renato, jose, roberto);