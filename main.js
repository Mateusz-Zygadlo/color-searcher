const root = document.querySelector('.root');

const inputDiv = document.querySelector('.inputDiv');

const input = document.createElement('input');
input.type = 'text';

const valueContent = document.createElement('div');

inputDiv.appendChild(input);
inputDiv.appendChild(valueContent);


const colorInDiv = (item) => {
    root.textContent = '';

    for(let i = 0; i < item.length; i++){
        const color = document.createElement('div');
        color.style.backgroundColor = item[i];
        color.classList.add('card');

        root.appendChild(color);
    }
}


const colors = ['blue', 'lightblue', 'green', 'orange', 'yellow', 'purple', 'gray', 'red', 'violet', 'brown', 'black', 'pink', 'gold', 'silver'];
const colorsFinal = [];


input.addEventListener('input', () => {
    const value = input.value.toLowerCase();
    colorsFinal.length = 0;
    valueContent.textContent = value;

    for(let i = 0; i < colors.length; i++){
        if(colors[i].slice(0, value.length) == value){
            colorsFinal.push(colors[i]);
            colorInDiv(colorsFinal);
        }else{
            colorInDiv(colorsFinal);
        }
    }
})

colorInDiv(colors);