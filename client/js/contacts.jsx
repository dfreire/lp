import React from "react/addons";
import Router from "react-router";
//import Video from "react-video";

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        //            https://youtu.be/U3JmIRb1tE0
        return (
            <iframe title="YouTube video player" class="youtube-player" type="text/html"
width="640" height="390" src="http://www.youtube.com/embed/U3JmIRb1tE0"
frameborder="0" allowFullScreen></iframe>
        );
    }
});
