import './landing-page.css';
const LandingPage =()=> {
    return <>
            <nav className='container'>
            <img src='' alt='convene-app-logo'/>
            <ul className='container'>
            <li>Home</li>
            <li>About</li>
            <li>Questions</li>
            <li>Sign Up</li>
            </ul></nav>

            <section className='second-section'>
            <h2> Welcome to Convene! </h2>
            <p>Best Online platform to ask question, create discussions and the likes.</p>
            <div className='hero-button-wrapper'>
            {/*remember to create these buttons as a component*/}
            <button>LOGIN</button>
            <button>SIGN UP</button>
            </div>
            </section>
            <section className='third-section'>
             {/* This is here the MeetUp Component is placed*/}
            <h3>Meet-Up Name:</h3>
            <label htmlFor='date'>Date:</label>
            <input type='text' id='date'/>
            <label htmlFor='location'>Location:</label>
            <input type='text' id='location'/>
            </section>
            <section>
                {/*i think this aspect is going to be a component too, so this is where the Question component will be placed.*/}
                <p>Question Cards would be placed in this component. You might want to consider using backend to supply the cards. <br></br>Asper the questions would be displayed in a card.</p>
                </section>
            <footer>
            <p>©Copyright 2024 Convene. All rights reserved.</p>
            </footer>

            </>
            }
            export default LandingPage;