const itens = [];

const HandleCreate = () => {
    const itemName = document.getElementById("itemName").value
    const itemCode = document.getElementById("itemCode").value
    const dueDate = document.getElementById("dueDate").value
    const launchDay = document.getElementById("launchDay").value

    itens.push({
        itemName,
        itemCode,
        dueDate,
        launchDay,
    })
    console.log(itens)
    
}