const urlBase = "http://localhost:4000/candidatovaga";
const api = "http://localhost:4000";
export const getCandidates = async () => {
    const response = await api.get('/candidato');
    return response.data.listaCandidato;
  };
  
  export const getJobs = async () => {
    const response = await api.get('/vaga');
    return response.data.listaVaga;
  };



export async function gravar(candidatovaga) {
    const resposta = await fetch(urlBase,
        {
            method: "POST",
            headers: { 
                        "Content-Type": "application/json",
                        
                     },
            credentials: 'include',
            body: JSON.stringify(candidatovaga)
        });
    return await resposta.json();
}

export async function alterar(candidatovaga) {
    const resposta = await fetch(urlBase,
        {
            method: "PUT",
            headers: { 
                "Content-Type": "application/json",
                
             },
            credentials: 'include',
            body: JSON.stringify(candidatovaga)
        });
    return await resposta.json();
}

export async function excluir(candidatovaga) {
    const resposta = await fetch(urlBase,
        {
            method: "DELETE",
            headers: { 
                "Content-Type": "application/json",
                
             },
            credentials: 'include',
            body: JSON.stringify(candidatovaga)
        });
    return await resposta.json();
}

export async function consultar() {
    const resposta = await fetch(urlBase, 
        {
            method: "GET",
            headers: { 
                
             },
             credentials: 'include'
        });
    return await resposta.json();
}