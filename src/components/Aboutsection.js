import React from 'react'

export const Aboutsection = () => {
    return (
        <div>
            {/* ======= About Section ======= */}
            <section id="about" className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                            <img src="assets\img\Todo app images.webp" className="img-fluid" alt />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                            <h3>“Subtracting from your list of priorities is as important as adding to it.”</h3>
                            {/* <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p> */}
                            <ul>
                                <li><i className="bi bi-check-circle" />  “Don’t just write a to-do list write a to-be list.”</li>
                                <li><i className="bi bi-check-circle" />  “To-Do lists help us break life into small steps.”</li>
                                <li><i className="bi bi-check-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                </div>
            </section>{/* End About Section */}

        </div>
    )
}
