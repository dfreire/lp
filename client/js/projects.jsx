import React from "react/addons";
import Router from "react-router";

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div style={{marginBottom: "30px"}}>
                        <img style={{width: "100%"}} src="/img/tm-c05dd.jpg" />
                    </div>
                    <div style={{marginBottom: "30px"}}>
                        <img style={{width: "100%"}} src="/img/tm-d452d.jpg" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{marginBottom: "30px"}}>
                        <img style={{width: "100%"}} src="/img/6.jpg" />
                    </div>
                    <div style={{marginBottom: "30px"}}>
                        <img style={{width: "100%"}} src="/img/L1040611.jpg" />
                    </div>
                    <div style={{marginBottom: "30px"}}>
                        <img style={{width: "100%"}} src="/img/tm-3b09a.jpg" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{marginBottom: "30px"}}>
                        <img style={{width: "100%"}} src="/img/tm-dfd2b.jpg" />
                    </div>
                    <div style={{marginBottom: "30px"}}>
                        <img style={{width: "100%"}} src="/img/tm-c70b2.jpg" />
                    </div>
                </div>
            </div>
        );
    }
});
