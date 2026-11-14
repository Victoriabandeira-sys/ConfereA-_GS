const API_URL = 'https://6af8933a9bdd097c326f01f0.mockapi.io/contatos/contatos'

export async function buscarContatos() {
    const resposta = await fetch(API_URL)

    if (!resposta.ok) {
        throw new Error('Erro ao buscar contatos')
    }

    return resposta.json()
}

export async function cadastrarContato(dados) {
    const resposta = await fetch(API_URL, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })

    if (!resposta.ok) {
        throw new Error('Erro ao cadastrar contato')
    }

    return resposta.json()
}

export async function editarContato(id, dados) {
    const resposta = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })

    if (!resposta.ok) {
        throw new Error('Erro ao editar contato')
    }

    return resposta.json()
}

export async function removerContato(id) {
    const resposta = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })

    if (!resposta.ok) {
        throw new Error('Erro ao excluir contato')
    }

    return resposta.json()
}
