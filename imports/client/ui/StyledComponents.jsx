import React, {Component} from 'react';
import styled from 'styled-components';
import * as conf from './config.jsx';

let bloCol = (conf.filtres_posicio) === `columna` ? `"col mos mos"` : `"bq bq bq" "mos mos mos"`;

export const
    LO = styled.div`
        padding: 0px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas:
            "nb nb nb"
            "s s s"
            ". c sb"
            ${bloCol}
            "min fot tex"
            "ft ft ft"
        ;
        background-color: #5F4B8B;
        // background-image: url(/${conf.fonsPrincipal});
        // background-size: ${conf.backgroundSize};
        // background-repeat: ${conf.backgroundRepeat};
        // background-attachment: ${conf.backgroundAttachment};
    `,

    ProductsLayout = styled.div`
      display: grid;
      grid-template-columns: 25% auto;
      grid-template-rows: auto;
      grid-template-areas:
        "filtro content"
    `,

    MainNavBar = styled.nav`
        grid-area: nb;
        position: sticky;
        top: 0;
        height: min-height;
        background-color: rgba(232, 0, 121, 0.6);
        transition: all 1s ease;
        z-index: 100;
        font-family: 'Comfortaa', sans-serif;
      }
    `,

    PosicionFiltro = styled.div`
        grid-area: ${(conf.filtres_posicio) === "columna" ? "col" : "bq"};
    `,


    Filtro = styled.div.attrs({
      className: 'filtro col-sm-6'
    })`
        //width: 100%;
        // max-width: 300px;
        // background: rgba(255, 255, 255, 0.25);
        //margin: 2em 2em;
        //padding: 2em;
        borderRadius: 1em;
        position: sticky;
        position: -webkit-sticky;
        //top: 10%;
        display:inline-block;
        float:right;

        * {
            transition: all 1s ease;
        }

        @media (max-width: 500px) {
            //> :not(.mobile), .Select {
            .amaga {
                height: 0;
                margin: 0 !important;
                padding: 0;
                opacity: 0;
                visibility: hidden;
            }

            .mostra {
                margin: 2em 2em;
                //padding: 2em;
                height: auto;
                opacity: 1;
                visibility: visible;
            }

            .filtreC.mostra {
                margin: 0;
                margin-top: 3em;
            }
        }

        @media (min-width: 500px) {
            .mobile {
                height: 0;
                margin: 0;
                padding: 0;
                opacity: 0;
                visibility: hidden;
            }
        }
    `,

    PosicionProductos = styled.div`
      grid-area: mos;
    `,

    NavTitle = styled.h1`
        margin-top: 0;
        font-size: 1.5em;
        color: white;
        //text-shadow: 8px 5px 10px black;
        font-family: 'Comfortaa', sans-serif;
        font-weight: 700;

        @media (min-width:351px) and (max-width:500px) {
          font-size: 1.4em;
        }

        @media (max-width:350px) {
          font-size: 1.1em;
        }
    `,

    MainSlider = styled.div`
      grid-area: s;
      margin-top: -10%;
    `,

    MainContent = styled.div.attrs({
      //className: 'container'
      className: 'maincontent'
    })`
        grid-area: c;

        margin-top: 20px;
        margin-bottom: 20px;

        > h1 {
          font-family: 'Comfortaa', sans-serif;
          font-size: 2.5em;
          font-weight: 700;

          @media (min-width:351px) and (max-width:500px) {
          font-size: 1.4em;
          }

          @media (max-width:350px) {
          font-size: 1.1em;
          }
        }

        > h2 {
          font-family: 'Comfortaa', sans-serif;
          font-size: 2em;
          font-weight: 500;

          @media (min-width:351px) and (max-width:500px) {
          font-size: 1.4em;
          }

          @media (max-width:350px) {
            font-size: 1.1em;
          }
        }

        > h3 {
          font-family: 'Comfortaa', sans-serif;
          font-size: 1.7em;
          font-weight: 300;

          @media (min-width:351px) and (max-width:500px) {
            font-size: 1.2em;
          }

          @media (max-width:350px) {
            font-size: 0.9em;
          }
        }

        p {
          font-family: 'Comfortaa', sans-serif;
          font-size: 1.2em;
          font-weight: 100;

          @media (min-width:351px) and (max-width:500px) {
          font-size: 1em;
          }

          @media (max-width:350px) {
            font-size: 0.80em;
          }
        }
    `,

    aLink = styled('a')`
      padding: 15px;
      // padding-top: 7px !important;
      // padding-bottom: 7px !important;
      color: white;
      font-size: 1.25em;
	    text-shadow: 0 1px 0 rgba(255,255,255,.25);
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      //transform: scaleX(.9);
        &:hover, &:focus {
          color: rgb(255, 64, 129);

        }
    `,

    aBrand = styled.a.attrs({
      className: 'navbar-brand nombre-marca'
    })`
      //margin-bottom: 20px;

      h1 {
          transition: color 3s;
      }
    `,

    liNav = styled.li`
        > ${aLink}{
        &:hover, &:focus {
          background-color: transparent;
      }
    }
    `,

    footer = styled.footer.attrs({
      className: 'mdl-mega-footer'
    })`
      background-color: rgb(232, 0, 121);
    `
    ,

    Slider = styled.div`
      grid-area: s;
      margin-top: -120px;
      width:90%;
      height:50%;
    `
    ,
    social = styled.div`
      grid-area: sb;
      position: fixed; 
      right: -1%; 
      top: 200px; 
      z-index: 2000; 
    `
;
