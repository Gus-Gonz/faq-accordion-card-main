const liElement = document.querySelectorAll('li');

let currentElementDisplayed ;

function setDefaultClass () {
    liElement.forEach(element =>{
        element.querySelector('h4').className = '';
        element.querySelector('p').className = 'hiden';
        element.querySelector('span').className ='arrow-image';
    });
}

function setNewClass(target) {
    target.querySelector('h4').classList.toggle('bold-font');
    target.querySelector('p').classList.toggle('hiden');
    target.querySelector('span').classList.toggle('rotated');
}


liElement.forEach(element => {
    element.addEventListener('click', (event) => {
        if (currentElementDisplayed == event.currentTarget){
            setNewClass(event.currentTarget)
        }else {
            setDefaultClass();
            setNewClass(event.currentTarget)
        }
        currentElementDisplayed = event.currentTarget
    });
}); 

