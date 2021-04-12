import './style.css';
import getProfile from './profile';
import {product} from './catalog';

function draw() {
    const el: HTMLDivElement = document.createElement('div');
    const btn: HTMLButtonElement = document.createElement('button');

    el.innerHTML = product.title;
    el.classList.add('hello');
    
    btn.innerHTML = 'Get Profile';
    btn.onclick = getProfile;

    el.appendChild(btn);

    return el;
}

document.body.appendChild(draw());