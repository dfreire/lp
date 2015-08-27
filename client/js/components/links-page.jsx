import React from "react/addons";
import Router from "react-router";

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        var liStyle = {
            lineHeight: "30px"
        };
        return (
            <ul style={{listStyleType: "none", fontSize: "11px", paddingLeft: 0}}>
                {this.props.links.map((link) => {
                    return (<li style={liStyle}><a href={link.href}>{link.caption}</a></li>);
                })}
            </ul>
        );
    }
});
