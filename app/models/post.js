import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.belongsTo('author', {async: true}),
  body: DS.attr(),
  date: DS.attr(),
  image: DS.attr()
});
