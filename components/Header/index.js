// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function newHeader() {
    const hDiv = document.createElement('div');
    const hSpan = document.createElement('span');
    const hH1 = document.createElement('h1');
    const hSpan2 = document.createElement('span');

    hDiv.appendChild(hSpan);
    hDiv.appendChild(hH1);
    hDiv.appendChild(hSpan2);

    hSpan.textContent = 'SMARCH 28, 2019';
    hH1.textContent = 'Lambda Times';
    hSpan2.textContent = '98°';

    hDiv.classList.add('header');
    hSpan.classList.add('date');
    hH1.classList.add('h1');
    hSpan2.classList.add('span');

    return hDiv;
}
    
const hDiv = newHeader();
        

const headerContainer = document.querySelector('.header-container');
// const header = document.querySelector('.header');
headerContainer.appendChild(hDiv);