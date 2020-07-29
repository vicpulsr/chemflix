import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
import Navegacao from '../../components/Navegacao';


function Menu({links}) {
    return (
    <nav className="Menu">
        <Link to="/">
            <img className="Logo" src={Logo} alt="Logo da ChemFlix" />
        </Link>

        { window.location.pathname === "/" ? <Navegacao links={links}/> : "" }

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
        </Button>
    </nav>
    )
}

export default Menu;