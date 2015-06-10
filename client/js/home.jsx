import React from "react/addons";
import Router from "react-router";

export default React.createClass({
    mixins: [Router.State],

    componentDidMount: function() {
        var i = 0;
        var imgs = ["/img/LP-OCCUPATION.jpg", "/img/LP-OCUPACAO.jpg"];
        setInterval(function(){
            var img = imgs[i++];
            if (i === 2) {
                i = 0;
            }

            $('#homeImg').fadeOut(500, function() {
                console.log("go go go", img);
                $('#homeImg').attr("src", img);
                $('#homeImg').fadeIn(500);
            });
        }, 2000);
    },

    render: function() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <img id="homeImg1" style={{width: "100%"}} src="/img/LP-OCUPACAO.jpg" />
                    </div>
                </div>
            </div>
        );
    }
});
