// webpack.config.js
let Encore            = require('@symfony/webpack-encore');
let GoogleFontsPlugin = require("google-fonts-webpack-plugin");

Encore
// the project directory where all compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create public/build/app.js and public/build/app.scss
    .addEntry('app', './assets/js/app.js')

    .addPlugin(new GoogleFontsPlugin({
        fonts: [
            { family: "Open Sans", variants: ["400", "600"] }
        ],
        "path": "fonts/"
    }))

    // Enable Vue loader
    .enableVueLoader()

    // enable source maps during development
    .enableSourceMaps(!Encore.isProduction())

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // show OS notifications when builds finish/fail
    .enableBuildNotifications()

    // create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning()

// allow sass/scss files to be processed
    .enableSassLoader(function(sassOptions) {}, {
       resolveUrlLoader: false
    })

;

// export the final configuration
module.exports = Encore.getWebpackConfig();
