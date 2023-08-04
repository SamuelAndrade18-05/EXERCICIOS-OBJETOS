const participantes = [
    { nome: "Dany" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Daniel" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: 'Samuel' },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Carlos" },
    { nome: "Antonio" },
]

for (let posicao = 0; posicao < participantes.length; posicao++) {
    if (participantes[posicao].nome === 'Carlos') {
        console.log(`Galera... o Carlos esta na posicao ${posicao + 1}, corre lá!`);
    }
}


