function loadNav() {
    const mainDiv = document.createElement('div')
    mainDiv.id = 'main'

    const nav = document.createElement('nav')
    const navList = document.createElement('ul')
    const linkOne = document.createElement('li')
    const linkTwo = document.createElement('li')
    const linkThree = document.createElement('li')

    nav.id = 'navigation'

    linkOne.textContent = 'HOME'
    linkTwo.textContent = 'MENU'
    linkThree.textContent = 'CONTACT'

    linkOne.id = 'home'
    linkTwo.id = 'menu'
    linkThree.id = 'contact'

    navList.appendChild(linkOne)
    navList.appendChild(linkTwo)
    navList.appendChild(linkThree)

    nav.appendChild(navList)

    mainDiv.appendChild(nav)

    return mainDiv
}

function home() {
    
    const logoDiv = document.createElement('div')
    const logo = document.createElement('img')
    const heading = document.createElement('h1')
    const para = document.createElement('p')

    logo.src = '../src/logo.png'
    logoDiv.classList.add('logo')
    heading.textContent = 'Come and enjoy the great food and company!'
    para.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus vehicula varius. Sed blandit, ipsum egestas porta semper, justo magna lacinia nibh, sed feugiat velit nisl sit amet ligula. Nullam orci nunc, euismod eget justo eu, congue interdum odio. Quisque massa mi, aliquam sagittis ultricies eget, varius vitae ex. Proin accumsan lorem leo, sed lacinia sem placerat ut.'

    const buttonDiv = document.createElement('div')
    const button = document.createElement('button')

    buttonDiv.classList.add('button')
    button.textContent = 'RESERVE A TABLE'    

    logoDiv.appendChild(logo)
    logoDiv.appendChild(heading)
    logoDiv.appendChild(para)

    buttonDiv.appendChild(button)

    return [logoDiv, buttonDiv]

}


export default loadNav
export {
    home
}