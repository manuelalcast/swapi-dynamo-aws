const AWS = require('aws-sdk');
const { config } = require('../config/index');

AWS.config.update({
    region: 'us-east-1',
    accessKeyId: process.env.key_id,
    secretAccessKey: process.env.secret_id
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();

module.exports = dynamoClient;