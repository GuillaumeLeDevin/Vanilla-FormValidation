const inputUser = document.querySelector('.form-group:nth-child(1) input');
const inputMail = document.querySelector('.form-group:nth-child(2) input');
const inputPwd = document.querySelector('.form-group:nth-child(3) input');
const inputConfirm = document.querySelector('.form-group:nth-child(4) input');
const allImg = document.querySelectorAll('.icon-verif');
const allSpan = document.querySelectorAll('span');
const allLigne = document.querySelectorAll('.ligne div');

//Nickname Validation
inputUser.addEventListener('input', (e) => {
    if(e.target.value.length >= 3) {
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/check.svg";
        allSpan[0].style.display = "none";
    }
    else {
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/error.svg";
        allSpan[0].style.display = "inline";
    }
})

//Email Validation
inputMail.addEventListener('input', (e) => {

    const regexEmail = /\S+@\S+\.\S+/;

    if(e.target.value.search(regexEmail) === 0) {

        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/check.svg";
        allSpan[1].style.display = "none";

    } else if(e.target.value.search(regexEmail) === -1) {
        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/error.svg";
        allSpan[1].style.display = "inline";
    }

})

// Password Validation
let inputValue;

const specialChar = /[^a-zA-Z0-9]/;
const letters = /[a-z]/i;
const numbers = /[0-9]/;

let objValidation = {
    symbole : 0,
    letter : 0,
    number : 0
}

inputPwd.addEventListener('input', (e) => {

    inputValue = e.target.value;

    if(inputValue.search(specialChar) !== -1) {
        objValidation.symbole = 1;
    }
    if(inputValue.search(letters) !== -1) {
        objValidation.letter = 1;
    }
    if(inputValue.search(numbers) !== -1) {
        objValidation.number = 1;
    }

    // console.log(objValidation);

    if(e.inputType = 'deleteContentBackward') {
        if(inputValue.search(specialChar) === -1) {
            objValidation.symbole = 0;
        }
        if(inputValue.search(letters) === -1) {
            objValidation.letter = 0;
        }
        if(inputValue.search(numbers) === -1) {
            objValidation.number = 0;
        }   
    }

    // console.log(objValidation);

    let testAll = 0;
    for(const property in objValidation){
        if(objValidation[property] > 0) {
            testAll++;
        }
    }
    if(testAll < 3) {
        allSpan[2].style.display = 'inline';
        allImg[2].style.display = 'inline';
        allImg[2].src = 'ressources/error.svg';

    } else {
        allSpan[2].style.display = 'none';
        allImg[2].src = 'ressources/check.svg';

    }

    // Password level
    if(inputValue.length <= 6 && inputValue.length > 0){
        allLigne[0].style.display = 'block';
        allLigne[1].style.display = 'none';
        allLigne[2].style.display = 'none';
    }
    else if(inputValue.length > 6 && inputValue.length <= 9){
        allLigne[0].style.display = 'block';
        allLigne[1].style.display = 'block';
        allLigne[2].style.display = 'none';
    }
    else if(inputValue.length > 9){
        allLigne[0].style.display = 'block';
        allLigne[1].style.display = 'block';
        allLigne[2].style.display = 'block';
    }
    else if(inputValue.length === 0){
        allLigne[0].style.display = 'none';
        allLigne[1].style.display = 'none';
        allLigne[2].style.display = 'none';
    }

    //confirmation
    inputConfirm.addEventListener('input', (e) => {

        if(e.target.value !== inputValue) {
            allImg[3].style.display = 'inline';
            allImg[3].src = 'ressources/error.svg';

        }
        else if(e.target.value === inputValue) {
            allImg[3].style.display = 'inline';
            allImg[3].src = 'ressources/check.svg';
    
        } else {
            allImg[3].src = 'ressources/error.svg';
    
        }

    })
    
})
