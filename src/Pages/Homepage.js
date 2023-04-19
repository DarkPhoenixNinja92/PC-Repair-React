import './Homepage.css';

const Homepage = () => {
    return(
        <div className='main'>
            <h2 className='title1'>Fast, Reliable Computer Repair</h2>
            <p className='welcome'>
                Welcome to Marvel of Repairs - your one stop shop for all computer repair needs.
                We offer such services as hard drive data retrieval, frame repair, and virus removal.
                See our list of services for a complete list of what we offer as well as a list of per service prices.
            </p>
            <ul className='preview-list'>
                <li>Free, no-obligation diagnostic on all computers.</li>
                <li>Quality parts and training on computers and laptops.</li>
                <li>All repairs backed by a 1 Year Warranty.</li>
            </ul>
            <div className='reviews'>
                <div className='left'>
                    Star Ratings Here
                </div>
                <div className='right'>
                    <p>Whether you had a stellar experience or you think there’s room for improvement, please let us know.
                        We value your experience at uBreakiFix above anything else. We want to hear from you!</p>
                    <button>Write a Review</button>
                </div>
            </div>
        </div>
    )
}

export default Homepage