function Solucao(){
    return(
    <section id="solucao" className="min-h-screen bg-blue-950 text-white flex items-center px-10 py-20 max-sm:px-5">
        <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-5xl font-bold mdd-6 max-sm:text-3xl">Nossa Solução</h2>

                <h3 className="text-2xl font-semibold mb-5 max-sm:text-xl">Mais segurança e confiança no mundo digital.</h3>

                <p className="text-lg leading-relaxed mb-12 max-sm:text-base">O Confere Aí é uma plataforma criada para ajudar pessoas idosas a identificar possíveis golpes digitais de maneira simples e acessível, oferecendo orientações antes que tomem decisões arriscadas.</p>

            <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
                <div className="border border-white/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3 hover:border-sky-400 hover:shadow-xl">
                    <h4 className="text-2xl font-bold mb-4">Verificar Mensagens</h4>
                    
                    <p className="text-lg leading-relaxed">Analise mensagens suspeitas e identifique possíveis sinais de golpes.</p>
                </div>

                <div className="border border-white/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3 hover:border-sky-400 hover:shadow-xl">
                    <h4 className="text-2xl font-bold mb-4">Verificar Links</h4>
                    
                    <p className="text-lg leading-relaxed">Confira possíveis sinais de risco em links antes de acessá-los.</p>
                </div>
                
                <div className="border border-white/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3 hover:border-sky-400 hover:shadow-xl">
                    <h4 className="text-2xl font-bold mb-4">Contatos de Confiança</h4>
                    
                    <p className="text-lg leading-relaxed">Cadastre pessoas de confiança para pedir ajuda em situações suspeitas.</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Solucao