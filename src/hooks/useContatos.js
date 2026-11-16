import { useState, useEffect } from 'react'

import {
    buscarContatos,
    cadastrarContato,
    editarContato,
    removerContato
} from '../services/contatosApi'

function useContatos() {
    const [contatos, setContatos] = useState([])
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [parentesco, setParentesco] = useState('')
    const [idEditando, setIdEditando] = useState(null)
    const [erro, setErro] = useState('')

    async function carregarContatos() {
        try {
        const dados = await buscarContatos()
        setContatos(dados)
        setErro('')
    } catch {
        setErro('Erro ao carregar os contatos.')
    }
} 

    useEffect(() => {
        carregarContatos()
    }, [])

    async function salvarContato(e) {e.preventDefault()
    const dados = { nome, telefone, parentesco }

    try {
        if (idEditando) {
            await editarContato(idEditando, dados)
        } else {
            await cadastrarContato(dados)
        }

        await carregarContatos()

        setNome('')
        setTelefone('')
        setParentesco('')
        setIdEditando(null)
    } catch {
        setErro('Erro ao salvar contato.')
    }
}

function selecionarContato(contato) {
    setNome(contato.nome)
    setTelefone(contato.telefone)
    setParentesco(contato.parentesco)
    setIdEditando(contato.id)
}

async function excluirContato(id) {
    try {
        await removerContato(id)
        await carregarContatos()
        } catch {
            setErro('Erro ao excluir contato.')
        }
    }

return {
    contatos,
    nome,
    setNome,
    telefone,
    setTelefone,
    parentesco,
    setParentesco,
    idEditando,
    erro,
    salvarContato,
    selecionarContato,
    excluirContato
    }
}

export default useContatos
