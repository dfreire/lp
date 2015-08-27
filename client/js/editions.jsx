import React from "react/addons";
import Router from "react-router";

import LinksPage from "./components/links-page.jsx";

const links = [
    { href:"#", caption: "Ocupação" },
    { href:"#", caption: "Anatomia de um Sonho" },
    { href:"#", caption: "Mapeamento, Memória, Política" },
    { href:"#", caption: "From East to West" }
];

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <LinksPage links={links} />
        );
    }
});
