module.exports = {
      async afterCreate(event) {
            strapi.services.cloudflare.cacheClear('paintings');
        },
        async afterUpdate(event) {
            strapi.services.cloudflare.cacheClear(files, 'paintings');
        },
};