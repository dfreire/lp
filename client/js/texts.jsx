import React from "react/addons";
import Router from "react-router";

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <ul style={{listStyleType: "none", fontSize: "11px", paddingLeft: 0}}>
                <li>Paisagens Periféricas, Memória e Recordação</li>
                <li>Bascos</li>
                <li>Paisagem, Indústria, Memória</li>
                <li>Silentes</li>
                <li>Territorialidade</li>
                <li>Factos e Ficções, a propósito de Territorialidade.</li>
                <li>Um diálogo com António Soares, a propósito de ‘Ocupação’.</li>
                <li>Sobre a fotografia da Estação Internacional de Canfranc.</li>
                <li>Dar a ver as cicatrizes da História</li>
            </ul>
        );
    }
});
