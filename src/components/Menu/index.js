import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import { Link } from 'react-router-dom';
import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className = "Menu">
            <Link to="/">
                <img className = "Logo" src={Logo} alt="Aluraflix logo" />
            </Link>

            <Link className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Link>
            {/* <Button as={Link} className="ButtonLink" href="/">
                Novo Vídeo
            </Button> */}
        </nav>
    );
}

export default Menu;
