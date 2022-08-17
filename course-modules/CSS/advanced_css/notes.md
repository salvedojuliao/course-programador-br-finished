# Pseudo-elementos
É esse o nome para Aquele símbolo (cólon) em cosias como:
p::after, p::befora, p::fisrt-line, li::ater, p::selection
+ São comandos que permitem que eu modifique o estilo de apenas uma parte dos elementos;
Obs: ::oot É o HTML 

# Seletores
Existem diferentes tipos de seletores, é importante encontrar uma fora usar eles sem deixar tudo confuso

# Compatibilidade do navegador
É imporante checar quais navegadores suportam as configurações que eu utilizar, os sites Can i use and Should I Prefix ajudam
É daqui que vem a necessidade de utilizar os -webkit- da vida;

# Bug do inlinge-block
O inline-block inlcue espaçamento de 4px naturalmente, logo eu preciso fazer um 'workd around' se eu quiser remover esses pixels (isso foi dito antes de começar as auals de flexbox)

# Flex-box:
Tem como juntar duas propriedadades e juntar numa linha só:
flex-direction: row;
flex-wrap: wrap;
flex-flow: flex-direction flex-wrap; ou seja, tem como juntar os dois em um só, exemplo:
flex-flow: row wrap;  
APENAS PARA FLEX-DIRECTION E FLEX-WRAP

## justify-content: 
flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left

## align-items: 
stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end

## display grid
É possível utilizar display flex e display grid dentro do mesmo projeto, é super possível fazer isso. 
+ O align and justify items vai alinahr em relação ao espaço da grid
+ Mas o align e o justify content alinha o espaço da grid em relação ao container (ao elemento pai) 
+ As propriedades justify-items e align-items só funciona quando o justify-content for stretch