const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: 'Luis',
            lastname: 'Rodriguez',
            saludo: 'Hola',
            posts: null,
            users: null,
            email: 'lrodriguez@4geeks.co',
        },
        actions: {
            handleChange: (e) => {
                setStore({ email: e.target.value })
            },
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
                const { name, lastname } = getStore();
                alert(`Hola ${name} ${lastname}`);
            },
            getUsers: async () => {
                try {

                    const response = await fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET', headers: { 'Content-Type': 'application/json' } });
                    const data = await response.json();
                    setStore({ users: data });

                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
}

export default getState;