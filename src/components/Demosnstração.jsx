function Demostracao(){
    return(
        <section id="demonstracao" className="min-h-screen bg-blue-950 text-white flex items-center px-10 py-20 max-sm:px-5">
            
            <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-16 max-lg:flex-col max-lg:gap-10">
                <div className="w-1/2 max-lg:w-full">
                    <h2 className="text-5xl font-bold mb-6 max-sm:text-3xl">Demonstração</h2>

                    <h3 className="text-2xl font-semibold mb-5 max-sm:text-xl">Conheça o Confere Aí na prática</h3>

                    <p className="text-lg leading-relaxed max-sm:text-base">Confira nosso protótipo e veja como o Confere Aí foi pensado para tornar a segurança digital mais simples e acessível.</p>
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