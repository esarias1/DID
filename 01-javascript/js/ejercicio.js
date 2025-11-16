async function cleanComments(){
    try{
        const comments = await (await fetch('https://jsonplaceholder.typicode.com/comments')).json();
        const filtrados = comments
            .filter((c) => c.body.toLowerCase().includes('qui'))
            .map(c => ({...c, email: c.email.toLowerCase()}))
            .sort((a,b) => {
                if (a.postId !== b.postId) {
                    return a.postId - b.postId;
                }
                return a.email.localeCompare(b.email);
            });
        console.log(filtrados);
        return filtrados;
    } catch(error) {
        console.error(`Error al  obtener los datos:`, error);
    }
}

cleanComments();


