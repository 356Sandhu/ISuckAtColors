const box1 = document.getElementById('c-1');
const box2 = document.getElementById('c-2');

generateRandomH = () =>{
  const x = Math.round(Math.random() * 360);
  return x;
};

primaryColor = generateRandomH();
secondaryColor = primaryColor - 180;
if(secondaryColor < 0){
  secondaryColor = 360 + secondaryColor;
}

box1.style.backgroundColor = `hsl(${primaryColor}, 50%, 50%)`;
box2.style.backgroundColor = `hsl(${secondaryColor}, 50%, 50%)`;
box1.style.color = `hsl(${secondaryColor}, 50%, 50%)`;
box2.style.color = `hsl(${primaryColor}, 50%, 50%)`;
