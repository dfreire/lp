import React from "react/addons";
import Router from "react-router";

import LinksPage from "./components/links-page.jsx";

const links = [
    { href:"#", caption: "Paisagens Periféricas, Memória e Recordação" },
    { href:"#", caption: "Bascos" },
    { href:"#", caption: "Paisagem, Indústria, Memória" },
    { href:"#", caption: "Silentes" },
    { href:"#", caption: "Territorialidade" },
    { href:"#", caption: "Factos e Ficções, a propósito de Territorialidade." },
    { href:"#", caption: "Um diálogo com António Soares, a propósito de ‘Ocupação’." },
    { href:"#", caption: "Sobre a fotografia da Estação Internacional de Canfranc." },
    { href:"#", caption: "Dar a ver as cicatrizes da História" }
];

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <LinksPage links={links} />
        );
    }
});
