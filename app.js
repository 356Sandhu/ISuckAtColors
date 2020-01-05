const boxm1 = document.getElementById('m-1');
const boxm2 = document.getElementById('m-2');
const boxm3 = document.getElementById('m-3');
const boxm4 = document.getElementById('m-4');
const boxm5 = document.getElementById('m-5');
const boxc1 = document.getElementById('c-1');
const boxc2 = document.getElementById('c-2');
const boxa1 = document.getElementById('a-1');
const boxa2 = document.getElementById('a-2');
const boxa3 = document.getElementById('a-3');
const cRefresh = document.getElementById('cRefresh');
const aRefresh = document.getElementById('aRefresh');

// Universal Functions

const generateRandomHue = () => Math.round(Math.random() * 360);

const enforceColorWheel = (hue) =>{
  if(hue < 0){hue = 360 + hue;}
  return hue;
};

const generateString = (hue) => `hsl(${hue}, 50%, 50%)`;
const generateShade = (hue, s) => `hsl(${hue}, ${s}%, ${s}%)`;


const generateMonochromaticSet = () =>{
  const hue = generateRandomHue();
  const color = generateString(hue);
  const shadel = generateShade(hue, 30);
  const shademl = generateShade(hue, 40);
  const shademr = generateShade(hue, 60);
  const shader = generateShade(hue, 70);
  return [color, shadel, shademl, shademr, shader];
}


// Complimentary Colors

const generateComplimentaryPair = () =>{
  const pHue = generateRandomHue();
  const sHue = enforceColorWheel(pHue - 180);
  const pColor = generateString(pHue);
  const sColor = generateString(sHue);
  return [pColor, sColor];
};

// Anagulous Colors

const generateAnagulousPair = () =>{
  const pHue = generateRandomHue();
  const sHue = enforceColorWheel(pHue + 30);
  const tHue = enforceColorWheel(pHue - 30);
  const pColor = generateString(pHue);
  const sColor = generateString(sHue);
  const tColor = generateString(tHue);
  return [pColor, sColor, tColor];
}


// Paint Colors

const paintMonochromatic = () => {
  const colors = generateMonochromaticSet();
  boxm1.style.backgroundColor = colors[1];
  boxm2.style.backgroundColor = colors[2];
  boxm3.style.backgroundColor = colors[0];
  boxm4.style.backgroundColor = colors[3];
  boxm5.style.backgroundColor = colors[4];
  paintRGB();
};

const paintComplimentary = () => {
  const colors = generateComplimentaryPair();
  boxc1.style.backgroundColor = colors[0];
  boxc2.style.backgroundColor = colors[1];
  paintRGB();
};

const paintAnagulous = () => {
  const colors = generateAnagulousPair();
  boxa1.style.backgroundColor = colors[0];
  boxa2.style.backgroundColor = colors[1];
  boxa3.style.backgroundColor = colors[2];
  paintRGB();
};

const paintRGB = () => {
  let x = document.querySelectorAll("code");
  x.forEach(function(c){
    c.innerHTML = window.getComputedStyle(c.parentElement).backgroundColor;
  });
}

// Refresh Buttons
mRefresh.addEventListener('click', paintMonochromatic);
cRefresh.addEventListener('click', paintComplimentary);
aRefresh.addEventListener('click', paintAnagulous);

paintMonochromatic();
paintComplimentary();
paintAnagulous();
paintRGB();