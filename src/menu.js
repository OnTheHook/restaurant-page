import Items from './items.csv';

function menu() {
    let items = []
    function createItemDiv(name, imgSrc, price) {
        const itemDiv = document.createElement('div')
        const itemName = document.createElement('h2')
        const itemPicture = document.createElement('img')
        const itemPrice = document.createElement('p')

        itemName.textContent = name
        itemPicture.src = imgSrc
        itemPrice.textContent = price

        itemDiv.appendChild(itemName)
        itemDiv.appendChild(itemPicture)
        itemDiv.appendChild(itemPrice)
        
        return itemDiv
    }


    for(let i = 1; i < Items.length; i++) {
        let newDiv
        newDiv = createItemDiv(...Items[i])
        items.push(newDiv)
    }

    return items
}

export default menu