import React from "react/addons";
import Router from "react-router";

export default React.createClass({
    mixins: [Router.State],

    componentDidMount: function() {
        var b = true;
        setInterval(function(){
            if (b) {
                $('#home-img').fadeOut(1650);
                b = false;
            } else {
                $('#home-img').fadeIn(1650);
                b = true;
            }
        }, 5000);
    },

    render: function() {
        var divStyle = {
            backgroundImage: "url('/img/LP-OCUPACAO.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            height: "600px"
        };

        var imgStyle = {
            width: "100%"
        };

        return (
            <div className="row">
                <div className="col-md-12">
                    <div style={divStyle}>
                        <img id="home-img" style={imgStyle} src="/img/LP-OCCUPATION.jpg" />
                    </div>
                </div>
            </div>
        );
    }
});
