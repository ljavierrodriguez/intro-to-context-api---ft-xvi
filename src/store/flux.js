const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: 'Luis',
            lastname: 'Rodriguez',
            saludo: 'Hola',
            posts: null,
        },
        actions: {
            getPosts: async () => {
                try {
        
                    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET', headers: { 'Content-Type': 'application/json' } });
                    const data = await response.json();
                    setStore({ posts: data });
        
                } catch (error) {
                    console.log(error)
                }
            },
            setMessage: () => {
                alert("Hola");
            }
        }
    }
}

export default getState;