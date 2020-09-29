
let nadpis = document.getElementById('nadpis');

nadpis.addEventListener('click',function(){
    nadpis.innerHTML = 'Nejlepší klub  &#128151;';
nadpis.style.color = 'red';
nadpis.style.fontFamily = 'serif';
nadpis.classList.add('text-right');
nadpis.classList.add('text-info');
nadpis.classList.remove('text-uppercase');
});


let stadion = document.getElementById('stadion');
stadion.addEventListener('click',function(){
    stadion.innerHTML = 'Sídlo katalánského klubu';
stadion.style.color = 'red';
stadion.style.fontFamily = 'serif';
});


let stad = document.getElementById('stad');
stad.addEventListener('click', function(){
    stad.src= 'stadion.jpg';
})
stad.addEventListener('click', function(){
    stad.src= 'stad.jpg';
})


let dresy = document.getElementById('dresy');
dresy.addEventListener('click', function(){
    dresy.src= 'domaci.jpg';
})

dresy.addEventListener('click', function(){
    dresy.src= 'venkovni.jpg';
})