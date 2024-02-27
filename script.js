const randomColorGenerator = () => {
    const randomNumber = () => Math.floor(Math.random() * 256);
    const red = randomNumber();
    const blue = randomNumber();
    const green = randomNumber();

    return `rgb(${red}, ${blue}, ${green})`

}

const btn = document.querySelector("button");
const main = document.querySelector(".main");
const input = document.querySelector("input");



btn.addEventListener('click', () => {
    const color = randomColorGenerator();
    input.value = color;
    main.style.backgroundColor = color;

});
  