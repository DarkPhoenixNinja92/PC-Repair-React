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
            <h3>Computer Repair</h3>
            <p>We know that when your computer, PC or laptop breaks you need a quick and easy computer repair, and you need a repair service that is fast, convenient and reliable.
                You use your computer for work, home, email, browsing, chatting, and for much more.
                When you need a computer repair service, you need it done quickly and properly. You need uBreakiFix.
                Here is what you get when you bring your computer, PC or laptop repair near me to uBreakiFix:
            </p>
            <h4>Free Diagnostics</h4>
            <p>The first thing our skilled technicians do is perform a free diagnostic exam to determine exactly what is wrong with your computer, PC or laptop.
                Once we have found the root of the problem, our technician will explain what is wrong and provide repair options, including cost and time estimates.
                If you choose to proceed, they will get started on your computer, PC or laptop repair right away.
            </p>
        </div>
    )
}

export default Homepage