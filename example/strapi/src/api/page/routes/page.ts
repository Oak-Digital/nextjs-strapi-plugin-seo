/**
 * page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::page.page', {
  config: {
    find: {
      // @ts-ignore - this is specified in strapi-plugin-route-permissions
      roles: ['public'],
    },
    findOne: {
      // @ts-ignore - this is specified in strapi-plugin-route-permissions
      roles: ['public'],
    },
  }
});
