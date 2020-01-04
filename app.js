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

const generateString = (hue) => `hsl(${hue}, 60%, 50%)`;


// Complimentary Colors

const generateComplimentaryHue = pHue => enforceColorWheel(pHue - 180);

const generateComplimentaryPair = () =>{
  const pHue = generateRandomHue();
  const sHue = generateComplimentaryHue(pHue);
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


const paintComplimentary = () => {
  const colors = generateComplimentaryPair();
  boxc1.style.backgroundColor = colors[0];
  boxc2.style.backgroundColor = colors[1];
};

const paintAnagulous = () => {
  const colors = generateAnagulousPair();
  boxa1.style.backgroundColor = colors[0];
  boxa2.style.backgroundColor = colors[1];
  boxa3.style.backgroundColor = colors[2];
};

cRefresh.addEventListener('click', paintComplimentary);
aRefresh.addEventListener('click', paintAnagulous);

paintComplimentary();
paintAnagulous();