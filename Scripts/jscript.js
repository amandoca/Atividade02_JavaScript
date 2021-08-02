
/* Muda Figura */

/* Cria os objetos para trabalhar com eles usando JavaScript */
const obj_sel_rede_social = document.querySelector('#sel_rede_social')
const obj_img_rede_social = document.querySelector('#img_rede_social')
const obj_p_rede_social = document.querySelector('#p_rede_social')

/* Adiciona o evento que permite disparar a função. Evento: alterar (change) a opção da Lista de Seleção */
obj_sel_rede_social.addEventListener('change', FunMudaFigura)

/* Declara (cria) a função que executa a ação desejada */
function FunMudaFigura() {
    /* Atualiza os atributos src, alt e title da imagem, usando o nome da figura de acordo com a
    opção que foi selecionada (que está preenchida no value) */
    obj_img_rede_social.setAttribute('src', 'Imagens/' + obj_sel_rede_social.value + '.png')
    obj_img_rede_social.setAttribute('alt', 'Logo ' + obj_sel_rede_social.value)
    obj_img_rede_social.setAttribute('title', 'Logo ' + obj_sel_rede_social.value)
    /* Preenche o parágrafo com o nome */
    obj_p_rede_social.innerText = 'Logo ' + obj_sel_rede_social.value
}


/* Adiciona Figura */ 

/* Cria os objetos para trabalhar com eles usando JavaScript */
/* Como existem 4 imagens com a mesma classe, foi utilizado o "All" e a seleção carregou 
um array (matriz) */
const array_img_figuras = document.querySelectorAll('.figuras')
const obj_div_adiciona_figura = document.querySelector('#div_adiciona_figura')

/* Cria uma nova tag de imagem no documento (página) para ser manipulada via JavaScript */
const obj_img_nova = document.createElement('img');
/* Cria um novo campo (input) no documento (página) para ser manipulado via JavaScript */
const obj_input_novo = document.createElement('input');


/* Adiciona eventos que permitem disparar as funções */
/* Como é um array, é necessário percorrer as 4 imagens. Por isso é necessário usar uma
estrutura de repetição para repetir a mesma ação 4 vezes */
/* Evento: clicar (click) na Imagem */
for (obj_img of array_img_figuras) {
    /* Para cada imagem, os atributos src e alt são enviados para a Função como parâmetros  */ 
    obj_img.addEventListener('click', function() { FunAdicionaFigura(this.src, this.alt) })    
}

/* Declara (cria) a função que executa a ação desejada */
/* A função está recebendo dois parâmetros que foram declarados como par_src e par_alt */
function FunAdicionaFigura(par_src, par_alt) { 
    /* Configura a imagem com os atributos src e alt recebidos como parâmetro */
    obj_img_nova.setAttribute('src', par_src)
    obj_img_nova.setAttribute('alt', par_alt)
    obj_img_nova.setAttribute('title', par_alt)
    /* Após a imagem estar configurada, insere na div */    
    obj_div_adiciona_figura.appendChild(obj_img_nova);

    /* Configura o input novo */
    obj_input_novo.setAttribute('type', 'text')
    obj_input_novo.setAttribute('disabled', 'true')
    obj_input_novo.setAttribute('value', par_alt)
    /* Adiciona estilos ao input */
    obj_input_novo.setAttribute('class', 'novo_input')
    
    /* Após o input estar configurado, insere na div */ 
    obj_div_adiciona_figura.appendChild(obj_input_novo);
}



/* Preenche Tabela Vazia */

/* Cria os objetos para trabalhar com eles usando JavaScript */
/* Como existem 4 campos (td) na tabela, foi utilizado o "All" e a seleção carregou 
um array (matriz) */
const array_td = document.querySelectorAll('#tab_principal td')
const obj_tab_vazia = document.querySelector('#tab_vazia')
const obj_caption_vazia = document.querySelector('#tab_vazia caption')
const obj_prog_tab_vazia = document.querySelector('#prog_tab_vazia')

/* Variável para controlar a quantidade de linhas na tabela nova */
let contador_linhas_tabela_nova = 0

/* Adiciona eventos que permitem disparar as funções */
/* Como é um array, é necessário percorrer os 4 td's. Por isso é necessário usar uma
estrutura de repetição para repetir a mesma ação 4 vezes */
/* Evento: clicar (click) no td */
for (obj_td of array_td) {
    /* Para cada td, o respectivo texto é enviado para a Função como parâmetro  */
    obj_td.addEventListener('click', function() { FunPreencheTabela(this.innerText) })
}

