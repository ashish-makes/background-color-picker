const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const rgbValue = document.getElementById('rgbValue');

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

function updateColor() {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;
    const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    document.body.style.backgroundColor = color;
    rgbValue.innerHTML = color;
}