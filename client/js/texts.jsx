import React from "react/addons";
import Router from "react-router";

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        var liStyle = {
            lineHeight: "30px"
        };
        return (
            <ul style={{listStyleType: "none", fontSize: "11px", paddingLeft: 0}}>
                <li style={liStyle}>Paisagens Periféricas, Memória e Recordação</li>
                <li style={liStyle}>Bascos</li>
                <li style={liStyle}>Paisagem, Indústria, Memória</li>
                <li style={liStyle}>Silentes</li>
                <li style={liStyle}>Territorialidade</li>
                <li style={liStyle}>Factos e Ficções, a propósito de Territorialidade.</li>
                <li style={liStyle}>Um diálogo com António Soares, a propósito de ‘Ocupação’.</li>
                <li style={liStyle}>Sobre a fotografia da Estação Internacional de Canfranc.</li>
                <li style={liStyle}>Dar a ver as cicatrizes da História</li>
            </ul>
        );
    }
});