/* Declara (cria) a função que executa a ação desejada */
/* A função está recebendo um parâmetro que foi declarado como par_text */
function FunPreencheTabela(par_text){
    /* Verifica se atingiu o limite de linhas */
    if (contador_linhas_tabela_nova < 5) {
        /* Cria novas tags <tr> (linha) e <td> (campo/coluna) */
        const obj_tr_novo = document.createElement('tr')
        const obj_td_novo = document.createElement('td')
        /* Preenche o novo <td> com o texto recebido como parâmetro */
        obj_td_novo.innerText = par_text
        /* Adiciona o <td> no <tr> */
        obj_tr_novo.appendChild(obj_td_novo)  
        /* Adiciona o <tr> na tabela */      
        obj_tab_vazia.appendChild(obj_tr_novo) 
        /* Incrementa o contador de linhas */       
        contador_linhas_tabela_nova++
        /* Atualiza o caption da tabela com a quantidade de linhas */
        obj_caption_vazia.innerText = 'Tabela com ' + contador_linhas_tabela_nova + ' linha(s)'
        obj_prog_tab_vazia.value = contador_linhas_tabela_nova
    }
    else {
        /* Se chegou no limite, exibe mensagem de alerta */
        alert('Tabela cheia!')
    }
}




/*    INFERIOR      */
/*                  */



/* Muda Imagem Linguagem Programação */

/* Cria os objetos para trabalhar com eles usando JavaScript */
/* Como existem 3 radio buttons com o mesmo name, foi utilizado o "All" e a seleção carregou 
um array (matriz) */
const array_rb_sel_ling = document.querySelectorAll('[name="rb_sel_ling"]')
const obj_img_ling = document.querySelector('#img_ling')
const obj_pre_ling = document.querySelector('#pre_ling')


/* Adiciona eventos que permitem disparar as funções */
/* Como é um array, é necessário percorrer os 3 elementos. Por isso é necessário usar uma
estrutura de repetição para repetir a mesma ação 3 vezes */
/* Evento: clicar (click) na opção do Radio Button */
for (obj_rb_sel_ling of array_rb_sel_ling) {
    obj_rb_sel_ling.addEventListener('click', FunMudaImgLingProg)
}

/* Declara (cria) a função que executa a ação desejada */
function FunMudaImgLingProg() {
    /* Novamente é necessário percorrer os 3 radio buttons, pois não sabemos qual dos 3
    foi selecionado */
    for (obj_rb_sel_ling of array_rb_sel_ling) {
        /* Em cada elemento, verifica se está selecionado */
        if (obj_rb_sel_ling.checked) {
            /* Adiciona a imagem e preenche os atributos alt e title */
            obj_img_ling.setAttribute('src', 'Imagens/' + obj_rb_sel_ling.value + '.png')
            obj_img_ling.setAttribute('alt', obj_rb_sel_ling.value)
            obj_img_ling.setAttribute('title', obj_rb_sel_ling.value)
            /* Preenche o texto da tag <pre> */
            obj_pre_ling.innerText = 'Logo ' + obj_rb_sel_ling.value
        }
    }    
}



/*  Preenche Lista Vazia */

/* Cria os objetos para trabalhar com eles usando JavaScript */
/* Como existem 3 itens na lista, foi utilizado o "All" e a seleção carregou 
um array (matriz) */
const obj_array_li = document.querySelectorAll('#ul_lista_principal li')
const obj_ul_lista_vazia = document.querySelector('#ul_lista_vazia')
const obj_p_lista_nova = document.querySelector('#p_lista_nova')
const obj_prog_lista_vazia = document.querySelector('#prog_lista_vazia')

/* Variável para controlar a quantidade de linhas na lista nova */
let contador_linhas_lista_nova = 0

/* Adiciona eventos que permitem disparar as funções */
/* Como é um array, é necessário percorrer os 3 <li>'s. Por isso é necessário usar uma
estrutura de repetição para repetir a mesma ação 4 vezes */
/* Evento: clicar (click) no li */
for (obj_li of obj_array_li) {
    /* Para cada li, o respectivo texto é enviado para a Função como parâmetro  */
    obj_li.addEventListener('click', function() { FunPreencheLista(this.innerText) })
}


/* Declara (cria) a função que executa a ação desejada */
/* A função está recebendo um parâmetro que foi declarado como par_text */
function FunPreencheLista(par_text){
    /* Verifica se atingiu o limite de linhas */
    if (contador_linhas_lista_nova < 6) {
         /* Cria nova tag <li> */
        const obj_li_novo = document.createElement('li')
        /* Preenche a nova tag <li> com o texto recebido como parâmetro */
        obj_li_novo.innerText = par_text           
        /* Adiciona a tag <li> na lista */          
        obj_ul_lista_vazia.appendChild(obj_li_novo)         
        /* Incrementa o contador de linhas */          
        contador_linhas_lista_nova++
        /* Atualiza o texto do parágrafo com a quantidade de linhas */
        obj_p_lista_nova.innerText = 'Lista com ' + contador_linhas_lista_nova + ' item(ns)' 
        obj_prog_lista_vazia.value = contador_linhas_lista_nova
    }
    else {
        /* Se chegou no limite, exibe mensagem de alerta */
        alert('Lista cheia!')
    }
}