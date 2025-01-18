//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const amigos = [];

// === ADIÇÃO DE AMIGOS ===

/**
 * @description Adiciona um nome à lista de amigos
 */
function adicionarAmigo() {
	const nome = getNomeDoAmigo();

	if (validarNome(nome)) {
		amigos.push(nome);
		clearInputNomeDoAmigo();
		atualizarListaDeAmigos();
	} else {
		clearInputNomeDoAmigo();
		alert('Por favor, insira um nome válido (não pode ser um nome já adicionado).');
	}
}

/**
 * @description Recupera o nome do amigo do input
 * @returns {string} - O nome do amigo
 */
function getNomeDoAmigo() {
	const nome = document.getElementById('amigo').value;
	return nome;
}

/**
 * @description Limpa o input do nome do amigo
 */
function clearInputNomeDoAmigo() {
	document.getElementById('amigo').value = '';
}

/**
 * @description Valida se o nome é válido
 * @param {string} nome - O nome do amigo a ser validado
 * @returns {boolean} - true se o nome é válido, false caso contrário
 */
function validarNome(nome) {
	return nome.trim() !== '' && !amigos.includes(nome);
}

// === ATUALIZAÇÃO DA LISTA DE AMIGOS ===

/**
 * @description Atualiza a lista de amigos
 */
function atualizarListaDeAmigos() {
	clearListaDeAmigos();
	amigos.forEach(adicionarAmigoNaLista);
}

/**
 * @description Recupera a lista de amigos
 * @returns {HTMLElement} - A lista de amigos
 */
function getListaDeAmigos() {
	return document.getElementById('listaAmigos');
}

/**
 * @description Limpa a lista de amigos
 */
function clearListaDeAmigos() {
	getListaDeAmigos().innerHTML = '';
}

/**
 * @description Adiciona um nome à lista de amigos
 * @param {string} nome - O nome do amigo a ser adicionado
 */
function adicionarAmigoNaLista(nome) {
	const lista = getListaDeAmigos();
	const li = document.createElement('li');
	li.textContent = nome;
	lista.appendChild(li);
}

// === SORTEIO DE AMIGOS ===

/**
 * @description Sorteia um amigo
 */
function sortearAmigo() {
	if (validarListaDeAmigos()) {
		let posicaoSorteada = gerarPosicaoAleatoria();
		let nomeSorteado = getNomeSorteado(posicaoSorteada);
		atualizarResultado(nomeSorteado);
	} else {
		alert('Por favor, adicione pelo menos dois amigos.');
	}
}

/**
 * @description Valida se a lista de amigos é válida
 * @returns {boolean} - true se a lista de amigos é válida, false caso contrário
 */
function validarListaDeAmigos() {
	return amigos.length > 1;
}

/**
 * @description Gera uma posição aleatória baseada na quantidade de amigos
 * @returns {number} - A posição aleatória
 */
function gerarPosicaoAleatoria() {
	return Math.floor(Math.random() * amigos.length);
}

/**
 * @description Recupera o nome sorteado baseado na posição sorteada
 * @param {number} posicaoSorteada - A posição sorteada
 * @returns {string} - O nome sorteado
 */
function getNomeSorteado(posicaoSorteada) {
	return amigos[posicaoSorteada];
}

/**
 * @description Recupera o elemento de resultado
 * @returns {HTMLElement} - O elemento de resultado
 */
function getElementoDeResultado() {
	return document.getElementById('resultado');
}

/**
 * @description Atualiza o resultado
 * @param {string} nomeSorteado - O nome sorteado
 */
function atualizarResultado(nomeSorteado) {
	const resultado = getElementoDeResultado();
	resultado.innerHTML = `O amigo sorteado é: ${nomeSorteado}`;
}
