import React from "react/addons";
import Router from "react-router";

import PhotosPage from "./components/photos-page.jsx";

let col1 = [
    { src: "/img/projects/tm-c05dd.jpg" },
    { src: "/img/projects/tm-d452d.jpg" },
    { src: "/img/projects/tm-dfd2b.jpg" },
    { src: "/img/projects/tm-c70b2.jpg" },
    { src: "/img/projects/6.jpg" }
];

let col2 = [
    { src: "/img/projects/6.jpg" },
    { src: "/img/projects/L1040611.jpg" },
    { src: "/img/projects/tm-3b09a.jpg" },
    { src: "/img/projects/tm-c05dd.jpg" },
    { src: "/img/projects/tm-d452d.jpg" }
];

let col3 = [
    { src: "/img/projects/tm-dfd2b.jpg" },
    { src: "/img/projects/tm-c70b2.jpg" },
    { src: "/img/projects/6.jpg" },
    { src: "/img/projects/L1040611.jpg" },
    { src: "/img/projects/tm-3b09a.jpg" }
];

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <PhotosPage col1={col1} col2={col2} col3={col3} />
        );
    }
});
