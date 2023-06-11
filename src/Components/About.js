import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className='my-4'>About iNotebook</h1>
            <p>
                iNotebook is a web application built using React and Express that allows users to create, manage, and organize their notes efficiently. It provides a user-friendly interface for creating and storing notes securely.
            </p>
            <p>
                With iNotebook, you can easily create new notes, update existing ones, and delete notes that are no longer needed. The application also supports user authentication, allowing each user to have their own private set of notes.
            </p>
            <p>
                Whether you need to jot down ideas, make to-do lists, or store important information, iNotebook is here to help you stay organized and productive.
            </p>
            <h2>Key Features</h2>
            <ul>
                <li>Create, update, and delete notes</li>
                <li>User authentication and authorization</li>
                <li>User-friendly interface</li>
                <li>Secure storage of notes</li>
            </ul>
        </div>
    );
};

export default About;
