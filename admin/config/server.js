module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  api_base_url: env('API_BASE_URL'),
  cloudflareCacheClearEnabled: env.bool('STRAPI_CLOUDFLARE_CACHECLEAR_ENABLED', false),
  cloudflareApiToken: env('STRAPI_CLOUDFLARE_API_TOKEN', ''),
  cloudflareZone: env('STRAPI_CLOUDFLARE_ZONE', ''),
  cloudflareApiUrlPrefix: env('STRAPI_CLOUDFLARE_API_URL_PREFIX', 
      'https://api.cloudflare.com/client/v4/zones/'),
});
