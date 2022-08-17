// O objeto Math tem fncionalidades importantes que facilitam nosso desenvolvimento
let pi = Math.PI;
console.log(pi);

let raiz = Math.sqrt(16)
console.log(raiz);

let n = Math.pow(2, 4) // Primeiro é a base e segundo é o expoente
console.log(n);

let random1 = Math.random() // Gera um numero aleatorio entre 0 e 0.9999999 (quase 1)
console.log(random1)

// Se eu quiser um entre 0 e 10 eu multiplico por 10
let random2 = Math.random() * 10 
console.log(random2)

//E se eu quiser a forma inteira?
let random3 = Math.round(Math.random()*10); // o Round arredonda
console.log(random3);

// Tem como pegar o número Anterior:
let arredondaPraBaixo = Math.floor(5.5); // Arredonda pra cima
console.log(arredondaPraBaixo);

// Tem como pegar o número Posterior:
let arredondaPraCima = Math.ceil(5.5); // Arredonda pra cima
console.log(arredondaPraCima);


/*

Math Object Methods
	
abs(x)	
Returns the absolute value of x

acos(x)	
Returns the arccosine of x, in radians

asin(x)	
Returns the arcsine of x, in radians


atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians

atan2(y, x)	
Returns the arctangent of the quotient of its arguments

ceil(x)	
Returns the value of x rounded up to its nearest integer

cos(x)	
Returns the cosine of x (x is in radians)

exp(x)	
Returns the value of Ex

floor(x)	
Returns the value of x rounded down to its nearest integer

log(x)	
Returns the natural logarithm (base E) of x

max(x, y, z, ..., n)	
Returns the number with the highest value

min(x, y, z, ..., n)	
Returns the number with the lowest value

pow(x, y)	
Returns the value of x to the power of y

random()	
Returns a random number between 0 and 1

round(x)	
Returns the value of x rounded to its nearest integer

sin(x)
Returns the sine of x (x is in radians)

sqrt(x)	
Returns the square root of x

tan(x)	
Returns the tangent of an angle


*/ 