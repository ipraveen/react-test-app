import React from 'react';

function SearchItem({ firstName, lastName, email }) {
    return (
        <section className="card">
            <p>
                <b>First Name</b> <span>{firstName}</span>{' '}
            </p>
            <p>
                <b>Last Name</b> <span>{lastName}</span>{' '}
            </p>
            <p>
                <b>Email</b> <span>{email}</span>{' '}
            </p>
        </section>
    );
}

export default SearchItem;
