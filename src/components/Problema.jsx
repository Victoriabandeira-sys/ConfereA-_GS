function Problema() {
    return (
        <section id="problema" className="min-h-screen flex items-center bg-cover bg-center bg-no-repeat text-white px-10 py-20 max-sm:px-5 bg-[radial-gradient(ellipse_at_left,#145b91_0%,#082c50_45%,#020911_100%)]">
            <div className="w-full max-w-7xl mx-auto flex items-center gap-16 max-lg:flex-col max-lg:gap-10">

                <div className="w-1/2 max-lg:w-full">
                    <img src="/img/img_problema.webp" alt="Idoso recebendo possível golpe digital" className="w-full h-[450px] object-cover rounded-2xl max-lg:h-[350px] max-sm:h-[260px]"/>
                </div>

                <div className="border border-white/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3 hover:border-sky-400 hover:shadow-xl">
                    <h2 className="text-5xl font-bold mb-8 max-sm:text-3xl">O Problema</h2>
                    <h3 className="text-2xl font-semibold mb-6 max-sm:text-xl text-sky-500">Um golpe pode começar com uma simples mensagem.</h3>
                    <p className="text-lg leading-relaxed mb-8 max-sm:text-base">Mensagens falsas, links suspeitos e pedidos urgentes de dinheiro colocam a segurança digital de pessoas idosas em risco.</p>

                    <ul className="space-y-4 text-lg max-sm:text-base">
                        <li className="flex items-center gap-4 border border-white/30 bg-white/5 rounded-2xl px-5 py-4">
                            <span className="text-sky-400 font-bold">ⓘ</span>Falsos familiares pedindo dinheiro</li>
                        <li className="flex items-center gap-4 border border-white/30 bg-white/5 rounded-2xl px-5 py-4">
                            <span className="text-sky-400 font-bold">ⓘ</span>Links fraudulentos</li>
                        <li className="flex items-center gap-4 border border-white/30 bg-white/5 rounded-2xl px-5 py-4">
                            <span className="text-sky-400 font-bold">ⓘ</span>Ligações solicitando senhas e códigos</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Problema