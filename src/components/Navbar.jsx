function Navbar() {
    return (
        <div id="inicio" className="min-h-screen bg-[#020911] bg-[radial-gradient(ellipse_at_center,#0a4778_0%,#04192b_50%,#020911_100%)]">
        
        <header className="w-full min-h-20 p-4 md:p-[2%] flex flex-wrap justify-between items-center bg-[#04192b] fixed top-0 z-[100] gap-4 overflow-y-autorun">
        <a href="#inicio" className="text-white no-underline text-xl font-bold">CONFERE AÍ</a>

        <nav className="hidden md:flex gap-4 lg:gap-[30px] list-none overflow-y-auto">
            <li><a href="#inicio" className="text-white no-underline transition-colors duration-300 whitespace-nowrap hover:text-sky-300">Home</a></li>
            <li><a href="#problema" className="text-white no-underline transition-colors duration-300 whitespace-nowrap hover:text-sky-300">Problema</a></li>
            <li><a href="#solucao" className="text-white no-underline transition-colors duration-300 whitespace-nowrap hover:text-sky-300">Nossa Solução</a></li>
            <li><a href="#demonstracao" className="text-white no-underline transition-colors duration-300 whitespace-nowrap hover:text-sky-300" >Demonstração</a></li>
            <li><a href="#pratica" className="text-white no-underline transition-colors duration-300 whitespace-nowrap hover:text-sky-300">Veja na prática</a></li>
            <li><a href="#contatos" className="text-white no-underline transition-colors duration-300 whitespace-nowrap hover:text-sky-300">Contatos de confiança</a></li>
            </nav>
        </header>

            <div className="max-w-7xl mx-auto min-h-screen pt-20 flex items-center justify-between gap-14 px-12 xl:scale-[1.10] max-lg:gap-6 max-lg:px-6 max-sm:flex-col max-sm:justify-center max-sm:py-24">
                <img src="/img/ConfereAi_logo.png" alt="Logo Confere Aí" className="w-[600px] max-w-full h-auto max-lg:w-[450px] max-sm:w-[300px]"/>

                <div className="max-w-md text-white max-lg:text-center">
                    <p className="text-sky-300 text-sm tracking-widest mb-5">SEGURANÇA DIGITAL SIMPLIFICADA</p>

                    <h1 className="text-4xl font-semibold leading-tight max-sm:text-3xl">Na dúvida,
                    <span className="text-sky-300">{' '}confira antes de clicar.</span></h1>

                    <p className="text-lg text-white/70 mt-6 leading-relaxed max-sm:text-base">Identifique sinais de golpes em mensagens e links e navegue com mais segurança e confiança.</p>

                    <a href="#problema" className="inline-block mt-8 border border-sky-400 px-8 py-3 rounded-full font-semibold hover:bg-sky-400/10 hover:-translate-y-1 transition-all duration-300">Conheça nossa solução</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar