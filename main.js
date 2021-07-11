//Color code is hexadecimal

const btn = document.querySelector('.btn');
const color_code = document.querySelector('#color-code');

const possibleVals = ['A', 'B', 'C', 'D', 'E', 'F', 
            0,1,2,3,4,5,6];

function getRandomFromPossibleVals(){
    return Math.floor(Math.random() * possibleVals.length);
}

btn.addEventListener('click', ()=>{
    let hexCode = '#';

    for(let i=0;i<6;++i){
        hexCode+=possibleVals[getRandomFromPossibleVals()];
    }
    document.body.style.backgroundColor = hexCode;
    color_code.textContent = hexCode;
})
