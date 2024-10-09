const url = 'https ://raw.githubusercontent.com/paola/api/main/dados-globai'

async function vizualizarInformacoesGlobais() {}
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadads/1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo/ 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((pessoasConectadas/ pessoasNoMundo) * 100)
    const porcentagemConectada = ((pessoasConectadas/ pessoasNoMundo)*100).toFixed

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML= ` Vocễ sabia que o mundo tem <span>${pessoasNoMundo}bilhões

    const container= document.getElementById('graficos-container')
    container.appendChild(paragrafo)
                                                }

vizualizarInformacoesGlobais ()
