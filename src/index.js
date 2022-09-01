import loadNav, { home } from "./load.js"
import menu from "./menu.js"
import contact from "./contact.js"



const content = document.getElementById('content')
const mainDiv = loadNav()
content.appendChild(mainDiv)
const homeLink = document.getElementById('home')
const menuLink = document.getElementById('menu')
const contactLink = document.getElementById('contact')
const navigation = document.getElementById('navigation')
newDiv(home())
homeLink.classList.add('current')

function newDiv(newList) {
    [...mainDiv.children].forEach(child => child !== navigation ? mainDiv.removeChild(child) : null)
    for (let i in newList) {
        mainDiv.appendChild(newList[i])
    }
}

homeLink.addEventListener('click', () => {
    newDiv(home())
    homeLink.classList.add('current')
    menuLink.classList.remove('current')
    contactLink.classList.remove('current')
})

menuLink.addEventListener('click', () => {
    newDiv(menu())
    menuLink.classList.add('current')
    homeLink.classList.remove('current')
    contactLink.classList.remove('current')
})

contactLink.addEventListener('click', () => {
    newDiv(contact())
    contactLink.classList.add('current')
    menuLink.classList.remove('current')
    homeLink.classList.remove('current')
})