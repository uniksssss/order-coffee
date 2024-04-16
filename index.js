const addbutton = document.getElementsByClassName('add-button')[0];
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
    counter += 1;
    const form = document.getElementsByTagName('form')[0]
    form.insertBefore(clone, document.getElementsByClassName('123')[0])
})
