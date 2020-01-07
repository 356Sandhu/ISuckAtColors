const mono = document.getElementById('mono');
const mono1 = document.getElementById('mono1');
const mono2 = document.getElementById('mono2');
const comp = document.getElementById('comp');
const anag = document.getElementById('anag');
const container = document.getElementById('container');



const focusToggle = (main, box1, box2, n1, n2) =>{
  console.log('clicked');
  if(main.classList.contains('focus')){
    setTimeout(()=>{
      n1.style.display = 'none';
      n2.style.display = 'none';
      box1.style.display = 'flex';
      box2.style.display = 'flex';
      box1.classList.remove('flyOut');
      box2.classList.remove('flyOut');
      box1.classList.add(`flyIn`);
      box2.classList.add('flyIn');
      main.classList.remove('focus')
    }, 1000);
    n1.classList.add('flyOut');
    n2.classList.add('flyOut');
    n1.classList.remove('flyIn');
    n2.classList.remove('flyIn');
  } else{
    setTimeout(()=>{
      box1.style.display = 'none';
      box2.style.display = 'none';
      n1.style.display = 'flex';
      n2.style.display = 'flex';
      n1.classList.add('flyIn');
      n2.classList.add('flyIn');
    }, 1000)
    box1.style.grid
    box1.classList.remove('flyIn');
    box2.classList.remove('flyIn');
    box1.classList.add('flyOut');
    box2.classList.add('flyOut');
    main.classList.add('focus');
  }
}


mono.addEventListener('click', ()=>{
  focusToggle(mono, comp, anag, mono1, mono2); 
});

comp.addEventListener('click', ()=>{
  focusToggle(comp, mono, anag, mono1, mono2); 
});

anag.addEventListener('click', ()=>{
  focusToggle(anag, comp, mono, mono1, mono2); 
});