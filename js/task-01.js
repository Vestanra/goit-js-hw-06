const ulEl = document.querySelector('#categories');
console.log('Number of categories:', [...ulEl.children].length);



const liEl = document.querySelectorAll('.item');
[...liEl].forEach(element => {
    console.log('Category: ', element.firstElementChild.textContent);
    console.log('Elements: ', element.lastElementChild.children.length);
});


