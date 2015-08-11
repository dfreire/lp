// https://www.youtube.com/watch?v=_oeOwE-xlXQ

import React from "react/addons";
import Router from "react-router";

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <h1>Video</h1>
        );
    }
});
