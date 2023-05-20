module.exports = (repositoryPersona) => {
    async function execute(params, body){
        
        params.Item = body;
        await repositoryPersona.setPersona(params);
        return { regsitrado : 1 };
    }

    return { execute }
}