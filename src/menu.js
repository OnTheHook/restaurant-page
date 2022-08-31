import Items from './items.csv';

function menu() {
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

    const mainDiv = document.createElement('div')
    mainDiv.id = 'main'

    const nav = document.createElement('nav')
    const navList = document.createElement('ul')
    const linkOne = document.createElement('li')
    const linkTwo = document.createElement('li')
    const linkThree = document.createElement('li')

    linkOne.innerHTML = '<a href="#">HOME</a>'
    linkTwo.innerHTML = '<a href="#">MENU</a>'
    linkThree.innerHTML = '<a href="#">CONTACT</a>'

    navList.appendChild(linkOne)
    navList.appendChild(linkTwo)
    navList.appendChild(linkThree)

    nav.appendChild(navList)

    mainDiv.appendChild(nav)

    for(let i = 1; i < Items.length; i++) {
        let newDiv
        newDiv = createItemDiv(...Items[i])
        mainDiv.appendChild(newDiv)
    }

    return mainDiv
}

export default menu