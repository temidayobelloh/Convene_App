import './landing-page.css';
const LandingPage =()=> {
    return <>
            <header className='container'>
            <h1> Welcome to Convene! </h1>
            <p>Where admins can create meetups and users can ask questions. LOL.</p>
            </header>
            <main>
            <section className='second-section'>
            <h2> About Convene </h2>
            <p>(Describe the app's features and its benefit here).</p>
            </section>
            <section className='third-section'>
            <p>Login Here, (remember that a login button component is to be placed below!)</p>
            {/* This is here the login button component would be placed*/}
            </section>
            </main>
            <footer>
            <p>© 2024 Convene. All rights reserved.</p>
            </footer>
    </>
};
 export default LandingPage;