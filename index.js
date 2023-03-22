
const form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
    event.preventDefault()

const unorderedList = document.querySelector('ul')
const listText = document.getElementById('list').value

// const paragraph = document.querySelector()

if(listText) {
    const newLi = document.createElement('li')
    newLi.textContent = listText
    unorderedList.append(newLi)
    }

if(listText === '') {
    const newList = document.querySelector('p')
    newList.textContent = 'Error your todo list is empty!'
    unorderedList.append(newList)
    }

})