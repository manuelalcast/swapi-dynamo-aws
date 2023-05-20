require('dotenv').config();

const config = {
    URL_BASE: process.env.URL_BASE,
    PORT: process.env.PORT
};

module.exports = { config };
