import { useContext, useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Context } from "../store/AppContext";

const Home = () => {
    const { store, actions } = useContext(Context);

    /* const [posts, setPosts] = useState(null);

    const getPosts = async () => {
        try {

            const response = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET', headers: { 'Content-Type': 'application/json' } });
            const data = await response.json();
            setPosts(data);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log(saludo);
        getPosts();
    }, []) */


    useEffect(() => {
        console.log('Entrando a Home');
        return () => {
            console.log('Saliendo de Home');
        }

    }, [])

    return (
        <>
            {/* Header*/}
            <header className="bg-dark py-5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">
                                    A Bootstrap 5 template for modern businesses
                                </h1>
                                <p className="lead fw-normal text-white-50 mb-4">
                                    Quickly design and customize responsive mobile-first sites with
                                    Bootstrap, the world’s most popular front-end open source
                                    toolkit!
                                </p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a
                                        className="btn btn-primary btn-lg px-4 me-sm-3"
                                        href="#features"
                                    >
                                        Get Started
                                    </a>
                                    <a className="btn btn-outline-light btn-lg px-4" href="#!">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                            <img
                                className="img-fluid rounded-3 my-5"
                                src="https://dummyimage.com/600x400/343a40/6c757d"
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
            </header>
            {/* Features section*/}
            <section className="py-5" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h2 className="fw-bolder mb-0">A better way to start building.</h2>
                        </div>
                        <div className="col-lg-8">
                            <div className="row gx-5 row-cols-1 row-cols-md-2">
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <i className="bi bi-collection"></i>
                                    </div>
                                    <h2 className="h5">Featured title</h2>
                                    <p className="mb-0">
                                        Paragraph of text beneath the heading to explain the heading.
                                        Here is just a bit more text.
                                    </p>
                                </div>
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <i className="bi bi-building" />
                                    </div>
                                    <h2 className="h5">Featured title</h2>
                                    <p className="mb-0">
                                        Paragraph of text beneath the heading to explain the heading.
                                        Here is just a bit more text.
                                    </p>
                                </div>
                                <div className="col mb-5 mb-md-0 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <i className="bi bi-toggles2" />
                                    </div>
                                    <h2 className="h5">Featured title</h2>
                                    <p className="mb-0">
                                        Paragraph of text beneath the heading to explain the heading.
                                        Here is just a bit more text.
                                    </p>
                                </div>
                                <div className="col h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <i className="bi bi-toggles2" />
                                    </div>
                                    <h2 className="h5">Featured title</h2>
                                    <p className="mb-0">
                                        Paragraph of text beneath the heading to explain the heading.
                                        Here is just a bit more text.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonial section*/}
            <div className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-10 col-xl-7">
                            <div className="text-center">
                                <div className="fs-4 mb-4 fst-italic">
                                    "Working with Start Bootstrap templates has saved me tons of
                                    development time when building new projects! Starting with a
                                    Bootstrap template just makes things easier!"
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <img
                                        className="rounded-circle me-3"
                                        src="https://dummyimage.com/40x40/ced4da/6c757d"
                                        alt="..."
                                    />
                                    <div className="fw-bold">
                                        Tom Ato
                                        <span className="fw-bold text-primary mx-1">/</span>
                                        CEO, Pomodoro
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog preview section*/}
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="fw-bolder">From our blog</h2>
                                <p className="lead fw-normal text-muted mb-5">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                                    fugit ratione dicta mollitia. Officiis ad. <button className="btn btn-primary" onClick={actions.setMessage}>Click me</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">

                        {
                            !!store.posts &&
                            store.posts.length > 0 &&
                            store.posts.filter((item, index, arr) => index >= arr.length - 3)
                                .map((item) => (
                                    <PostCard {...item} key={item.id} />
                                ))
                        }
                    </div>
                    {/* Call to action*/}
                    <aside className="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
                        <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                            <div className="mb-4 mb-xl-0">
                                <div className="fs-3 fw-bold text-white">
                                    New products, delivered to you.
                                </div>
                                <div className="text-white-50">
                                    Sign up for our newsletter for the latest updates.
                                </div>
                            </div>
                            <div className="ms-xl-4">
                                <div className="input-group mb-2">
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={store.email}
                                        placeholder="Email address..."
                                        aria-label="Email address..."
                                        aria-describedby="button-newsletter"
                                        onChange={actions.handleChange}
                                    />
                                    <button
                                        className="btn btn-outline-light"
                                        id="button-newsletter"
                                        type="button"
                                    >
                                        Sign up
                                    </button>
                                </div>
                                <div className="small text-white-50">
                                    We care about privacy, and will never share your data.
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </>

    )
}

export default Home;