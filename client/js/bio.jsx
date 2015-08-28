import React from "react/addons";
import Router from "react-router";

import TextPage  from "./components/text-page.jsx";

let paragraphs = [
    "Luís Palma (1960, Porto). Frequentou o Curso Superior de Fotografia da ESAP (Escola Superior Artística do Porto). Esteve ligado ao ensino e à divulgação da fotografia. Organizou o evento Fotoporto (Fundação de Serralves, 1988-1990), no qual foi também curador da exposição Fotografias do artista alemão Dieter Appelt. A convite da Arteleku e do Instituto Francês de Bilbau, participou no Seminário Internacional El Relato de Exposición (Le Récit d’ Exposition), Donostia (San Sebastián), País Basco, Espanha (1995). Foi bolseiro das seguintes instituições: Fundação Calouste Gulbenkian ― Serviço de Belas-Artes ― (1995); Ministério da Cultura / Centro Português de Fotografia em parceria com o Gipuzkoa Foru Aldundia, Donostia (San Sebastián), País Basco, Espanha (1997). No contexto da programação dos 700 anos da cidade de Bilbau, participou na exposição 7x7x7, Diputácion Foral Bizkaia, Sala Rekalde, Bilbau, País Basco, Espanha (2000). Colaborou na edição A Experiência do Lugar, Porto 2001, Capital Europeia da Cultura. A sua obra monográfica conta com os seguintes apoios: Fundação de Serralves: Paisagens Periféricas (1998); Fundação Cupertino de Miranda: Memória, Urbanismo, Periferia (1998); Centro Português de Fotografia: Paisagem, Indústria, Memória (1998); Fundação Ilídio Pinho: Territorialidade (2007); Ministério da Economia: Ocupação (2009); Guimarães 2012, Capital Europeia da Cultura: Obra de Papel (2012); Fundação EDP: Mapeamento, Memória, Política (2014). O livro Territorialidade foi seleccionado para a exposição The Best Book of the Year Award que se realizou na Biblioteca Nacional de Espanha, no âmbito da programação Photo España, Madrid (2008). Foi nomeado para o prémio BES Photo (edição 2008); o catálogo da exposição conta com um diálogo com o artista Joan Fontcuberta, “Factos e Ficções”, a propósito de Territorialidade. Por mais de duas décadas a sua obra tem sido exposta regularmente. Está representado em diversas colecções públicas e privadas."
]

export default React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <TextPage paragraphs={paragraphs} />
        );
    }
});
