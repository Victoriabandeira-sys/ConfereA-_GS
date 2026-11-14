function Demostracao(){
    return(
        <section id="demonstracao" className="min-h-screen bg-[linear-gradient(135deg,#020911_0%,#062d4f_55%,#07182c_100%)] text-white flex items-center px-10 py-20 max-sm:px-5">
            
            <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-16 max-lg:flex-col max-lg:gap-10">
                <div className="w-1/2 max-lg:w-full border border-white/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3 hover:border-sky-400 hover:shadow-xl">
                    <h2 className="text-5xl font-bold mb-6 max-sm:text-3xl">Demonstração</h2>

                    <h3 className="text-2xl font-semibold mb-5 max-sm:text-xl text-sky-500">Conheça o Confere Aí na prática</h3>

                    <div className="mt-10 border-l-2 border-sky-400 pl-5">
                        <p className="text-sky-400 text-sm font-semibold tracking-widest mb-3">PROTÓTIPO EM AÇÃO</p>

                        <p className="text-gray-300 leading-relaxed">Veja como o Confere Aí facilita a identificação de situações suspeitas e o acesso a pessoas de confiança.</p>
                    </div>
                </div>
                
                <div className="w-[300px] max-w-full rounded-[40px] border-[8px] border-black bg-black p-1 shadow-2xl">
                    <div className="w-16 h-1 bg-gray-600 rounded-full mx-auto my"></div>
                    <div className="relative w-full aspect-[9/18] rounded-[28px] overflow-hidden">

                    <video src="/img/MicrosoftTeams-video.mp4" autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover scale-[1.15]"/></div>
                </div>
            </div>
        </section>
    )
}

export default Demostracao