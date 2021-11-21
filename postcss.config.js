module.exports = {
    plugins: {
        "autoprefixer": {
            "overrideBrowserslist": [
                 "ie >= 9", // Compatible con navegadores superiores a IE7
                 "Firefox >= 3.5", // Compatible con navegadores con números de versión de Firefox superiores a 3.5
                 "chrome  >= 35", // Compatible con navegadores con números de versión de Google superiores a 35,
                 "opera >= 11.5", // Compatible con navegadores con número de versión de Oppen superior a 11.5
            ]
        }
    }
};