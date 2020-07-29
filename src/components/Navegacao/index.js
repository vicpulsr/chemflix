import React from 'react';
import "./navegacao.css"

function Navegacao({links}) {

    let linksElement = [];
    for (let i=0; i < links.length; i++) {
       linksElement.push(
        <li>
             <a href={"#" + links[i].id}>{links[i].titulo}</a>
        </li>
       );
    }

    return (
        <div>
            <ul class="navegacao">
               {linksElement}
            </ul>
        </div>
    )
}

export default Navegacao;