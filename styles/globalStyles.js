import css from 'styled-jsx/css'

export default css.global
`

a {
    text-decoration: none !important;
    cursor: pointer;
    color: black;
    padding: 12px


}
a:hover {
    color: #0366d6;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    padding: 12px
}
body {
    margin: 0;
    padding: 0;
    color: #111;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    background-color: #fff;
}
h2 {
    color: #333;
    text-align: center;
}
label {
    display: flex;
    margin-bottom: 0.5rem;
    align-items: center;
    width: 100%;
}
form {
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
input,
textarea {
    font-family: monospace;
    flex: 1 1 0%;
    margin-left: 0.5rem;
    box-shadow: none;
    width: 100%;
    color: #000;
    background-color: transparent;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    outline: 0px;
    padding: 10px 25px;
}
button {
    display: block;
    margin-bottom: 0.5rem;
    color: #fff;
    border-radius: 5px;
    border: none;
    background-color: #000;
    cursor: pointer;
    transition: all 0.2s ease 0s;
    padding: 10px 25px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
}
button:hover,
button:active {
    transform: translate3d(0px, -1px, 0px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

nav {
    max-width: 100%;
}
nav > div {
    float: right;
}
nav > div > a {
    font-size: 1rem;
    font-weight: 330;
    margin-left: 1rem;
    margin-bottom: 1rem;
}
.logo {
    font-size: 2rem;
    color: #444;
    margin-left: 70px;
    margin-top: 30px;
    font-weight: 700;
    float: left;
}
nav:after {
    content: "";
    clear: both;
    display: table;
}
main {
    padding: 0rem;
    margin: 0 auto;
}
footer {
    text-align: center;
    font-size: 0.8rem;
    margin-top: 1rem;
    padding: 3rem;
    color: #888;
}

.navRight {
    max-width: 100%;
}
`