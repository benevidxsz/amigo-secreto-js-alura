//array para guardar o nome dos amigos
let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo'); //onde vai obter a informação do nome do amigo
    amigo.value = amigo.value.toUpperCase(); //.toUpperCase para evitar qualquer repetição de nome
    
    //validação para não permitir um espaço 'vazio' ser adicionado na lista de amigos
    if(amigo.value == ''){
        alert('Informe o nome do amigo!');
        return; //encerra a função aqui
    } else if (amigo.value == 'ANNA JULIA'){
        alert('Esse nome não é permitido pelo desenvolvedor, digite outro nome! :)');
        return; //encerra a função aqui
    }

    if(amigos.includes(amigo.value)){
        alert(`Esse nome "${amigo.value}" já está no sorteio! Digite outro nome`);
        return; //encerra a função aqui
    }
    
    let lista = document.getElementById('lista-amigos'); //recuperar a lista de todos os amigos digitados
    amigos.push(amigo.value); //push para adiconar o nome do amigo no array

    //condicional para se a lista estiver vazia, vai colocar o nome
    if(lista.textContent == ''){
        lista.textContent = amigo.value; //nome q foi digitado para o amigo, colocando o amigo na lista (textcontext)
        
    } 
    //se nao estiver vazia, vai receber os nomes q ja estavam + o proximo nome
    else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    //limpar o campo do nome do amigo, APÓS o nome ser adicionado na lista
    amigo.value = '';
}

function sortear(){
    //mostra o alert e interrompe a função para não realizar o sorteio com menos de 3 amigos
    if (amigos.length < 3){
        alert('Adicione pelo menos 3 amigos!');
        return;
    }

    embaralha(amigos);

    let sorteio = document.getElementById("lista-sorteio"); //lista q tem o resultado do sorteio

    //loop percorre o array desde a posição 0 até o máximo -1 de amigos dentro do array
    for (let i = 0; i < amigos.length; i++){ 
        //condicional para checar se o i ja chegou no length do array, mostrando que ja chegou no fim da lista/array
        if ( i == amigos.length - 1 ){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -> ' + amigos[i + 1 ] + '<br>';//innerhtml vai receber o nome da posição do amigo + 1 para "garantir" que recebeu
        }
    }
}

function embaralha(lista) {
    //recuperar o array de pessoas adicionadas e fazer o sorteio embaralhando a ordem dos arrays
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    //para esvaziar a lista dos amigos no sorteio no array e nos elementos da página
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById("lista-sorteio").innerHTML = '';
}