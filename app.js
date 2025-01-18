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
		alert('Por favor, insira um nome.');
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
	return nome.trim() !== '';
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
