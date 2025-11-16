# Ejercicios: `fetch` + Promesas + `async/await` + métodos de arrays

## 1) Filtra y transforma posts

**Enunciado:** Descarga los posts y quédate solo con los de
`userId = 1`. Devuelve un array de títulos en mayúsculas.

``` js
async function getUppercaseTitlesByUser(userId = 1) {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await respuesta.json();
    const filtrados = posts.filter((post) => {
        return post.userId === userId;
    });
    const tratados = posts.filter((post) => post.userId === userId)
        .map((f) => ({...f, title: f.title.toUpperCase()}))
    console.log(tratados);
}

getUppercaseTitlesByUser(1);
```

------------------------------------------------------------------------

## 2) Suma de precios (reduce)

**Enunciado:** Descarga los productos de Fake Store API y calcula el
**precio total** de los productos con `category = 'electronics'`.

``` js
async function totalElectronics(category = "electronics") {
    try{
    const respuesta = await fetch('https://fakestoreapi.com/products');
    const productos = await respuesta.json();
    const filtrados = productos.filter((p) => p.category === category)
        .reduce((acu, p) => acu + p.price, 0);
    return console.log(`Precio total de productos de electrónica: $${filtrados.toFixed(2)}`);
    }catch(error){
        console.error('Error al obtener los productos', error);
    }
}

totalElectronics("electronics");
```

------------------------------------------------------------------------

## 3) Combinación con `Promise.all`

**Enunciado:** Descarga **usuarios** y **posts** en paralelo. Devuelve
una lista de objetos `{ userName, postsCount }`, ordenada
descendentemente por `postsCount`.

``` js
async function usersWithPostCount(){
    try{
        const [usersRes, postsRes] = await Promise.all([
            await fetch('https://jsonplaceholder.typicode.com/users'),
            await fetch('https://jsonplaceholder.typicode.com/posts')
        ]);
        const[users, posts] = await Promise.all([
            usersRes.json(),
            postsRes.json()
        ]);
        const resultado = users.map(user => {
            const numPosts = posts.filter(p => p.userId === user.id);
            return {
                userName: user.username,
                postCount: numPosts.length
            }
        });
        resultado.sort((a, b) => b.numPosts - a.numPosts);
        console.log(resultado);
        return resultado;

    } catch(error){
        console.error(`Error al  obtener los datos:`, error);
    }
}

usersWithPostCount();
```

## 4) Pipeline: buscar, filtrar, normalizar, ordenar

**Enunciado:** De JSONPlaceholder, toma **comments**, filtra los que
contengan la palabra `'qui'` en `body`, normaliza `email` a minúsculas,
y ordénalos por `postId` asc y después por `email` asc.

``` js
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
```