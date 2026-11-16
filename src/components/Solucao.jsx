function Solucao(){
    return(
    <section id="solucao" className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,#125c92_0%,#073253_40%,#020911_100%)] text-white flex items-center px-10 py-20 max-sm:px-5">
        <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-5xl font-bold md-12 max-sm:text-3xl text-center p-6">Nossa Solução</h2>
                <h3 className="text-2xl font-semibold mb-8 max-sm:text-xl text-sky-500 text-center">Mais segurança e confiança no mundo digital.</h3>
                <p className="text-lg leading-relaxed mb-20 max-sm:text-base max-sm:mb-12">O Confere Aí é uma plataforma criada para ajudar pessoas idosas a identificar possíveis golpes digitais de maneira simples e acessível, oferecendo orientações antes que tomem decisões arriscadas.</p>

            <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
                <div className="border border-white/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3 hover:border-sky-400 hover:shadow-xl">
                    <h4 className="text-2xl font-bold mb-4 ">Verificar Mensagens</h4>
                    <p className="text-lg leading-relaxed text-gray-200">Analise mensagens suspeitas e identifique possíveis sinais de golpes.</p>
                </div>

                <div className="border border-white/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3 hover:border-sky-400 hover:shadow-xl">
                    <h4 className="text-2xl font-bold mb-4">Verificar Links</h4>
                    <p className="text-lg leading-relaxed text-gray-200">Confira possíveis sinais de risco em links antes de acessá-los.</p>
                </div>
                
                <div className="border border-white/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3 hover:border-sky-400 hover:shadow-xl">
                    <h4 className="text-2xl font-bold mb-4">Contatos de Confiança</h4>
                    <p className="text-lg leading-relaxed text-gray-200">Cadastre pessoas de confiança para pedir ajuda em situações suspeitas.</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Solucao