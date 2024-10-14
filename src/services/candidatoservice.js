const urlBase = "http://localhost:4000/candidato";

export async function gravar(candidato) {
    const resposta = await fetch(urlBase,
        {
            method: "POST",
            headers: { 
                        "Content-Type": "application/json",
                        
                     },
            credentials: 'include',
            body: JSON.stringify(candidato)
        });
    return await resposta.json();
}

export async function alterar(candidato) {
    const resposta = await fetch(urlBase,
        {
            method: "PUT",
            headers: { 
                "Content-Type": "application/json",
                
             },
            credentials: 'include',
            body: JSON.stringify(candidato)
        });
    return await resposta.json();
}

export async function excluir(candidato) {
    const resposta = await fetch(urlBase,
        {
            method: "DELETE",
            headers: { 
                "Content-Type": "application/json",
                
             },
            credentials: 'include',
            body: JSON.stringify(candidato)
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