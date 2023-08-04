const usuarios = [
    {
        nome: 'João',
        pets: [],
    },

    {
        nome: 'Ana',
        pets: ['pingo', 'Lulu'],
    },

    {
        nome: 'Beatriz',
        pets: ['Lessie'],
    },
    {
        nome: 'Carlos',
        pets: ['Farofa', 'Salsicha', 'Batata'],
    },
    {
        nome: 'Antonio',
        pets: ['Naninha'],
    },
]



for (let usuario of usuarios) {
    if (usuario.pets.length > 0) {
        console.log(`Sou ${usuario.nome} e tenho ${usuario.pets.length} pets`);
    }
    else {
        console.log(`Sou ${usuario.nome} e não tenho pet.`);
    }
}

