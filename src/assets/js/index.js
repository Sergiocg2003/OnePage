let botonHamburguesa = document.getElementById('botonHamburguesa');
let menu = document.querySelector('.menuDesplegable');
let equis = document.querySelector('.cerrar');
let opcion = document.querySelector('.menuDesplegable__opcion');
let opcion1 = document.querySelector('.menuDesplegable__opcion1');
let opcion2 = document.querySelector('.menuDesplegable__opcion2');

const li = document.querySelectorAll('.Principal__seccion__contenedor__ul__li')
const bloque = document.querySelectorAll('.Principal__seccion__contenedor__subcontenedor__bloque')

const titulo = document.querySelectorAll('.Principal__seccion__acordeon__bloque__titulo')
const contenido = document.querySelectorAll('.Principal__seccion__acordeon__bloque__contenido')

const grande = document.querySelector('.Principal__seccion__carrusel__grande')
const punto = document.querySelectorAll('.Principal__seccion__carrusel__puntos__punto')

opcion.addEventListener('click', cerrarMenu);
opcion1.addEventListener('click', cerrarMenu);
opcion2.addEventListener('click', cerrarMenu);
equis.addEventListener('click', cerrarMenu);
botonHamburguesa.addEventListener('click', desplegarMenu);

li.forEach( ( cadaLi, i ) =>{
    li[i].addEventListener('click', ()=>{

        li.forEach( (cadaLi, i ) =>{
            li[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
        })

        li[i].classList.add('activo')
        bloque[i].classList.add('activo')
    })
})

titulo.forEach( ( cadaTitulo, i ) =>{
    titulo[i].addEventListener('click', ()=>{

        contenido.forEach( (cadaTitulo, i ) =>{
            contenido[i].classList.remove('activo')
        })

        contenido[i].classList.add('activo')
    })
})

punto.forEach( ( cadaPunto, i ) =>{
    punto[i].addEventListener('click', ()=>{

        let posicion = i
        let operacion = posicion * -33.33;

        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach( (cadaPunto, i ) =>{
            punto[i].classList.remove('activo')
        })

        punto[i].classList.add('activo')

    })
})

function desplegarMenu(){
    menu.style.setProperty('display', 'flex');
    equis.style.setProperty('display', 'flex');
    opcion.style.setProperty('display', 'flex');
    opcion1.style.setProperty('display', 'flex');
    opcion2.style.setProperty('display', 'flex');
    window.setTimeout(function(){menu.style.right=0}, 100)
}

function cerrarMenu(){
    window.setTimeout(function(){menu.style.setProperty('display', 'none')}, 100)
    equis.style.setProperty('display', 'none');
    opcion.style.setProperty('display', 'none');
    opcion1.style.setProperty('display', 'none');
    opcion2.style.setProperty('display', 'none');
    menu.style.right = '-100%';
}