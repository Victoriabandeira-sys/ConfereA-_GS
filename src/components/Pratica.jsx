import { Link } from 'react-router-dom'
import useVerificacao from '../hooks/useVerificacao'

function Pratica() {
    const {
    mensagem,
    setMensagem,
    resultadoMensagem,
    link,
    setLink,
    resultadoLink,
    verificarMensagem,
    verificarLink
    } = useVerificacao()


return (
    <section id="pratica" className="min-h-screen bg-[radial-gradient(ellipse_at_center,#0d4776_0%,#082541_50%,#020911_100%)] text-white px-10 py-20 max-sm:px-5">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 text-center max-sm:text-3xl">Veja na Prática</h2>
            <p className="text-lg text-center mb-12 max-sm:text-base">Experimente algumas funcionalidades do Confere Aí e aprenda a identificar possíveis sinais de golpes.</p>

            <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
                <div className="border border-white/30 rounded-2xl p-8 max-sm:p-5">
                <h3 className="text-2xl font-bold mb-4">Verificar Mensagem</h3>
                <p className="mb-6">Recebeu uma mensagem suspeita? Cole o texto abaixo para verificar.</p>
                <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="Digite ou cole a mensagem aqui..." className="w-full h-36 bg-white text-blue-950 p-4 rounded-xl mb-5 outline-none"/>
                <button onClick={verificarMensagem} className="bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors cursor-pointer">Verificar Mensagem</button>
                
                {resultadoMensagem && (
                <p className="mt-6 p-4 border border-white/30 rounded-xl" role="status">{resultadoMensagem}</p>
                )}
            </div>

            <div className="border border-white/30 rounded-2xl p-8 max-sm:p-5">
                <h3 className="text-2xl font-bold mb-4">Verificar Link</h3>
                <p className="mb-6">Recebeu um link desconhecido? Verifique possíveis sinais de risco antes de abrir.</p>
                <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="https://exemplo.com" className="w-full bg-white text-blue-950 p-4 rounded-xl mb-5 outline-none"/>
                <button onClick={verificarLink} className="bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors cursor-pointer">Verificar Link</button>

                {resultadoLink && (
                <p className="mt-6 p-4 border border-white/30 rounded-xl" role="status">{resultadoLink}</p>
                )}
            </div>

            </div>
            
            <p className="text-sm text-blue-200 mt-8 text-center">Esta é uma verificação inicial de sinais de risco. Não compartilhe senhas, códigos ou dados pessoais.</p>
            
            <div className="text-center mt-12">
                <p className="text-lg mb-5">Quer entender como identificamos possíveis golpes?</p>

                <Link to="/criterios" className="inline-block border border-sky-400 text-white px-8 py-3 rounded-xl font-semibold hover:bg-sky-500 transition-all duration-300">Veja os critérios de verificação</Link>
            </div>
        </div>
    </section>
    )
}

export default Pratica