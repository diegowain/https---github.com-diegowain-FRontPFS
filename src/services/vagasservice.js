const urlBase = "http://localhost:4000/vaga";

export async function gravar(vaga) {
    const resposta = await fetch(urlBase,
        {
            method: "POST",
            headers: { 
                        "Content-Type": "application/json",
                        
                     },
            credentials: 'include',
            body: JSON.stringify(vaga)
        });
    return await resposta.json();
}

export async function alterar(vaga) {
    const resposta = await fetch(urlBase,
        {
            method: "PUT",
            headers: { 
                "Content-Type": "application/json",
                
             },
            credentials: 'include',
            body: JSON.stringify(vaga)
        });
    return await resposta.json();
}

export async function excluir(vaga) {
    const resposta = await fetch(urlBase,
        {
            method: "DELETE",
            headers: { 
                "Content-Type": "application/json",
                
             },
            credentials: 'include',
            body: JSON.stringify(vaga)
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