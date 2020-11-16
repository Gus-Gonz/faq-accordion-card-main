const liElement = document.querySelectorAll('li');

let currentElementDisplayed;

function setDefaultStyle () {
    currentElementDisplayed.querySelector('h4').className = '';
    currentElementDisplayed.querySelector('p').className = 'hiden';
    currentElementDisplayed.querySelector('span').className ='arrow-image';
}

function setDisplayedClass(target) {
    target.querySelector('h4').classList.toggle('bold-font');
    target.querySelector('p').classList.toggle('hiden');
    target.querySelector('span').classList.toggle('rotated');
}


liElement.forEach(element => {
    element.addEventListener('click', (event) => {
        if (currentElementDisplayed == event.currentTarget){
            setDisplayedClass(event.currentTarget);
        }else{
            try {
                setDefaultStyle()
                setDisplayedClass(event.currentTarget)
            }catch {
                setDisplayedClass(event.currentTarget);
            }
        }
        currentElementDisplayed = event.currentTarget;
    });
}); 

