import { useState } from 'react'

function useVerificacao() {
    const [mensagem, setMensagem] = useState('')
    const [resultadoMensagem, setResultadoMensagem] = useState('')

    const [link, setLink] = useState('')
    const [resultadoLink, setResultadoLink] = useState('')

function verificarMensagem() {
    if (mensagem.trim() === '') {
    setResultadoMensagem('Digite uma mensagem para verificar.')
    return
}

const texto = mensagem.toLowerCase()

const palavrasSuspeitas = [
    'pix', 'senha', 'urgente', 'clique',
    'bloqueado', 'bloqueada', 'código',
    'codigo', 'transferência', 'transfira'
]

const suspeita = palavrasSuspeitas.some(palavra =>
    texto.includes(palavra)
)

if (suspeita) {
  setResultadoMensagem('Atenção! Esta mensagem apresenta possíveis sinais de golpe. Não envie dinheiro ou informações pessoais sem confirmar.')
    } else {setResultadoMensagem('Não encontramos sinais comuns de golpe nesta mensagem. Mesmo assim, isso não garante que ela seja segura.'
        )
    }
}

function verificarLink() {
    if (link.trim() === '') {
        setResultadoLink('Digite um link para verificar.')
    return
    }
    try {
        const endereco = new URL(link.trim())
            if (endereco.protocol !== 'https:' && endereco.protocol !== 'http:') {setResultadoLink('Este endereço não é um link HTTP válido.')
    return
    }

        if (
            endereco.protocol === 'http:' ||
            endereco.hostname.includes('xn--') ||
            link.includes('@')
        ) {
            setResultadoLink(
            'Atenção! Encontramos possíveis sinais de risco neste link. Evite acessá-lo sem confirmar a origem.'
            )
        } else {
            setResultadoLink(
            'Não encontramos alguns sinais comuns de risco. Isso não garante que o link seja seguro.'
            )
        }
        } catch {
        setResultadoLink(
            'Link inválido. Digite um endereço completo, começando com https://.'
        )
        }
    }

    return {
        mensagem,
        setMensagem,
        resultadoMensagem,
        link,
        setLink,
        resultadoLink,
        verificarMensagem,
        verificarLink
    }
}

export default useVerificacao
