/* alert('Toto pochází z externího souboru'); */
// var nadpis - starší deklarace proměnné v JS
// proměnná v nových verzích JS
let nadpis = document.getElementById('nadpis');

nadpis.addEventListener('click',function(){
    nadpis.innerHTML = 'Ahoj <i>Karloo</i>!';
nadpis.style.color = 'blue';
nadpis.style.fontFamily = 'serif';
nadpis.classList.add('text-right');
nadpis.classList.add('text-info');
nadpis.classList.remove('text-uppercase');
});


let zasady = document.getElementById('zasady');

zasady.addEventListener('click',function(){
    zasady.innerHTML = 'hlavní zásada';
    zasady.style.color = 'green';
    zasady.style.fontFamily = 'serif';
    zasady.classList.add('text-right');
});

let img = document.querySelector('img');

img.addEventListener('mouseover', function(){
    img.src= 'manka.jpg';
})

img.addEventListener('mouseleave', function(){
    img.src= 'rumcajs.jpg';
})