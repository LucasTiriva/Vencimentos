
var produto = new produto();

class produto {
    constructor() {
        this.arrayProdutos = [];
    }

    save() {
        let produto = this.lerDados();
        console.log(produto);
    }

    lerDados() {
        let produto = {        
           produto.nomeProduto = document.getElementById("itemName").value;
           produto.codigo = document.getElementById("itemCode").value;
           produto.vencimento = document.getElementById("dueDate").value;
           produto.lancamento = document.getElementById("launchDay").value;

            return produto;
        }
    }

    clear() {

    }
}