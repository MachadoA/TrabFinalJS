import { port, updateDados, returnTravel, notReturnTravel } from "./utils.js";

/////// DOM ///////
//#region DECLARAÇÕES DO DOM
let norte = document.getElementById("norte");
let aLisboa = document.getElementById("aLisboa");
let lisboa = document.getElementById("lisboa");

let filters = document.querySelector('div.filters');
let comeback = filters.querySelector('#comeback');
let notComeback = filters.querySelector('#notComeback');
let getFilters = document.getElementById('getFilters');
let principalFilter = document.getElementById('principalFilter');

let viewN = document.getElementById("viewN");
let viewALisb = document.getElementById("viewALisb");
let viewLisbon = document.getElementById("viewLisbon");
let principalN = document.getElementById("principalN");
let principalALisb = document.getElementById("principalALisb");
let principalLisbon = document.getElementById("principalLisbon");
let dynamicN = document.getElementById("dynamicN");
let descriptionN = document.getElementById("descriptionN");
let descriptionALisbon = document.getElementById("descriptionALisbon");
let dynamicALisbon = document.getElementById("dynamicALisbon");
let dynamicLisbon = document.getElementById("dynamicLisbon");
let descriptionLisbon = document.getElementById("descriptionLisbon");


let addData = document.getElementById("addData");
let showUp = document.getElementById("showUp");

let dadosGlobais;

///// form///
let submitBtn = document.querySelector('#submitBtn');
let grid = document.querySelector('#grid');

//#endregion



////////// EVENTOS ///////////
//#region EVENTOS
function eventos() {
    filters.addEventListener('change', filtros, false);
    filters.addEventListener('input', filtros, false);
    viewN.addEventListener('click', principalImage, false);
    viewALisb.addEventListener('click', principalImage, false);
    viewLisbon.addEventListener('click', principalImage, false);
    addData.addEventListener('click', formView, false);
}
submitBtn.addEventListener('click', formEvents, false)
//#endregion


////////// FETCH  JSON////////
//#region FETCH JSON
fetch('portugal.json')
.then(resp => resp.json())
.then(dadosConvertidos => apresentaDados(dadosConvertidos))
.catch(erro => console.log(erro))
//#endregion



