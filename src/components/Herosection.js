import React from 'react'
import { Link } from 'react-router-dom'

export const Herosection = () => {
    return (
        <div>
            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex align-items-center">
                <div className="container position-relative" data-aos="fade-up" data-aos-delay={500}>
                    <h1>Welcome   ToDo</h1>
                    <h2>"Think in the morning. Act in the noon. Eat in the evening. Sleep in the night." ~ William Blake</h2>
                    <Link to="/signin" className="btn-get-started scrollto">Get Started</Link>
                </div>
            </section>{/* End Hero */}

        </div>
    )
}
