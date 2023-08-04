const usuario = [
    {
        nome: "Joao",
        idade: 25,
        maior_idade: ''
    },

    {
        nome: 'Ana',
        idade: 18,
        maior_idade: ''
    },

    {
        nome: 'Beatriz',
        idade: 15,
        maior_idade: ''
    },

    {
        nome: 'Carlos',
        idade: 16,
        maior_idade: ''
    },

    {
        nome: 'Antonio',
        idade: 32,
        maior_idade: ''
    }

]
let i = 0;
for (i; i < usuario.length; i++) {
    usuario[i].maior_idade = usuario[i].idade > 17 ? true : false

}
console.log(usuario)



