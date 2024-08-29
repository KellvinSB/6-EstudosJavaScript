class ValidaCpf{
	constructor(cpfEnviado){
		Object.defineProperty(this, 'cpfLimpo', {
			Writable: false,
			enumerable: true,
			configurable: false,
			value: cpfEnviado.replace(/\D+/g, '')
		});
	}

	isSequencia(){
		return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
	}

	geraNovoCpf(){
		const cpfSemDigito = this.cpfLimpo.slice(0, -2);
		// ValidaCpf. ao inves de this. pois geraDigito eh estatico
		const digito1 = ValidaCpf.geraDigito(cpfSemDigito);
		const digito2 = ValidaCpf.geraDigito(cpfSemDigito + digito1);

		this.novoCpf = cpfSemDigito + digito1 + digito2;
	}

	// Nao ter o this dentro da funcao eh um indicio que ela pode ser estatica
	static geraDigito(cpfSemDigito){
		let total = 0;
		let reverso = cpfSemDigito.length + 1;

		for(let stringNum of cpfSemDigito){
			total += reverso * Number(stringNum);
			reverso--;
		}

		const digito = 11 - (total % 11);
		return digito <= 9 ? String(digito) : '0';
	}

	valida(){
		if(!this.cpfLimpo) return false;
		if(typeof this.cpfLimpo !== 'string') return false;
		if(this.cpfLimpo.length !== 11) return false;
		if(this.isSequencia()) return false;
		this.geraNovoCpf();
		return this.novoCpf === this.cpfLimpo;
	}
}

const validaCpf = new ValidaCpf('070.987.720-03');

validaCpf.valida() ? console.log('CPF Valido') : console.log('CPF Invalido');
