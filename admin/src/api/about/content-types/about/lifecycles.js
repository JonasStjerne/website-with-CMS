module.exports = {
        async afterUpdate(event) {
            strapi.services.cloudflare.cacheClear('headers');
        },
};