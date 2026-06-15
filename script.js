
const produtos = [
    {
        nome: "Caixa de Bombons",
        preco: 34.99,
        categoria: "Bombons"
    },
    {
        nome: "Trufas Artesanais",
        preco: 19.99,
        categoria: "Trufas"
    },
    {
        nome: "Ovo de Páscoa",
        preco: 59.99,
        categoria: "Páscoa"
    },
    {
        nome: "Chocolate Zero Açúcar",
        preco: 24.99,
        categoria: "Diet"
    },
    {
        nome: "Barra Gourmet",
        preco: 18.50,
        categoria: "Barras"
    }
];


function criarCard(produto) {
    return `
        <div class="card">
            <h3>${produto.nome}</h3>
            <p><strong>Preço:</strong> R$ ${produto.preco}</p>
            <p><strong>Categoria:</strong> ${produto.categoria}</p>
        </div>
    `;
}

const container = document.getElementById("container-produtos");

for (let i = 0; i < produtos.length; i++) {
    container.innerHTML += criarCard(produtos[i]);
}


const botao = document.getElementById("exportar");
const saida = document.getElementById("saidaJson");

botao.addEventListener("click", function () {
    const json = JSON.stringify(produtos, null, 2);

    console.log(json);
    saida.textContent = json;
});