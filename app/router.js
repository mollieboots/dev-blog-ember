import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('post', {path: '/post/:post_id'} );
  this.route('author', {path: '/author/:author_id'});
});

export default Router;
