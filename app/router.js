import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('lists');
  this.route('list', { path: '/lists/:list_id' });
  this.route('list.edit', { path: '/lists/:list_id/edit' });
});

export default Router;
