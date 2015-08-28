import React from "react/addons";
import Router from "react-router";

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        let style = {
            fontSize: "11px",
            fontFamily: "Georgia",
            color: "#666666",
            lineHeight: "17px",
            textAlign: "justify"
        };
        return (
            <div style={style}>
                {this.props.paragraphs.map((paragraph) => {
                    return (<p>{paragraph}</p>);
                })}
            </div>
        );
    }
});
