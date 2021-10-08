const list = document.createElement('ul');
const info = document.createElement('p');

info.textContent = 'A sota hi ha una llista dinàmica. Clica aquí \u{1f4cc} per a afegir un nou item a la llista. Clica un item existent per a canviar el seu text.';

document.body.appendChild(info);
document.body.appendChild(list);

info.onclick = () => {
    const item = document.createElement('li');
    item.textContent = prompt('Quin contingut vols que tingui l\'item?');
    list.appendChild(item);

    item.onclick = (e) => {
        item.textContent = prompt('Introdueix el nou contingut de l\'item');
    }
}
