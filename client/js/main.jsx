import React from "react/addons";
import Router from "react-router";
import { DefaultRoute, Link, NotFoundRoute, Redirect , Route, RouteHandler} from 'react-router';

import Home from './home.jsx';

var RootPane = React.createClass({
    render: function() {
        return (
            <div style={{fontFamily: "Verdana", width: "950px"}} className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 style={{marginTop: "10px", fontWeight: "normal", fontSize: "18px"}}>LUÍS PALMA</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <ul style={{marginTop: "30px", listStyleType: "none", fontSize: "11px", paddingLeft: 0}}>
                            <li style={{marginTop: "0px", paddingTop: "0px", marginBottom: "30px"}}>HOME PAGE</li>
                            <li style={{marginBottom: "30px"}}>BIOGRAFIA</li>
                            <li style={{marginBottom: "30px"}}>PROJETOS</li>
                            <li style={{marginBottom: "30px"}}>TEXTOS</li>
                            <li style={{marginBottom: "30px"}}>EDIÇÕES</li>
                            <li style={{marginBottom: "30px"}}>COLEÇÕES</li>
                            <li style={{marginBottom: "30px"}}>CONTACTOS</li>
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <RouteHandler/>
                    </div>
                </div>
            </div>
        );
    }
});

var routes = (
    <Route handler={RootPane} path="/">
        <Redirect from="/"      to="/home" />
        <Redirect from="/home/" to="/home" />
        <Route name="home" path="/home" handler={Home} />
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.getElementById('rootPane'));
});