/////////// FUNCTIONS ////////
//#region "FUNCIONS"
function apresentaDados(dados) {
    dadosGlobais = dados;
    
    updateDados(dados)
    //console.log(updateDados)
    
    eventos();
    
    //// Apresentar os dados dessa região
    viewN.innerHTML = "";
    if (norte = dados.filter((item) => item.region === 'Norte')) {
        norte.forEach((item) => { 
            
            viewN.innerHTML += `
            <div>
            <img name="Norte" id="${item.id}" src="img/${item.image}">
            <p>${item.local}</p>
            </div>
            `
            
            descriptionN.innerHTML = `
            
            
            <h2>A região que abrange os distritos de Braga, Porto, Viana do Castelo, Vila Real e Bragança.</h2>
            <p>Em 2019, nossa primeira viagem em solo português constava como destino final Braga. Lembro-me da agitação própria de quem está a vivenciar pela primeira vez a descoberta de um novo horizonte. Também recordo dos cheiros, da paisagem tão campestre, que me fez relaxar e desacelerar o pensamento – se é que é possível. Viajamos no início do mês de agosto, verão, com a intenção de rever amigos que vivem no centro de Braga.</p>
            
            <p>Entretanto, fizemos algumas paradas típicas de exploradores… </p>
            
            <p>Ficamos algumas poucas noites em Porto. Conhecemos alguns dos principais pontos turísticos. Fomos a Bragança, especificamente no Castelo de Guimarães. E seguimos em direção a Braga.</p>
            
            <p>Só em 2021, por causa da pandemia, que conseguimos retornar e aproveitamos para passear em Viana do Castelo, uma cidade encantadora, porém vazia, senti falta de pessoas… </p>
            
            <p>Da região norte, não fomos à Vila Real. Seguramente, ficará para a próxima vez que subirmos.</p>
            `
        })
        
        principalN.innerHTML = ""; 
        principalN.innerHTML += `    
        <img src="img/${norte[0].image}">`
    } 
    
    
    let alisboa= dados.filter((item) => item.region === 'alisboa')
    
    viewALisb.innerHTML = "";
    
    alisboa.forEach((item) => {
        let subtitle = item.subtitle; 
        let img = item.image;
        let local = item.local;
        
        viewALisb.innerHTML += `
        <div>
        <img name="ALisboa" src="img/${img}">
        <p>${local}</p>
        </div>
        `
        
        descriptionALisbon.innerHTML = `
        <h2> Santarém, Tomar, Constância e Setúbal</h2>
        <p>Em Santarém, além de Fátima e arredores, andarilhamos por Tomar e Constância, neste lugar ficamos numa espécie de hotel fazenda, com piscina, contacto com a natureza, os animais, árvores frutíferas. Percorremos o centro histórico e vimos a homenagem a Luís de Camões, sem falar na vista do Rio Tejo. Sem dúvida, havia muitos encantos. Vale ressaltar que iria novamente e ficaria hospedada no mesmo lugar! </p>
        <p>Do outro lado do Tejo, há vários lugares que gostamos, mas preferimos a agitação do lado de cá. Amamos os encontros com os amigos na Lagoa de Albufeira e nos apaixonamos pela visão da Praia da Arrábida, parece um quadro pintado com todas as cores numa combinação exata de perfeição. As montanhas, o mar, as nuvens, a areia, tudo se compõem de uma maneira tão simples e linda. Infelizmente, não tiramos foto na parte alta, antes de descer à praia. Entretanto, toda perfeição tem um preço… Não recomendo a quem tem crianças. Na maré baixa, há várias pedrinhas na areia que dificultam a entrada no mar. Mas vale a contemplação da vista.
        </p>
        `
    })
    
    principalALisb.innerHTML = ""; 
    principalALisb.innerHTML += `    
    <img src="img/${alisboa[0].image}">`
    
    /// Lisboa
    lisboa= dados.filter((item) => item.region === 'lisboa')
    
    viewLisbon.innerHTML = "";
    
    lisboa.forEach((item) => {
        let subtitle = item.subtitle; 
        let img = item.image;
        let local = item.local;
        
        viewLisbon.innerHTML += `
        <div>
        <img name="Lisboa" src="img/${img}">
        <p>${local}</p>
        </div>
        `

        descriptionLisbon.innerHTML = `
        <h2>Zona de Lisboa</h2>
                    
                    <p>
                        Residir na zona de Lisboa para mim é uma dádiva. Não sei se sobreviveria muito tempo a morar em Porto. Gosto da agitação. Amo ver pessoas e apaixonei-me por essa região. Um dos nossos hobbies é andar de bicicleta na zona de Belém, uma local que reúne gente, história, sorriso e beleza. Agradabilíssimo!</p>
                    
                        <p>Minha favorita, sem dúvida, é Oeiras. Apesar do centro de Lisboa ser um pouco familiar – consigo sentir os fatores históricos e culturais -, prefiro Oeiras para passear com as crianças. </p>
                    
                        <p>Temos um caso com Cascais, sobretudo com as praias, o centro histórico, o mercado municipal e o Parque Marechal Carmona.</p>
                    
                        <p>Em Sintra, nossos lugares favoritos são os jardins do Palácio de Queluz, o parque Urbano Felício Loureiro, o centro histórico de Sintra, o Parque de Monserrate. Curiosamente, ainda não fomos a nenhuma praia da região. Como vivemos mais próximos à Oeiras, preferimos essas praias.</p>
                    
                    </p>
        `

        
    })
    
    principalLisbon.innerHTML = ""; 
    principalLisbon.innerHTML += `    
    <img src="img/${lisboa[0].image}">`
}

function principalImage({target}){
    if (target.name === 'Lisboa'){        
        principalLisbon.innerHTML = ""; 
        principalLisbon.innerHTML += `    
        <img src="${target.src}">
        `
    }
    
    if (target.name === 'ALisboa'){
        principalALisb.innerHTML = ""; 
        principalALisb.innerHTML += `    
        <img src="${target.src}">
        `
    }
    
    if (target.name === 'Norte'){
        principalN.innerHTML = ""; 
        principalN.innerHTML += `    
        <img src="${target.src}">
        `
    }
}

