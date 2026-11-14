function Navbar() {
    return (
        <div className="min-h-screen bg-[#020911] bg-[radial-gradient(ellipse_at_center,#0a4778_0%,#04192b_50%,#020911_100%)]">
        
        <header className="w-full">
            <nav className="flex flex-wrap items-center justify-end gap-8 px-12 py-8 text-white font-medium max-lg:justify-center max-lg:gap-4 max-lg:p-5 max-[680px]:gap-3 max-[680px]:p-[15px]">
            <a href="#inicio" className="whitespace-nowrap hover:text-sky-300 max-[680px]:text-xs">Início</a>

            <a href="#problema" className="whitespace-nowrap hover:text-sky-300 max-[680px]:text-xs">O Problema</a>

            <a href="#solucao" className="whitespace-nowrap hover:text-sky-300 max-[680px]:text-xs">Nossa Solução</a>

            <a href="#demonstracao" className="whitespace-nowrap hover:text-sky-300 max-[680px]:text-xs">Demonstração</a>

            <a href="#pratica" className="whitespace-nowrap hover:text-sky-300 max-[680px]:text-xs">Veja na Prática</a>
            </nav>
        
        </header>
            <div className="max-w-7xl mx-auto min-h-[75vh] flex items-center justify-between gap-14 px-12 xl:scale-[1.10] max-lg:gap-6 max-lg:px-6 max-sm:flex-col max-sm:justify-center max-sm:py-12">
                <img src="/img/ConfereAi_logo.png" alt="Logo Confere Aí" className="w-[600px] max-w-full h-auto max-lg:w-[450px] max-sm:w-[300px]"/>

                <div className="max-w-md text-white max-lg:text-center">
                    <p className="text-sky-300 text-sm tracking-widest mb-5">SEGURANÇA DIGITAL SIMPLIFICADA</p>

                    <h1 className="text-4xl font-semibold leading-tight max-sm:text-3xl">Na dúvida,
                    <span className="text-sky-300">{' '}confira antes de clicar.</span></h1>

                    <p className="text-lg text-white/70 mt-6 leading-relaxed max-sm:text-base">Identifique sinais de golpes em mensagens e linkse navegue com mais segurança e confiança.</p>

                    <a href="#pratica" className="inline-block mt-8 border border-sky-400 px-8 py-3 rounded-full font-semibold hover:bg-sky-400/10 hover:-translate-y-1 transition-all duration-300">Experimente agora</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
