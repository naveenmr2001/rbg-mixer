function rangeSlider(value)
{
  document.getElementById("rangeValue").innerHTML = value;
}

function rangeSlider2(value)
{
  document.getElementById("rangeValue-2").innerHTML = value;
}

function rangeSlider3(value)
{
  document.getElementById("rangeValue-3").innerHTML = value;
}

function rangeSlider4(value)
{
  document.getElementById("rangeValue-4").innerHTML = value;
}


const redSlider = document.querySelector('.range');
const greenSlider = document.querySelector('.range-2');
const blueSlider = document.querySelector('.range-3');
const colorPreview = document.querySelector('.main-container');
const rgba = document.querySelector('.rgba-value');
const header = document.querySelector('.header');
const hex = document.querySelector('.hex-value');

console.log(redSlider)
console.log(greenSlider)
console.log(blueSlider)
console.log(colorPreview)

window.addEventListener("load", (event) => {
    updateColor();
  });

function rgbToHex(rgb) {
  var rgbValues = rgb.substring(4, rgb.length - 1).replace(/ /g, '').split(',');
  
  var hex = '#';
  for (var i = 0; i < rgbValues.length; i++) {
    var hexValue = parseInt(rgbValues[i]).toString(16);
    hex += hexValue.length === 1 ? "0" + hexValue : hexValue;
  }
  
  return hex;
}
  

function updateColor() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;

  const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  console.log(color)
  colorPreview.style.backgroundColor = color;
  rgba.innerHTML = "decimal: "+`rbg(${redValue}, ${greenValue}, ${blueValue})`;
  hex.innerHTML = "hex: "+rgbToHex(`rbg(${redValue}, ${greenValue}, ${blueValue})`)
  console.log(hex)
  rgba.style.color = color;
  header.style.color = color;
  hex.style.color = color;
}

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);