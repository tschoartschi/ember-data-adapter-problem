import DS from 'ember-data';
const {Model} = DS;

export default Model.extend({
    label: DS.attr('string'),
    items: DS.hasMany('catalog', {async: true})
});
