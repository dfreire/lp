import React from "react/addons";
import Router from "react-router";

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div style={{marginBottom: "30px"}}>
                        {this.props.col1.map((photo) => {
                            return (<img style={{width: "100%"}} src={photo.src} />);
                        })}
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{marginBottom: "30px"}}>
                        {this.props.col2.map((photo) => {
                            return (<img style={{width: "100%"}} src={photo.src} />);
                        })}
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{marginBottom: "30px"}}>
                        {this.props.col3.map((photo) => {
                            return (<img style={{width: "100%"}} src={photo.src} />);
                        })}
                    </div>
                </div>
            </div>
        );
    }
});
