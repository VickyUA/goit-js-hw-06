const categoryAll = document.querySelector('#categories');

console.log(`Number of categories: ${categoryAll.children.length}`);

const category = document.querySelectorAll('.item');

category.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.children.length}`);
}
);
