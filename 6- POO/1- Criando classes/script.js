// Classe eh a mesma coisa que uma funcao construtora
class Pessoa{

	// O constructor serve para passar parametros a classe
	constructor(nome, sobrenome){
		this.nome = nome;
		this.sobrenome = sobrenome;
	}

	// Os metodos de claases nao nescessitam de prototype ja que todas as instancias fazer referencia a um unico metodo
	falar(){
		console.log(`${this.nome} esta falando`)
	}
}

const p1 = new Pessoa('Kellvin', 'Silva');
console.log(p1);
p1.falar();
