import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: "url('/img/ConfereAi_fundo1.png')",}}
    >
      <header className="w-full">
        <nav className="flex items-center justify-end gap-8 px-12 py-8 text-white font-medium">
          <a href="#inicio" className="whitespace-nowrap hover:text-sky-300">Início</a>

          <a href="#problema" className="whitespace-nowrap hover:text-sky-300">O Problema</a>

          <a href="#solucao" className="whitespace-nowrap hover:text-sky-300">Nossa Solução</a>

          <a href="#demonstracao" className="whitespace-nowrap hover:text-sky-300">Demonstração</a>

          <a href="#pratica" className="whitespace-nowrap hover:text-sky-300">Veja na Prática</a>
        </nav>
      </header>
    </div>
  )
}

export default App
