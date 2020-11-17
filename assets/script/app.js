const liElements = document.querySelectorAll('li');

let currentElementDisplayed;

function setDefaultStyle () {
    currentElementDisplayed.querySelector('h4').className = '';
    currentElementDisplayed.querySelector('p').className = 'hidden';
    currentElementDisplayed.querySelector('span').className ='arrow-image';
}

function setDisplayedClass(target) {
    target.querySelector('h4').classList.toggle('bold-font');
    target.querySelector('p').classList.toggle('hidden');
    target.querySelector('span').classList.toggle('rotated');
}

liElements.forEach(element => {
    element.addEventListener('click', (event) => {
        if (currentElementDisplayed == event.currentTarget){
            setDisplayedClass(event.currentTarget);
        }else if (currentElementDisplayed){
            setDefaultStyle();
            setDisplayedClass(event.currentTarget);
        }else{
            setDisplayedClass(event.currentTarget);
        }
        currentElementDisplayed = event.currentTarget;
    });
}); 

