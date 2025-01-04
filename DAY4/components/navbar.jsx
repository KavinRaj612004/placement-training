import React from 'react';

const Navbar = (props) => {
    return (
        <header style={styles.header}>
            <nav style={styles.nav}>
                <div>
                    <h1 style={styles.heading}>{props.Name}</h1>
                </div>
                <div>
                    <ul style={styles.ul}>
                        <li style={styles.li}><a href="/" style={styles.link}>Home</a></li>
                        <li style={styles.li}><a href="/contact" style={styles.link}>Contact</a></li>
                        <li style={styles.li}><a href="/about" style={styles.link}>About</a></li>
                        <li style={styles.li}><a href="/project" style={styles.link}>Project</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#f4f4f4',
        padding: '10px 0',
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
    },
    heading: {
        margin: 0,
    },
    ul: {
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        gap: '20px',
    },
    li: {
        fontWeight: 'bold',
    },
    link: {
        textDecoration: 'none',
        color: 'red',
        fontWeight: 'bold',
    },
};

export default Navbar;
