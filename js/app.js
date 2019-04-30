const pratos = [
    {name: 'Apéritif', price: '40.36', url: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Amuse-Bouche', price: '40.38', url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Potage', price: '30.51', url: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Oeuf', price: '30.62', url: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Coquilles', price: '20.40', url: 'https://images.unsplash.com/photo-1501262139015-998ac3d1e0be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Entrée', price: '20.61', url: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Sorbet', price: '20.62', url: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Fromage', price: '20.46', url: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Trou Normand', price: '20.69', url: 'https://images.unsplash.com/photo-1490717064594-3bd2c4081693?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Buffet Froid', price: '20.40', url: 'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Rôti', price: '20.36', url: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Relevés', price: '20.10', url: 'https://images.unsplash.com/photo-1545667303-24dec1a85992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Savoureux', price: '10.98', url: 'https://images.unsplash.com/photo-1491739481003-2991327b66e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Kaiseki', price: '30.27', url: 'https://images.unsplash.com/photo-1445979323117-80453f573b71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Sakizuke', price: '20.50', url: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Hassun', price: '20.47', url: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Takiawase', price: '20.69', url: 'https://images.unsplash.com/photo-1509482560494-4126f8225994?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Mukozuke', price: '30.49', url: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Futamono', price: '20.18', url: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Yakimono', price: '20.25', url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Su-zakana', price: '20.80', url: 'https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Shiizakana', price: '20.45', url: 'https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Naka-choko', price: '20.28', url: 'https://images.unsplash.com/photo-1503767849114-976b67568b02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Ko No Mono', price: '10.95', url: 'https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Tome-wan', price: '20.32', url: 'https://images.unsplash.com/photo-1519624213695-6819a985fb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    {name: 'Mizumono', price: '20.35', url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'}
];

pratos.forEach(prato => { console.log('Prato: ', prato.name, ', Valor: ', prato.price) });

let auxGenerate = 0;

function gerarPratos(qnt, arrayPratos) {
    let aux = auxGenerate+qnt < pratos.length ? auxGenerate+qnt : pratos.length;
    for (let i=auxGenerate; i<aux; i++){
        const element = `
            <div class="prato-img" style="background-image: url(${arrayPratos[i].url});"></div>
            <div class="prato-description">
                <h5 class="prato-title">${arrayPratos[i].name}</h5>
                <h5 class="prato-price">R$ ${arrayPratos[i].price}</h5>
            </div>
        `;
        const newElement = document.createElement("div");
        newElement.setAttribute("class", "prato");
        document.getElementById("someTest").appendChild(newElement);
        newElement.innerHTML = element;
    }
    auxGenerate = auxGenerate + qnt;
}

function pratosDoDia(qnt) {
    let pratosDoDia = [];
    // for (let i=0; i<qnt; i++)
    //     pratosDoDia[i] = pratos[Math.floor(Math.random()*pratos.length)];
    while (pratosDoDia.length < qnt) {
        let element = pratos[Math.floor(Math.random()*pratos.length)];
        if (!pratosDoDia.some(prato => prato.name === element.name)) {
            pratosDoDia.push(element);
        }
    }
    console.log(pratosDoDia);
    gerarPratos(qnt, pratosDoDia);
}

// gerarPratos(9, pratos);
// pratosDoDia(8);


// https://befused.com/javascript/get-filename-url
const path = window.location.pathname;
const fileName = path.substring(path.lastIndexOf('/')+1);
console.log(fileName);

switch (fileName){
    case 'index.html':
        pratosDoDia(8);
        break;
    case 'pratos.html':
        gerarPratos(8, pratos);
        const btnMais = document.getElementById('mais');
        btnMais.addEventListener('click', () => {
            console.log(auxGenerate);
            gerarPratos(8, pratos);
        });
	    break;
}
