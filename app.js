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
const mSaturation = document.getElementById('mSaturation');
const mLightness = document.getElementById('mLightness');
const cSaturation = document.getElementById('cSaturation');
const cLightness = document.getElementById('cLightness');
const aSaturation = document.getElementById('aSaturation');
const aLightness = document.getElementById('aLightness');

// Universal Functions

const generateRandomHue = () => Math.round(Math.random() * 360);

const enforceColorWheel = (hue) =>{
  if(hue < 0){hue = 360 + hue;}
  return hue;
};

const generateString = (hue) => `hsl(${hue}, 50%, 50%)`;
const generateShade = (hue, s, l) => `hsl(${hue}, ${s}%, ${l}%)`;


const generateMonochromaticSet = (s, l) =>{
  const hue = generateRandomHue();
  const color = generateShade(hue, s, l);
  const shadel = generateShade(hue, s, l-20);
  const shademl = generateShade(hue, s, l-10);
  const shademr = generateShade(hue, s, eval(l) + eval(10));
  const shader = generateShade(hue, s,  eval(l) + eval(20));
  return [color, shadel, shademl, shademr, shader];
}


// Complimentary Colors

const generateComplimentaryPair = (s, l) =>{
  const pHue = generateRandomHue();
  const sHue = enforceColorWheel(pHue - 180);
  const pColor = generateShade(pHue, s, l);
  const sColor = generateShade(sHue, s, l);
  return [pColor, sColor];
};

// Anagulous Colors

const generateAnagulousPair = (s, l) =>{
  const pHue = generateRandomHue();
  const sHue = enforceColorWheel(pHue + 30);
  const tHue = enforceColorWheel(pHue - 30);
  const pColor = generateShade(pHue, s, l);
  const sColor = generateShade(sHue, s, l);
  const tColor = generateShade(tHue, s, l);
  return [pColor, sColor, tColor];
}


// Paint Functions

const paintMonochromatic = (s, l) => {
  const colors = generateMonochromaticSet(s, l);
  boxm1.style.backgroundColor = colors[1];
  boxm2.style.backgroundColor = colors[2];
  boxm3.style.backgroundColor = colors[0];
  boxm4.style.backgroundColor = colors[3];
  boxm5.style.backgroundColor = colors[4];
  paintRGB();
};

const paintComplimentary = (s, l) => {
  const colors = generateComplimentaryPair(s, l);
  boxc1.style.backgroundColor = colors[0];
  boxc2.style.backgroundColor = colors[1];
  paintRGB();
};

const paintAnagulous = (s, l) => {
  const colors = generateAnagulousPair(s, l);
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
mRefresh.addEventListener('click', () => {
  paintMonochromatic(mSaturation.value, mLightness.value);
});
cRefresh.addEventListener('click', () => {
  paintComplimentary(cSaturation.value, cLightness.value);
});
aRefresh.addEventListener('click', () => {
  paintAnagulous(aSaturation.value, aLightness.value);
});


paintMonochromatic(50, 50);
paintComplimentary(100, 70);
paintAnagulous(100, 50);