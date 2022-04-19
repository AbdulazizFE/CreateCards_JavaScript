//  Create the container
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';


// Create array of name and age

let names = ['Abdulaziz', 'Abood', 'Abbe', 'Aboodi']
let ages = ['18 years old', '20 years old', '22 years old', '24 years old']

function element(name, ages) {
    //crate element
    let card = document.createElement('div');
    let title = document.createElement('h1');
    let age = document.createElement('p');
    let img = document.createElement('img');


    // Create content 
    let head = document.createTextNode(name);
    let ageContent = document.createTextNode(ages);
    img.src = '2.jpg';
    title.appendChild(head);
    age.appendChild(ageContent);



    // Css
    card.style.width = '200px';
    card.style.background = '#444';
    card.style.color = '#fff';
    card.style.padding = '10px';
    card.style.margin = '2px';


    card.style.cssText = `

width: 200px;
background: black;
color: aliceblue;
padding: 10px;
margin: 2px;
display: inline-block;
border-radius: 10px;

`




    img.style.cssText = `
    width : 100%;
    border-radius: 10px;
    
    `


    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    container.appendChild(card);

}

for (let i = 0; i < 4; i++) {
    element(names[i], ages[i]);
}