class DispositivoEletronico{
	constructor(nome){
		this.nome = nome;
		this.ligado = false;
	}

	ligar(){
		if(this.ligado){
			console.log(this.nome + ' Ja ligado')
			return;
		}

		this.ligado = true;
	}

	desligar(){
		if(!this.ligado){
			console.log(this.nome + ' Ja desligado')
			return;
		}

		this.ligado = false;
	}
}

// extends eh usado para colocar herenca em uma classe
class Smartphone extends DispositivoEletronico{
	constructor(nome, cor, modelo){
		// super server a classe filha usar o construtor da classe pai
		super(nome);
		
		this.cor = cor;
		this.modelo = modelo;
	}
}

const s1 = new Smartphone('Iphone', 'Preto', 'Iphone 15 Pro Max');
console.log(s1);
