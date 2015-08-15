// https://www.youtube.com/watch?v=_oeOwE-xlXQ
// width="790" height="444"
// width="560" height="349"
// https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php


import React from "react/addons";
import Router from "react-router";

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <div className="videoWrapper">
                <iframe style={{border: 0}}
                    className="youtube-player" type="text/html"
                    src="http://www.youtube.com/embed/_oeOwE-xlXQ"
                    allowFullScreen></iframe>
            </div>

        );
    }
});
