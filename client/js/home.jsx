import React from "react/addons";
import Router from "react-router";

export default React.createClass({
    mixins: [Router.State],

    componentDidMount: function() {
        // http://stackoverflow.com/questions/21100191/css-background-image-changing-with-animation

        // "/img/LP-OCCUPATION.jpg"
        // setInterval(function(){
        //     $('#homeImg1').fadeOut(1500);
        //     $('#homeImg2').fadeIn(1500);
        // }, 4000);
    },

    render: function() {
        var divStyle = {
            height: "600px",
            backgroundImage: "url('/img/LP-OCUPACAO.jpg')",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat"
        };

        return (
            <div className="row">
                <div className="col-md-12">
                    <div style={divStyle}>
                    </div>
                </div>
            </div>
        );
    }
});
