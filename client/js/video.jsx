// https://www.youtube.com/watch?v=_oeOwE-xlXQ

import React from "react/addons";
import Router from "react-router";

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <iframe style={{border: 0}}
                className="youtube-player" type="text/html"
                width="790" height="444"
                src="http://www.youtube.com/embed/_oeOwE-xlXQ"
                frameborder="0"
                allowFullScreen></iframe>
        );
    }
});
