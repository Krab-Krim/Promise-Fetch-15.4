const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const photoIds = [60, 12, 55];
let promises1 = [];
const dataContainer = document.querySelector('#data-container');

const createTodoElement = (text, url) => {
    const todoElem = document.createElement('li'),
        todoElementImg = document.createElement('img'),
        todoTitle = document.createElement('h3');

    todoElem.className = 'photo-item';
    todoElementImg.className = 'photo-item__image';
    todoElementImg.src = url;
    todoTitle.className = 'photo-item__title';
    todoTitle.textContent = text;

    todoElem.append(todoElementImg, todoTitle);

    dataContainer.append(todoElem);
}

const getPhotoById = (id) => {

    return fetch(PHOTOS_URL + `/${id}`, {
        method: 'GET',
    })
        .then(response => response.json())
        .catch((err) => console.log(err))
}

for (let i = 0; i < photoIds.length; i++) {
    promises1.push(getPhotoById(photoIds[i]));
}


Promise.race(promises1)
    .then(response => response)
    .then(photo => {
        createTodoElement(photo.title, photo.url)
    })
    .catch(err => err)



