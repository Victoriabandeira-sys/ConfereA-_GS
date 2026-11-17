import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Criterios() {
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <section className="min-h-screen bg-[linear-gradient(160deg,#020911_0%,#0c3559_50%,#020911_100%)] text-white px-10 py-16 max-sm:px-5">
        <div className="max-w-5xl mx-auto">
            <Link to="/#pratica" className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-sky-400/30 bg-sky-500/10 text-sky-300 font-medium text-sm hover:bg-sky-500/20 hover:border-sky-400 hover:text-white transition-all duration-300">
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                    Voltar para o início
            </Link>
            <h1 className="text-5xl font-bold mt-12 mb-5 max-sm:text-3xl text-center">Entenda nossa verificação</h1>
            <p className="text-lg mb-12 leading-relaxed text-center">Conheça os sinais que o Confere Aí utiliza paraajudar você a reconhecer possíveis golpes digitais.</p>
        <div className="border border-white/30 rounded-2xl p-8 mb-8 max-sm:p-5">

            <h2 className="text-3xl font-bold mb-5 max-sm:text-2xl">Como identificar mensagens suspeitas?</h2>
            <p className="text-lg mb-5">Nosso verificador procura palavras e expressões frequentemente associadas a tentativas de golpes.</p>
            <ul className="list-disc pl-6 space-y-4 text-lg">
                <li><strong>Urgência:</strong> mensagens que pressionam você a tomar uma decisão rapidamente.</li>
                <li><strong>Pedidos de dinheiro:</strong> solicitações de Pix ou transferências inesperadas.</li>
                <li><strong>Dados pessoais:</strong> pedidos de senhas, códigos ou informações confidenciais.</li>
                <li><strong>Links e bloqueios:</strong> mensagens dizendo que sua conta foi bloqueada e exigindo que você clique em algum endereço.</li>
            </ul>

            <p className="mt-6 text-sky-200">Exemplo: "Sua conta foi bloqueada! Faça um Pix urgente para regularizar."</p>

        </div>
            <div className="border border-white/30 rounded-2xl p-8 max-sm:p-5">
                <h2 className="text-3xl font-bold mb-5 max-sm:text-2xl">Como identificar links suspeitos?</h2>
                <p className="text-lg mb-5">Nosso verificador analisa algumas características do endereço informado.</p>
                <ul className="list-disc pl-6 space-y-4 text-lg">
                    <li><strong>Formato inválido:</strong> endereços que não possuem um formato de URL reconhecido.</li>
                    <li><strong>HTTP:</strong> links sem HTTPS são sinalizados por não utilizarem essa proteção na conexão.</li>
                    <li><strong>Símbolo @:</strong> pode ser usado para confundir sobre o destino real do endereço.</li>
                    <li><strong>Caracteres especiais no domínio:</strong>alguns endereços codificados podem merecer uma verificação adicional.</li>
                </ul>
                <p className="mt-6 text-sky-200">Atenção: mesmo um link com HTTPS pode ser fraudulento.</p>
            </div>
            
            <p className="text-center text-blue-200 mt-10">O Confere Aí realiza uma análise inicial baseada em regras. Nenhum resultado garante que uma mensagem ou site seja seguro.</p>
        </div>
        </section>
    )
}

export default Criterios