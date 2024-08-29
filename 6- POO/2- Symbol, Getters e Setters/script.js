// Symbol eh uma forma de criar uma propriedade privada e imutavel, impendindo que seja acessada ou modificada fora da classe
const _velocidade = Symbol('velocidade');

class Carro{
	constructor(nome, velocidade = 0){
		this.nome = nome;
		// [] chaves sao usadas para chamar um Symbol
		this[_velocidade] = velocidade;
	}

	// Get e Set sao usadaos para minipular atributos
	set velocidade(valor){
		console.log('SETTER');
		if(typeof valor !== 'number') return;
		if(valor >= 100 || valor <= 0) return;
		this[_velocidade] = valor;
	}

	get velocidade(){
		console.log('GETTER');
		return this[_velocidade];
	}

	acelerar(){
		if(this[_velocidade] >= 100) return;
		this[_velocidade]++;
	}

	freiar(){
		if(this[_velocidade] <= 0) return;
		this[_velocidade]--;
	}
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++){
	c1.acelerar();
}

// get e set sao chamados sem o () pois se comportam como atributos
// Esse set nao vao funcionar por causa do if
c1.velocidade = 2000;

console.log(c1.velocidade);
console.log('---------------------------------------------');
console.log(c1);
