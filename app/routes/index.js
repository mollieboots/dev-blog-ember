import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      authors: this.store.findAll('author')
    });
  },

  actions: {

    saveAuthor: function(params) {
      var newAuthor = this.store.createRecord('author', params);
      newAuthor.save();
    }
  }
});
