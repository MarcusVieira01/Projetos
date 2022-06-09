//Script que fará a conversão de distância em KM para anos luz e exibirá a foto do dia da API da Nasa APOD

//Declaração de função que fará o acesso à API APOD da NASA e retornará um objeto String, onde é realizado o retorno da função desse objeto com conversão para JSON
function getJson(url){
    //Instanciamento de novo objeto que subisidiará a requisição dos dados da API
    let request = new XMLHttpRequest();
    //Método do objeto que fará a aquisição dos dados via argumento GET, no local dado pela url e com sincronicidade false
    request.open('GET', url, false);
    //Método que remete ao servidor dados, porém constando apenas para que o fluxo seja concluído
    request.send()
    //Retorno do objeto String adquirido, com conversãoo para JSON 
    return JSON.parse(request.responseText);
};

//Declaração de função que utlilizará o JSON retornado pela função getJson(url) e incluirá a exibição, no arquivo index.html, da imagem do dia da API APOD da NASA
function chamaApod(url){
    //Declaração de variável que receberá o retorno do método getJson(url)
    let nasaJson = getJson(url);
    //Exibição no console o valor da variável nasaJson
    console.log(nasaJson);

    //Injeção no código HTML da imagem obtida via atributo url do JSON
    //Declaração de variável e atribuição do retorno do método
    let imagem = document.createElement('img');
    //Atribuição ao valor da propriedade src do objeto imagem, implicitamente instanciado, o valor do atributo url do objeto nasaJson
    imagem.src = nasaJson.url;
    //Método que capturará o código HTML pelo id imagem, com injeção do objeto 
    document.getElementById('imagem').appendChild(imagem);

    //Injeção no código HTML do valor de atributos de objeto JSON e cadeia de strings
    //Declaração de variáveis e atribuição do valor de retorno do método de captura de trecho de código HTML identificado pelo id sobre, explicação e copyrigth
    let elementoSob = document.getElementById('sobre');
    let elementoExp = document.getElementById('explicacao');
    let elementoCop = document.getElementById('copyrigth');
    //Injeção dos valores dos atributos date e explanatio do objeto JSON nasaJson e das cadeias de string, via método .innerHTML
    elementoExp.innerHTML = nasaJson.date + ' ➝ ' + nasaJson.explanation;
    elementoSob.innerHTML = 'Sobre a imagem:<br>';
    elementoCop.innerHTML = '<br>©Copyrigth: <a href="https://api.nasa.gov/" target="_blank">NASA APIs - Astrononic Photo of Day APOD</a> <br><br>';
};

//Declaração de função principal que fará a chamada da função chamaApod(ulr), fará a conversão de anos luz para Km e injetará o valor de resultado no código HTML
function main(){
    //Chamada da função chamaApod(url) para inclusão da imagem do dia e o texto pertinente à imagem. Dados obtidos da API APOD da NASA via link de argumento
    chamaApod('https://api.nasa.gov/planetary/apod?api_key=zwYginFDagJC0yO32V2c8b8HPBaWzSH0Y8Iq0zUa');

    //Declaração de variáveis e atribuição do retorno do método de captura de trecho do código HTML
    const valorInput = parseFloat(document.getElementById('valorInput').value); //Retorno apenas do valor do elemento de id valorInput, convertido para Float
    const valorConv = document.getElementById('valorConvertido');

    //Declaração de variáveis e atribuição do valor de resultado da expressão matemática
    const valorALKM = 9.460536068016 * Math.pow(10, 12); //Valor constante de 1 ano luz em Km
    let valorConvKm = ((valorInput * valorALKM).toExponential(2)); //Uso do método.toExponentioa(arg) para formatar em notação científica

    //Injeção do valor da variável calorConvKm no atributo value do código capturado e atribuído em valorConv, via método setAttribute
    valorConv.setAttribute('value', valorConvKm);
};
