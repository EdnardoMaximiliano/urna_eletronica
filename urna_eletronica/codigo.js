function input(e) {													//Função que escreve os números nos campos quando aperta um botão de número
	var varInput = document.querySelectorAll(".tabable");			//Variável que recebe todos os campos de texto

	for(var i = 0; i < varInput.length; i++){						//Loop para seleção dinâmica dos campos carregados na variável varInput
		if (varInput[0].tabIndex == 1 && varInput[0].value == '') {   //Verifica se o campo do primeiro dígito está vazio
		 	varInput[0].value = e.value;							//Comando para escrever no campo, o valor do botão pressionado
		 	varInput[1].focus();									//Comando para colocar o foco no próximo campo, do segundo dígito.
		 	break;
		} else

		if(varInput[0].value != '' && varInput[1].value == '' ) {	//Verifica se o campo do primeiro dígito está preenchido e se o campo do segundo dígito está vazio
			varInput[1].value = e.value;							//Comando para escrever no campo, o valor do botão pressionado
			document.getElementById("confirma").focus();			//Passa o foco para o botão de confirmar o voto
			break;
		} 
	} 
}

function del() {													//Função para apagar o conteúdo dos campos
	var campoBranco = document.getElementById("brancoField");
	var varInput = document.querySelectorAll(".tabable");			//Variável para selecionar todos os campos
		if(varInput[0].value == '' &&
	   		varInput[1].value == '' &&
	   		varInput[0].disabled == false &&
			varInput[1].disabled == false) {
												
			alert("Para corrigir é preciso digitar pelo menos um número.");		//Exibe uma mensagem de erro para o usuário

		} else {
			for(var i =0; i<varInput.length; i++){
				if(varInput[i].disabled == true){
					varInput[i].disabled = false;
					campoBranco.value = null;
					campoBranco.disabled = true;
					varInput[0].focus();
				} else if(varInput[i] != '') {
					varInput[i].value = null;
					varInput[0].focus();										//Volta o foco para o primeiro campo
				}

			}

		}			

}		



function confirmaVoto() {
	var campo1, campo2, numeroFinal;

	campo1 = document.getElementById("field1");
	campo2 = document.getElementById("field2");
	campoBranco = document.getElementById("brancoField");

	numeroFinal = campo1.value + campo2.value;

	if(campo1.value === '' && campoBranco.disabled == true) {

		campo1.focus();
		alert("Para votar, digite o numero do candidato ou um numero qualquer para votar em branco");
		return false;

	} else if (campo2.value === '' &&  campoBranco.disabled == true) {
		
		campo2.focus();
		alert("Para votar, digite o numero do candidato ou um numero qualquer para votar em branco");
		return false;

	} else if(campoBranco.disabled == false && campoBranco.value != '') {
			alert("Você irá votar em branco.");
			return true;
		} else {

		alert("Você irá votar no candidato de número: " + numeroFinal);
		return true;	
		}
}

function votarBranco () {
	var camposVoto = document.querySelectorAll(".tabable");
	var varBranco = document.getElementById("brancoField");

	if(camposVoto[0].value != '' || camposVoto[1].value != '') {
		alert("Para votar em branco o campo de voto deve estar vazio. Aperte CORRIGE para apagar o campo de voto.");
	} else if (camposVoto[0].value == '' && camposVoto[1].value == '') {
		for(var i = 0; i < camposVoto.length; i++) {
			camposVoto[i].disabled = true;
		}
		varBranco.disabled = false;
		varBranco.value = "string";
	}


}