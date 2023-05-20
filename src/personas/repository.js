const dynamoClient = require('../database');

module.exports = class PersonaRepository {

    async getPersona(params){
        return await dynamoClient.scan(params).promise();
    }

    async setPersona(params){
        return await dynamoClient.put(params).promise();
    }

    async getPersonaById(params){
        return await dynamoClient.get(params).promise();
    }

}