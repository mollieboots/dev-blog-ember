import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAuthor: function(){
      var params = {
        name: this.get('name')
      };
      this.sendAction('saveAuthor', params);
    }
  }
});
