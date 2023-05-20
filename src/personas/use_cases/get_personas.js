module.exports = (repositoryPersona) => {
    async function execute(params){
        const persona = await repositoryPersona.getPersona(params);
        return persona.Items;
    }

    return { execute }
}