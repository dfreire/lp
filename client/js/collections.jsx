import React from "react/addons";
import Router from "react-router";

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div style={{marginBottom: "30px"}}>
                        <img style={{width: "100%"}} src="/img/collections/tm-126d0.jpg" />
                    </div>
                    <div style={{marginBottom: "30px"}}>
                        <img style={{width: "100%"}} src="/img/collections/tm-374e0.jpg" />
                    </div>
                    <div style={{marginBottom: "30px"}}>
                        <img style={{width: "100%"}} src="/img/collections/tm-99435.jpg" />
                    </div>
                    <div style={{marginBottom: "30px"}}>
                        <img style={{width: "100%"}} src="/img/collections/tm-bff08.jpg" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{marginBottom: "30px"}}>
                        <img style={{width: "100%"}} src="/img/collections/topografias.jpg" />
                    </div>
                    <div style={{marginBottom: "30px"}}>
                        <img style={{width: "100%"}} src="/img/collections/tm-ed8a6.jpg" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{marginBottom: "30px"}}>
                        <img style={{width: "100%"}} src="/img/collections/EDP.jpg" />
                    </div>
                    <div style={{marginBottom: "30px"}}>
                        <img style={{width: "100%"}} src="/img/collections/BESarte.jpg" />
                    </div>
                    <div style={{marginBottom: "30px"}}>
                        <img style={{width: "100%"}} src="/img/collections/rekalde.jpg" />
                    </div>
                </div>
            </div>
        );
    }
});
