'use strict';

// Missing a O in DOM
document.addEventListener('DOMContentLoaded', function () {
    console.log('Content Loaded');
    const myList = document.querySelector('#myList');
    // added button variable
    const generateList = document.querySelector('#generateList');

    generateList.addEventListener('click', function () {

        // changed querySelector to querySelectorAll
        const inputItems = document.querySelectorAll('input');
        const listElement = document.createElement('ul');

        inputItems.forEach(function (inputItem) {
            const listItem = document.createElement('li');
            listItem.innerText = inputItem.value;
            // variable is listElement not listElements
            listElement.append(listItem);
        });

        // added to show in DOM
        myList.append(listElement);

    });
});
