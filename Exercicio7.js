const livro = {
    nome: 'O poder do hábito',
    capitulos: [
        {
            numero: '',
            nome: 'O loop do habito',


        },

        {
            numero: '',
            nome: 'O cérebro ansioso',

        },

        {
            numero: '',
            nome: 'A regra de ouro da mudança de hábitos',

        },

        {
            numero: '',
            nome: 'Hábitos angulares, ou a balda de Paul O`Neill',

        },

        {
            numero: '',
            nome: 'Starbucks e o hábito do sucesso',
        },

        {
            numero: '',
            nome: 'O poder de uma crise',
        },

        {
            numero: '',
            nome: 'Como a target sabe o que você quer antes que você saiba',
        },

        {
            numero: '',
            nome: 'A Saddleback Church e o boicote aos ônibus de Montgomery',
        },

        {
            numero: '',
            nome: 'A neorologia do livre-arbítrio',
        },
    ]
}


let capitulo = 0;
for (capitulo of livro.capitulos) {
    capitulo.numero = capitulo
}

console.log(livro)