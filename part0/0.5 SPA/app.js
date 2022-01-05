const divcontainer = document.querySelector('#container');
const textinput = document.querySelector('#textinput');
const submitbutton = document.querySelector('#submitbutton');
var counter = 0;

const ul = document.createElement('ul');
ul.setAttribute('id', 'ul');
divcontainer.appendChild(ul);

submitbutton.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(textinput.value)
    counter += 1;

    const li = document.createElement('li');
    li.setAttribute('id', `li${counter}`);
    li.innerHTML = textinput.value;
    ul.appendChild(li);
})

