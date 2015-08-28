import React from "react/addons";
import Router from "react-router";

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <div className="row">
                <div className="col-md-4">
                    {this.props.col1.map((photo, i) => {
                        return (
                            <div key={i} style={{marginBottom: "30px"}}>
                                <img style={{width: "100%"}} src={photo.src} />
                            </div>
                        );
                    })}
                </div>
                <div className="col-md-4">
                    {this.props.col2.map((photo, i) => {
                        return (
                            <div key={i} style={{marginBottom: "30px"}}>
                                <img style={{width: "100%"}} src={photo.src} />
                            </div>
                        );
                    })}
                </div>
                <div className="col-md-4">
                    {this.props.col3.map((photo, i) => {
                        return (
                            <div key={i} style={{marginBottom: "30px"}}>
                                <img style={{width: "100%"}} src={photo.src} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
});
