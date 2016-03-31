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
        title: this.get('title') ? this.get('title') : "test",
        author: this.get('author') ? this.get('author') : "test",
        body: this.get('body') ? this.get('body') : "test",
        date: this.get('date') ? this.get('date') : "test",
        image: this.get('image') ? this.get('image') : "test"
      };
      this.sendAction('save', params);

    }
  }
});
