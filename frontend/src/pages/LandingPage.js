import React from 'react';
import { Link } from 'react-router-dom';  // Assuming you're using react-router for navigation

function LandingPage() {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <h1>Welcome to Note Taker</h1>
                <p>Your trusted companion for organizing thoughts and tasks</p>
            </header>

            <main className="landing-content">
                <p>
                    Whether you're jotting down ideas, creating a to-do list, or simply 
                    capturing moments, Note Taker is here to make your life easier.
                </p>

                <Link to="/notes" className="cta-button">
                    Start Taking Notes
                </Link>
            </main>

            <footer className="landing-footer">
                © 2023 Note Taker Inc. All Rights Reserved.
            </footer>
        </div>
    );
}

export default LandingPage;
