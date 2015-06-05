import React from "react/addons";
import Router from "react-router";
import { DefaultRoute, Link, NotFoundRoute, Redirect , Route, RouteHandler} from 'react-router';

import Home from './home.jsx';

var routeList = [
{name: "home",      path: "/home",      title: "HOME PAGE", handler: Home},
{name: "biografia", path: "/biografia", title: "BIOGRAFIA"},
{name: "projetos",  path: "/projetos",  title: "PROJETOS"},
{name: "textos",    path: "/textos",    title: "TEXTOS"},
{name: "edicoes",   path: "/edicoes",   title: "EDIÇÕES"},
{name: "colecoes",  path: "/colecoes",  title: "COLEÇÕES"},
{name: "contactos", path: "/contactos", title: "CONTACTOS"}
];

var RootPane = React.createClass({
    render: function() {
        return (
            <div style={{fontFamily: "Verdana", width: "950px"}} className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 style={{marginTop: "10px", fontWeight: "normal", fontSize: "18px"}}>LUÍS PALMA</h1>
                    </div>
                </div>
                <div style={{marginTop: "60px"}} className="row">
                    <div className="col-md-2">
                        <ul style={{listStyleType: "none", fontSize: "11px", paddingLeft: 0}}>
                            {routeList.map(function(route, i) {
                                return (<li style={{marginBottom: "30px"}} key={route.name}>{route.title}</li>);
                            })}
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
        <Redirect from="/" to="/home" />
        {routeList.map(function(route, i) {
            return (<Route name={route.name} path={route.path} handler={route.handler} />);
        })}
        {routeList.map(function(route, i) {
            var routeFrom = route.path + "/";
            return (<Redirect from={routeFrom} to={route.path} />);
        })}

    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.getElementById('rootPane'));
});
