import Ember from 'ember';

export default Ember.Component.extend({
  newPostForm: false,

  actions: {
    newPostFormShow() {
      this.set('newPostForm', true);
    },
    newPostFormHide() {
      this.set('newPostForm', false);
    },
    save: function() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
        date: this.get('date'),
        image: this.get('image')
      };
      this.sendAction('save', params);
    }
  }
});
