class ControleRemoto{
	constructor(tv){
		this.tv = tv;
		this.volume = 0;
	}

	aumentarVolume(){
		this.volume += 2;
	}

	diminuirVolume(){
		this.volume -= 2;
	}

	// Metodos estaticos sao metodos que so podem ser acessador fora de uma instancia
	static trocaPilha(){
		console.log("Trocando Pilha...")
	}
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();
console.log(controle1);

// Troca pilha nao eh um metodo de instancia entao nao tem acesso aos dados de nenhuma instancia
ControleRemoto.trocaPilha();
