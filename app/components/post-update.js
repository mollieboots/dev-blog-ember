import Ember from 'ember';

export default Ember.Component.extend({
  postUpdateForm: false,
  actions: {
    postUpdateFormShow() {
      this.set('postUpdateForm', true);
    },
    updatePostFormHide() {
      this.set('postUpdateForm', false);
    },
    updatePost: function(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
        date: this.get('date'),
        image: this.get('image')
      }
      this.sendAction('updatePost', post, params);
    }
  }
});
