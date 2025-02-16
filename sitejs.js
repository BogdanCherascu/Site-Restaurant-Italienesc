document.addEventListener('DOMContentLoaded', () => {
    const butonAfisare = document.getElementById('afiseaza-valori');
    const valoriNutritionale = document.querySelectorAll('.nutrition');

    valoriNutritionale.forEach(valoare => {
        valoare.style.color = '#a1a1a1'; 
    });

    // 3. Adăugăm funcționalitatea de toggle pentru buton
    butonAfisare.addEventListener('click', () => {
        // Verificăm dacă valorile nutriționale sunt vizibile
        let suntVizibile = false;

        valoriNutritionale.forEach(valoare => {
            if (valoare.style.display === 'block') {
                suntVizibile = true; 
            }
        });

        if (suntVizibile) {
            valoriNutritionale.forEach(valoare => {
                valoare.style.display = 'none'; 
            });
            butonAfisare.textContent = 'Afișează valori nutriționale'; 
        } else {
            valoriNutritionale.forEach(valoare => {
                valoare.style.display = 'block'; 
            });
            butonAfisare.textContent = 'Ascunde valori nutriționale'; 
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const cronometru = document.createElement('div');
    cronometru.id = 'cronometru'; 
    document.body.appendChild(cronometru); 

    function actualizeazaOra() {
        const acum = new Date(); 
        const oraCurenta = acum.toLocaleTimeString('ro-RO', { hour12: false }); 
        cronometru.textContent = `Ora curentă: ${oraCurenta}`; 

        setTimeout(actualizeazaOra, 1000);
    }

    actualizeazaOra();
});



document.addEventListener('DOMContentLoaded', () => {
    const inputCautare = document.getElementById('cautare-meniu');
    const preparate = document.querySelectorAll('.dish'); 

    inputCautare.addEventListener('input', (e) => {
        const textCautat = e.target.value.toLowerCase(); 

        preparate.forEach(dish => {
            const numePreparat = dish.querySelector('h3').textContent.toLowerCase();

            if (numePreparat.includes(textCautat)) {
                dish.style.display = 'block';
            } else {
                dish.style.display = 'none';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const pizzaImage = document.getElementById('pizza-image'); 
    const images = ['pizza1.png', 'pizza2.png', 'pizza3.png', 'pizza4.png'];

    function schimbaImagineAleatoriu() {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const pizzaImage = document.getElementById('pizza-image');
        if (pizzaImage) {
            pizzaImage.src = 'pizza1.png';
}

        pizzaImage.src = randomImage;
    }

    schimbaImagineAleatoriu();

    setInterval(schimbaImagineAleatoriu, 3000);
});


document.addEventListener('DOMContentLoaded', () => {
    const butoaneFavorite = document.querySelectorAll('.adauga-favorite');
    const listaFavorite = document.getElementById('lista-favorite');

    function incarcaFavorite() {
        const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
        listaFavorite.innerHTML = '';

        favorite.forEach((dish, index) => {
            const li = document.createElement('li');
            li.textContent = dish;

            const butonSterge = document.createElement('button');
            butonSterge.textContent = 'Șterge';
            butonSterge.classList.add('sterge-favorite');
            butonSterge.setAttribute('data-index', index);


            li.appendChild(butonSterge);
            listaFavorite.appendChild(li);
        });

        const butoaneSterge = document.querySelectorAll('.sterge-favorite');
        butoaneSterge.forEach((buton) => {
            buton.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                stergeDinFavorite(index);
            });
        });
    }

    function stergeDinFavorite(index) {
        let favorite = JSON.parse(localStorage.getItem('favorite')) || [];
        favorite.splice(index, 1); 
        localStorage.setItem('favorite', JSON.stringify(favorite)); 
        incarcaFavorite(); 
    }

    butoaneFavorite.forEach((buton) => {
        buton.addEventListener('click', (e) => {
            const numePreparat = e.target.closest('.dish').getAttribute('data-nume');

            const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
            if (!favorite.includes(numePreparat)) {
                favorite.push(numePreparat);
                localStorage.setItem('favorite', JSON.stringify(favorite));
                incarcaFavorite(); 
            } else {
                alert(`${numePreparat} este deja într-o listă de favorite!`);
            }
        });
    });

    incarcaFavorite();
});