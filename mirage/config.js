export default function () {

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
  
      Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
  
      this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
  
      http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
    */

    this.get('/api/catalogs/catalog_id', function () {
        return this.serialize({
            catalog: {
                id: 'catalog_id',
                label: 'Catalog label',
                links: {
                    items: '/catalogs/catalog_id/items'
                }
            }
        });
    });

    this.get('/api/catalogs/catalog_id/items', function () {
        return this.serialize({
            items: [{
                id: 'item_id',
                label: 'Item label',
                links: {
                    catalog: '/catalogs/catalog_id'
                }
            }]
        });
    });

    this.get('/api/items/item_id_2', function () {
        return this.serialize({
            item: {
                id: 'item_id_2',
                label: 'Item 2 label',
                links: {
                    catalog: '/catalogs/catalog_id'
                }
            }
        });
    });
}
