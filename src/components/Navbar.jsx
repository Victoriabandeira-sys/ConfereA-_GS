function Navbar() {
    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat max-lg:min-h-0 max-lg:aspect-video max-lg:bg-[length:100%_auto] max-lg:bg-top "
        style={{backgroundImage: "url('/img/ConfereAi_fundo1.png')",}}>
        
        <header className="w-full">
            <nav className="flex flex-wrap items-center justify-end gap-8 px-12 py-8 text-white font-medium max-lg:justify-center max-lg:gap-4 max-lg:p-5 max-[680px]:gap-3 max-[680px]:p-[15px]">
            <a href="#inicio" className="whitespace-nowrap hover:text-sky-300 max-[680px]:text-xs">Início</a>

            <a href="#problema" className="whitespace-nowrap hover:text-sky-300 max-[680px]:text-xs">O Problema</a>

            <a href="#solucao" className="whitespace-nowrap hover:text-sky-300 max-[680px]:text-xs">Nossa Solução</a>

            <a href="#demonstracao" className="whitespace-nowrap hover:text-sky-300 max-[680px]:text-xs">Demonstração</a>

            <a href="#pratica" className="whitespace-nowrap hover:text-sky-300 max-[680px]:text-xs">Veja na Prática</a>
            </nav>
        </header>
        </div>
    )
}

export default Navbar
