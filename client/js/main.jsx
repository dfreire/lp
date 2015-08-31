import "../css/main.css";
import React from "react/addons";
import Router from "react-router";
import { DefaultRoute, Link, NotFoundRoute, Redirect , Route, RouteHandler} from 'react-router';

import Home from './home.jsx';
import Bio from './bio.jsx';
import Projects from './projects.jsx';
import Texts from './texts.jsx';
import Editions from './editions.jsx';
import Collections from './collections.jsx';
import Video from './video.jsx';
import Contacts from './contacts.jsx';

var routeList = [
    { name: "home",      path: "/home",      title: "HOME PAGE", handler: Home },
    { name: "biografia", path: "/biografia", title: "BIOGRAFIA", handler: Bio },
    { name: "projetos",  path: "/projetos",  title: "PROJETOS",  handler: Projects },
    { name: "textos",    path: "/textos",    title: "TEXTOS",    handler: Texts },
    { name: "edicoes",   path: "/edicoes",   title: "EDIÇÕES",   handler: Editions },
    { name: "colecoes",  path: "/colecoes",  title: "COLEÇÕES",  handler: Collections },
    { name: "video",     path: "/video",     title: "VÍDEO",     handler: Video }
];
// textos/paisagens-perifericas-memoria-e-recordacao
// textos/Bascos
// textos/paisagem-industria-memoria
// textos/silentes
// textos/territorialidade
// textos/factos-e-ficcoes-a-proposito-de-territorialidade
// textos/um-dialogo-com-antonio-soares-a-proposito-de-ocupacao
// textos/sobre-a-fotografia-da-estacao-internacional-de-canfranc
// textos/dar-a-ver-as-cicatrizes-da-historia

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
                                return (
                                    <li style={{marginBottom: "30px"}} key={route.name}>
                                        <Link to={route.path}>{route.title}</Link>
                                    </li>
                                );
                            })}
                            <li><a href="mailto:lp.luispalma@gmail.com">CONTACTO</a></li>
                        </ul>
                        <p style={{marginTop: "40px", fontWeight: "normal", fontSize: "11px"}}>© LUÍS PALMA</p>
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
            return (<Route key={route.name} name={route.name} path={route.path} handler={route.handler} />);
        })}
        {routeList.map(function(route, i) {
            var routeFrom = route.path + "/";
            var key = route.name + "_key";
            return (<Redirect key={key} from={routeFrom} to={route.path} />);
        })}
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.getElementById('rootPane'));
});
