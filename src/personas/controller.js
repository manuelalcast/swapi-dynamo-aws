const fetch = require('node-fetch');
const { config } = require('../../config/index');
const GetPersona = require('./use_cases/get_persona');
const GetPersonas = require('./use_cases/get_personas');
const SetPersona = require('./use_cases/set_persona');


module.exports = (repositoryPersona) => {

    let headers = {};
    let TABLE_NAME = 'persona';

    let params = {
        TableName: TABLE_NAME
    }

    const getPersonaSwapi = async (req, res, next) => {
        try {

            headers['Content-Type'] = 'application/json';
            const response = await fetch(config.URL_BASE + '/people/', {
                headers: headers,
            });

            const body = await response.text();
            const objBody = JSON.parse(body);
            const arrayResult = objBody.results;
            var arrayResponse = [];

            for (let i = 0; i < arrayResult.length; i++) {
                const element = arrayResult[i];
                var objPelicula = {};

                objPelicula.nombre =  element.name;
                objPelicula.talla =  element.height;
                objPelicula.peso =  element.mass;
                objPelicula.color_cabello =  element.hair_color;
                objPelicula.color_piel =  element.skin_color;
                objPelicula.color_ojos =  element.eye_color;
                objPelicula.anio_nacimiento =  element.birth_year;
                objPelicula.genero =  element.gender;
                objPelicula.naves_estelares =  element.homeworld;
                objPelicula.peliculas =  element.films;
                objPelicula.especies =  element.species;
                objPelicula.vehiculos =  element.vehicles;
                objPelicula.naves_estelares =  element.starships;
                objPelicula.creado =  element.created;
                objPelicula.editado =  element.edited;
                objPelicula.url =  element.url;

                arrayResponse.push(objPelicula);
            }

            res.json(arrayResponse);

        } catch (error) {
            next(error);
        }
    }

    const getPersonas = async (req, res, next) => {
        try {

            const getPersonas = GetPersonas(repositoryPersona);
            const response = await getPersonas.execute(params);
            res.json(response);

        } catch (error) {
            next(error);
        }
    }

    const setPersona = async (req, res, next) => {
        try {

            const setPersona = SetPersona(repositoryPersona);
            const response = await setPersona.execute(params, req.body);
            res.json(response);

        } catch (error) {
            next(error);
        }
    }

    const getPersonaById = async (req, res, next) => {
        try {

            const getPersona = GetPersona(repositoryPersona);
            const response = await getPersona.execute(params, req.params.id);
            res.json(response);

        } catch (error) {
            next(error);
        }
    }

    return {
        getPersonaSwapi,
        getPersonas,
        setPersona,
        getPersonaById
    }

}