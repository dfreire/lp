import React from "react/addons";
import Router from "react-router";

import PhotosPage from "./components/photos-page.jsx";

let col1 = [
    { src: "/img/collections/tm-126d0.jpg" },
    { src: "/img/collections/tm-374e0.jpg" },
    { src: "/img/collections/tm-99435.jpg" },
    { src: "/img/collections/tm-bff08.jpg" }
];

let col2 = [
    { src: "/img/collections/topografias.jpg" },
    { src: "/img/collections/tm-ed8a6.jpg" }
];

let col3 = [
    { src: "/img/collections/EDP.jpg" },
    { src: "/img/collections/BESarte.jpg" },
    { src: "/img/collections/rekalde.jpg" }
];

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <PhotosPage col1={col1} col2={col2} col3={col3} />
        );
    }
});
