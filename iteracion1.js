//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
//debugger
const listCountries = document.createElement('ul');
listCountries.innerText = 'Lista de países';
document.body.appendChild(listCountries);
console.log(listCountries);

for (let i = 0; i < countries.length; i++) {
    listCountries.innerHTML += '<li> Pais:' + countries[i] + '</li>';
}

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
//debugger
document.querySelector('.fn-remove-me').remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const listCars = document.createElement('ul');
listCars.innerText = 'Lista de coches';
document.querySelector('[data-function="printHere"]').appendChild(listCars);
console.log(listCars);

for (let i = 0; i < cars.length; i++) {
    listCars.innerHTML += '<li>Coche: ' + cars[i] + '</li>';
}

//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const images = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const listImages = document.createElement('div');
listImages.innerText = 'Lista de imágenes';
listImages.classList.add('imagesContainer');
document.body.appendChild(listImages);
console.log(listImages);
//let divImage;
//let thisButton;

let deleteButton = document.querySelector('.remove-image');
let removeFunction = (event) => {
    debugger
    let target = event.currentTarget;
    let id = target.id;
    let lastString = id.slice(-1);
    let deleteImage = document.getElementById('id-image' + lastString);
    deteleImage.remove();
    console.log('item deleted');
};

for (let i = 0, j = images.length; i < j; i++) {
    divImage = document.createElement('div');
    divImage.id = 'id-image' + i;
    divImage.classList.add('imageDiv');
    listImages.appendChild(divImage);
    divImage.innerHTML += '<h4>' + images[i].title + '</h4>';
    let imgElement = document.createElement('img');
    imgElement.src = images[i].imgUrl;
    divImage.appendChild(imgElement);
    divImage.innerHTML += '<p>Imagen nº: ' + images[i] + ' - Fuente: ' + images[i].imgUrl + '</p>';
    //Creación del botón
    thisButton = document.createElement('button');
    thisButton.innerHTML = 'Eliminar ésta imagen';
    thisButton.id = 'id-button' + i;
    thisButton.classList.add('remove-image');
    divImage.appendChild(thisButton);
    thisButton.addEventListener("click", removeFunction);
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const finalButton = document.createElement('button');
finalButton.innerHTML = 'Eliminar última imagen';
finalButton.classList.add('remove-btn');
document.body.appendChild(finalButton);
console.log(finalButton);

let listImagesToRemove = document.querySelector('.imagesContainer').getElementsByTagName('div');

let removeButton = document.querySelector(".remove-btn");

let deleteFunction = (event) => {
    let lastItem = listImagesToRemove[listImagesToRemove.length - 1];
    lastItem.parentNode.removeChild(lastItem);
}

removeButton.addEventListener("click", deleteFunction);


//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

//* NECESITO CREAR ESTO EN BUCLE. *//

//delete this image button//
/*
const thisButton = document.createElement('button');
thisButton.innerHTML = 'Eliminar ésta imagen';
thisButton.classList.add('remove-image');
const imageBox = document.querySelector('.imageDiv');
imageBox.appendChild(thisButton);
/*
debugger

for (i = 0; i < imageBox.length; i++) {
    const thisButton = document.createElement('button');
    thisButton.innerHTML = 'Eliminar ésta imagen';
    thisButton.classList.add('remove-image');
    const imageBox = document.querySelector('.imageDiv');
    imageBox.appendChild(thisButton);
}
*/
//delete Event//

//let deleteButton = document.querySelector('.remove-image');
let deteleImage = document.querySelector('.imageDiv');
/*
let removeFunction = (event) => {
    deteleImage.remove();
}

deleteButton.addEventListener("click", removeFunction);
*/
