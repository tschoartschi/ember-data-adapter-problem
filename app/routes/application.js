import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'
export default Route.extend({
    store: service(),
    async model() {
        const catalog = await this.store.findRecord('catalog', 'catalog_id');
        // eslint-disable-next-line no-unused-vars
        const items = await catalog.items
        // eslint-disable-next-line no-unused-vars
        const item = await this.store.findRecord('item', 'item_id_2');
    }
});
