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
                <li style={liStyle}>Ocupação</li>
                <li style={liStyle}>Anatomia de um Sonho</li>
                <li style={liStyle}>Mapeamento, Memória, Política</li>
                <li style={liStyle}>From East to West</li>
            </ul>
        );
    }
});
