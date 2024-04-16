const addbutton = document.getElementsByClassName('add-button')[0];
let current_beverage_count = 1

document.getElementsByClassName('remove-beverage')[0].addEventListener('click', (e) => {
    if (current_beverage_count < 2) {
        return;
    }
    else {
        e.parentNode.remove()
        current_beverage_count -= 1;
    }
});



let counter = 2;
addbutton.addEventListener('click', (e) => {
    
    const beverage = document.getElementsByClassName('beverage')[0];
    const clone = beverage.cloneNode(true);
    clone.getElementsByClassName('beverage-count')[0].textContent = `Напиток №${counter}`
    for (const cloneElement of clone.getElementsByClassName('checkbox-field')) {
        cloneElement.className = `checkbox-field-${counter}`
    }
    for (const cloneElement of clone.getElementsByClassName('checkbox-label')) {
        cloneElement.className = `checkbox-label-${counter}`
    }
    for (const cloneElement of clone.getElementsByClassName('field')) {
        cloneElement.className = `field-${counter}`
    }
    for (const cloneElement of clone.getElementsByTagName('input')) {
        cloneElement.name = `${cloneElement.name}-${counter}`
    }
    current_beverage_count += 1;
    counter += 1;
    const form = document.getElementsByTagName('form')[0]
    form.insertBefore(clone, document.getElementsByClassName('123')[0])
})


const modal = document.querySelector('dialog')
const modalBox = document.getElementById('modal-box')
const showModalBtn = document.getElementById('show-modal-btn')
const closeModalBtn = document.getElementById('close-modal-btn')

let isModalOpen = false

showModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.showModal()
    isModalOpen = true
    e.stopPropagation()
})

closeModalBtn.addEventListener('click', () => {
    modal.close()
    isModalOpen = false
})

document.addEventListener('click', (e) => {
    if (isModalOpen && !modalBox.contains(e.target)) {
        modal.close()
    }
})