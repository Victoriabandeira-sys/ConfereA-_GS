import useContatos from '../hooks/useContatos'

function Contatos() {
    const {
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
} = useContatos()


return (
    <section id='contatos' className="min-h-screen bg-[radial-gradient(ellipse_at_bottom_left,#0d4a74_0%,#04192b_55%,#020911_100%)] text-white px-10 py-20 max-sm:px-5">
        <div className="max-w-5xl mx-auto border border-white/30 rounded-2xl p-8 max-sm:p-5">
            <h2 className="text-4xl font-bold mb-5 max-sm:text-3xl text-center">Contatos de Confiança</h2>
            <p className="text-lg mb-10 text-sky-500 text-center">Cadastre pessoas de confiança para pedir ajuda quando receber algo suspeito ou estiver em alguma emergência.</p>

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

        <div className="flex justify-center items-center py-8 px-6">
            <a href="#inicio" className="rounded-full transition duration-300 no-underline font-semibold text-white bg-sky-600/20 px-12 py-3.5 border border-sky-400 hover:bg-sky-400/20 hover:text-sky-300">Voltar ao início </a>
        </div>

    </section>
    )
}

export default Contatos