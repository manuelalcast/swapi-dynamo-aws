const fetch = require('node-fetch');
const { config } = require('../../config/index');
module.exports = () => {

    let headers = {};

    const getPelicula = async (req, res, next) => {
        try {

            headers['Content-Type'] = 'application/json';
            const response = await fetch(config.URL_BASE + '/films/', {
                headers: headers,
            });

            const body = await response.text();
            const objBody = JSON.parse(body);
            const arrayResult = objBody.results;
            var arrayResponse = [];

            for (let i = 0; i < arrayResult.length; i++) {
                const element = arrayResult[i];
                var objPelicula = {};

                objPelicula.titulo =  element.title;
                objPelicula.numero_episodio =  element.episode_id;
                objPelicula.texto_apertura =  element.opening_crawl;
                objPelicula.director =  element.director;
                objPelicula.productor =  element.producer;
                objPelicula.fecha_realizacion =  element.release_date;
                objPelicula.personajes =  element.characters;
                objPelicula.planetas =  element.planets;
                objPelicula.naves_estelares =  element.starships;
                objPelicula.vehiculos =  element.vehicles;
                objPelicula.especies =  element.species;
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

    return {
        getPelicula
    }

}