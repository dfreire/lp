import React from "react/addons";
import Router from "react-router";

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <img style={{width: "100%"}} src="/img/tm-c05dd.jpg" />
                </div>
                <div className="col-md-3">
                    <img style={{width: "100%"}} src="/img/tm-c70b2.jpg" />
                </div>
            </div>
        );
    }
});