////// filtros
function filtros({target}){
    //console.log(dadosGlobais)
    let noRetornar = dadosGlobais.filter((places) => places.comeback !== true)
    let retornar = dadosGlobais.filter((places) => places.comeback === true)
    
    if(target.id === 'notComeback'){
        //console.log(notComeback)
        comeback.checked = false;
        
        getFilters.style.visibility = "visible";
        
        view.innerHTML = "";
        
        noRetornar.forEach((item) => {
            let img = item.image;
            let local = item.local; 
            
            view.innerHTML += `
            <div>
            <img src="img/${img}">
            <p>${local}</p>
            </div>
            `
        })
    }
    
    if(target.id === 'comeback'){
        //console.log(comeback)
        notComeback.checked = false;
        
        
        view.innerHTML = "";
        
        getFilters.style.visibility = "visible";
        
        retornar.forEach((item) => {
            let img = item.image;
            let local = item.local;
            
            
            view.innerHTML += `
            <div>
            <img src="img/${img}">
            <p>${local}</p>
            </div>
            `
        })
    }
    
    if (comeback.checked == false && notComeback.checked == false) {
        
        view.innerHTML = "";
        getFilters.style.visibility = "hidden";
    }
}
//#endregion


////// acrescentar dados ////

function formView() {
    if (showUp.style.display == "none") {
        showUp.style.display= "block";
    } else {
        showUp.style.display= "none";
    }
    
}

function formEvents(e){
    let id = new Date().getTime();
    let escolha = document.getElementById('region').value;
    createInfo(
        id, 
        escolha,
        local.value,
        image.value,  
        comeback.checked, 
        ); 
        
        e.preventDefault();
    }
    
    function createInfo(id, region, local, image, comeback){    
        let info = dadosGlobais;
        let newInfo = {
            id: id,
            image: image,
            subtitle: '',
            region: region,
            local: local,             
            comeback: comeback
        };
        console.log(dadosGlobais)
        dadosGlobais.push(newInfo);
        addEditForm.reset();
        
        apresentaDados(info)
    }
    
    
    ///////// dynamic - temperatura
    
    
   
    
    
    ////////// FETCH  API////////
    fetch("https://api.openweathermap.org/data/2.5/weather?q=lisboa&appid=8a40d4493838136f75e21a31b8ca54ff&units=metric")
    .then(resp => resp.json()) //converte em json
    .then(data => temp(data)) //apresenta dados convertidos
    .catch(erro => console.log(erro)) //erro, caso exista

    function temp(dados){
        let temperatura = dados.main.temp

        dynamicLisbon.innerHTML = `
        <h3>Lisboa</h3>
        <h4>Temp atual</h4>
        <h4>${temperatura.toFixed()}º C</h4>
        <img src="https://openweathermap.org/img/wn/${dados.weather[0].icon}.png" width="10%">
        `
    }

    fetch("https://api.openweathermap.org/data/2.5/weather?q=porto&appid=8a40d4493838136f75e21a31b8ca54ff&units=metric")
    .then(resp => resp.json()) //converte em json
    .then(data => temperature(data)) //apresenta dados convertidos
    .catch(erro => console.log(erro)) //erro, caso exista

    function temperature(dados){
        let temperatura = dados.main.temp

        dynamicN.innerHTML = `
        <h3>Porto</h3>
        <h4>Temp atual</h4>
        <h4>${temperatura.toFixed()}º C</h4>
        <img src="https://openweathermap.org/img/wn/${dados.weather[0].icon}.png" width="10%">
        `
    }

    fetch("https://api.openweathermap.org/data/2.5/weather?q=fatima&appid=8a40d4493838136f75e21a31b8ca54ff&units=metric")
    .then(resp => resp.json()) //converte em json
    .then(data => temperatura(data)) //apresenta dados convertidos
    .catch(erro => console.log(erro)) //erro, caso exista

    function temperatura(dados){
        let temperatura = dados.main.temp

        dynamicALisbon.innerHTML = `
        <h3>Fátima</h3>
        <h4>Temp atual</h4>
        <h4>${temperatura.toFixed()}º C</h4>
        <img src="https://openweathermap.org/img/wn/${dados.weather[0].icon}.png" width="10%">
        `
    }
    
    
