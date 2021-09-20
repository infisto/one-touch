module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "@/styles/variables.scss";
                @import "@/styles/mixins.scss";
                @import "@/styles/main.scss";
                @import "@/styles/ui.scss";
                `
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/one-touch/'
        : '/',
}