import './Main.css';

const Main = () => {
    return (
        <main className="container">
            <div className="my-3 p-3 rounded main-container">

                <div className="text-center">
                    <small className="text-warning">Lavatech Technology</small>
                    <h2 className="mb-5 text-white lh-100">Contact Us</h2>
                </div>
                <form className="form-container text-white">

                    {/* Name Field */}
                    <div className="form-outline mb-4">
                        <label htmlFor="formName" className="form-label">Name</label>
                        <input
                            type="text"
                            id="formName"
                            className="form-control"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="form-outline mb-4">
                        <label htmlFor="formEmail" className="form-label">Email</label>
                        <input
                            type="email"
                            id="formEmail"
                            className="form-control"
                            placeholder="Enter your email address"
                        />
                    </div>

                    {/* Phone Number Field */}
                    <div className="form-outline mb-4">
                        <label htmlFor="formPhone" className="form-label">Phone Number</label>
                        <input
                            type="number"
                            id="formPhone"
                            className="form-control"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="form-outline mb-4">
                        <label htmlFor="formMessage" className="form-label">Message</label>
                        <textarea
                            id="formMessage"
                            className="form-control"
                            rows="4"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="button"
                        className="btn btn-primary btn-block mb-4"
                    >
                        Send
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Main;
