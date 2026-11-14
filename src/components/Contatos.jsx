import { useState, useEffect } from 'react'
import {buscarContatos,cadastrarContato,editarContato,removerContato} from '../services/contatosApi'

function Contatos() {
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

useEffect(() => {carregarContatos()}, [])

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

return (
    <section className="min-h-screen bg-blue-950 text-white px-10 py-20 max-sm:px-5">
        <div className="max-w-5xl mx-auto border border-white/30 rounded-2xl p-8 max-sm:p-5">
            <h2 className="text-4xl font-bold mb-5 max-sm:text-3xl">Contatos de Confiança</h2>

            <p className="text-lg mb-10">Cadastre pessoas de confiança para pedir ajuda quando receber algo suspeito.</p>

            <form onSubmit={salvarContato} className="grid gap-4 mb-12">
                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required className="bg-white text-blue-950 p-4 rounded-xl"/>

                <input type="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required className="bg-white text-blue-950 p-4 rounded-xl"/>

                <input type="text" placeholder="Parentesco" value={parentesco} onChange={(e) => setParentesco(e.target.value)} required className="bg-white text-blue-950 p-4 rounded-xl"/>

                <button type="submit" className="bg-sky-500 hover:bg-sky-400 p-4 rounded-xl font-semibold cursor-pointer">{idEditando ? 'Salvar Alterações' : 'Cadastrar Contato'}</button>
            </form>

            <h3 className="text-2xl font-bold mb-6">Contatos Cadastrados</h3>

            {erro && <p role="alert" className="mb-4">{erro}</p>}

            {contatos.length === 0 && !erro && (
            <p className="mb-5">Nenhum contato cadastrado.</p>
            )}

        <div className="grid gap-4">

            {contatos.map((contato) => (
            <div key={contato.id} className="border border-white/30 rounded-xl p-6 flex justify-between items-center gap-4 max-sm:flex-col max-sm:items-start">

                <div>
                    <h4 className="text-xl font-bold">{contato.nome}</h4>
                    <p>{contato.parentesco}</p>
                    <p>{contato.telefone}</p>
                </div>

                <div className="flex gap-3">
                    <button onClick={() => selecionarContato(contato)} className="border border-sky-400 px-4 py-2 rounded-lg hover:bg-sky-500 cursor-pointer">Editar</button>

                    <button onClick={() => excluirContato(contato.id)} className="border border-white/40 px-4 py-2 rounded-lg hover:bg-red-700 cursor-pointer">Excluir</button>
                </div>

            </div>
        ))}

        </div>

        </div>

    </section>
    )
}

export default Contatos
