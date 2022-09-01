function contact() {

    const contactDiv = document.createElement('div')
    const contact = document.createElement('h2')
    const phoneNumber = document.createElement('p')
    const hours = document.createElement('h2')
    const hoursParaOne = document.createElement('p')
    const hoursParaTwo = document.createElement('p')

    contactDiv.id = 'contact'
    
    contact.textContent = 'Contact'
    phoneNumber.textContent = 'TEL: 555-123-4567'
    hours.textContent = 'Hours'
    hoursParaOne.textContent = 'Mon - Sat: 11:00AM - 12:00AM' 
    hoursParaTwo.textContent= 'Sun: Closed'  

    contactDiv.appendChild(contact)
    contactDiv.appendChild(phoneNumber)
    contactDiv.appendChild(hours)
    contactDiv.appendChild(hoursParaOne)
    contactDiv.appendChild(hoursParaTwo)

    return [contactDiv]
}

export default contact