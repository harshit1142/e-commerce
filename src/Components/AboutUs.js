import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

const AboutUs = () => {
    return (
        <div className="container my-5 about-us-container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="mb-4 text-primary">About Our Project</h1>
                    <p>
                        Welcome to our open-source project! We are a community-driven initiative aimed at building
                        innovative and impactful software solutions that are accessible to everyone. 
                    </p>
                    <p>
                        Our mission is to provide a collaborative platform where developers, designers, and 
                        enthusiasts can contribute, share ideas, and grow together. We believe in transparency, 
                        collaboration, and open standards, which is why all our work is freely available to 
                        the community.
                    </p>
                    <p>
                        Whether you're here to contribute code, help with documentation, or simply use the 
                        software, we welcome you to join us on this journey.
                    </p>
                    <a href="https://github.com/harshit1142/e-commerce" className="btn btn-primary">Contribute on GitHub</a>
                </div>
                <div className="col-md-6">
                    <img 
                        src="https://plus.unsplash.com/premium_photo-1661274033354-1847f286e957?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGFib3JhdGV8ZW58MHx8MHx8fDA%3D" 
                        alt="Open Source Collaboration" 
                        className="img-fluid rounded shadow" 
                    />
                </div>
            </div>

            <div className="row mt-5">
                <div className="col">
                    <h2 className="text-success">Our Values</h2>
                    <div className="accordion" id="valuesAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Open Collaboration
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#valuesAccordion">
                                <div className="accordion-body">
                                    We believe that collaboration fosters innovation and progress.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Community-Driven
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#valuesAccordion">
                                <div className="accordion-body">
                                    Our community drives the project forward with contributions and feedback.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Transparency
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#valuesAccordion">
                                <div className="accordion-body">
                                    We maintain transparency in our processes and decisions.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Innovation for All
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#valuesAccordion">
                                <div className="accordion-body">
                                    We strive to make our innovations accessible to everyone.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Inclusive Environment
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#valuesAccordion">
                                <div className="accordion-body">
                                    We promote an inclusive environment where everyone feels valued.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col">
                    <h2 className="text-success">Get Involved</h2>
                    <p>
                        We are always looking for contributors who are passionate about building open-source 
                        solutions. You can contribute by writing code, fixing bugs, improving documentation, or 
                        simply by using the software and reporting issues.
                    </p>
                    <p>
                        Visit our <a href="https://github.com/harshit1142/e-commerce" target="_blank" rel="noopener noreferrer" className="text-decoration-underline">GitHub repository</a> to find out how you can start contributing today!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
