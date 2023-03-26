

const form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
    event.preventDefault()

const unorderedList = document.querySelector('ul')
const listText = document.getElementById('list').value

if(listText) {
    const list = document.createElement('li')
    list.textContent = listText
    unorderedList.append(list)
    }
if(listText === '') {
    const newList = document.querySelector('p')
    newList.textContent = "Error. Todo cannot be empty"
    unorderedList.append(newList)
    }

})