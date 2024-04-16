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


document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('[href="#close"]').addEventListener('click',function(){
      document.body.style.overflow = 'visible';
      document.querySelector('#openModal').style.marginLeft = '0px';
    });
    document.getElementsByClassName('submit-button')[0].addEventListener('click', (e) => {
        e.preventDefault();
        document.body.style.overflow = 'hidden';
      });
  });