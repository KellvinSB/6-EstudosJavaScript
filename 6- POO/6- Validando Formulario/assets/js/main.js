class ValidaFormulario{
	constructor(){
		this.formulario = document.querySelector('.formulario');
		this.eventos();
	}

	eventos(){
		this.formulario.addEventListener('submit', e => {
			this.handleSubmit(e);
		});
	}

	handleSubmit(e){
		e.preventDefault();
		const camposValidos = this.camposValidos();
		const senhasValidas = this.senhasValidas();

		if(camposValidos && senhasValidas){
			alert('Formualrio enviado');
			this.formulario.submit();
		}
	}

	senhasValidas(){
		let valid = true;

		const senha = this.formulario.querySelector('.senha');
		const repetirSenha = this.formulario.querySelector('.repetir-senha');

		if(senha.value !== repetirSenha.value){
			valid = false;
			this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais');
			this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais');
		}

		if(senha.value.length < 6 || senha.value.length > 12){
			valid = false;
			this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres');
		}

		return valid;
	}

	camposValidos(){		
		let valid = true;

		// Remove os erros antes de adicionar novos
		for(let errorText of this.formulario.querySelectorAll('.error-text')){
			errorText.remove();
		}

		for(let campo of this.formulario.querySelectorAll('.validar')){
			// previousElementSibling pega o irmao anterior da tag
			const label = campo.previousElementSibling.innerText;

			if(!campo.value){
				this.criaErro(campo, `Campo "${label}" nao pode estar em branco.`);
				valid = false;
			}

			if(campo.classList.contains('cpf')){
				if(!this.validaCpf(campo)) valid = false;
			}

			if(campo.classList.contains('usuario')){
				if(!this.validaUsuario(campo)) valid = false;
			}
		}

		return valid;
	}

	validaUsuario(campo){
		const usuario = campo.value;
		let valid = true;

		if(usuario.length < 3 || usuario.length > 12){
			this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres');
			valid = false;
		}

		if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
			this.criaErro(campo, 'Nome de usuario precisa contar apenas letra e/ou numeros');
			valid = false;
		}

		return valid;
	}

	validaCpf(campo){
		// Passando o campo cpf para a Classe ValidaCpf
		const cpf = new ValidaCpf(campo.value);

		if(!cpf.valida()){
			this.criaErro(campo, 'CPF invalido');
			return false;
		}

		return true;
	}

	criaErro(campo, msg){
		const div = document.createElement('div');
		div.innerHTML = msg;
		div.classList.add('error-text');
		// Adiciona a div criada abaixo do elemnto invalido
		campo.insertAdjacentElement('afterend', div);
	}
}

const valida = new ValidaFormulario();
