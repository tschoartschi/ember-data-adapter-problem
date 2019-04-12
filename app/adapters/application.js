import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: '/api',
    get headers() {
        // eslint-disable-next-line no-console
        console.log('in application headers');
    }
});
