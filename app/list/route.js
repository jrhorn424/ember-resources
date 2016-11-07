import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('list', params.list_id);
  },

  actions: {
    edit (list) {
      this.transitionTo('list.edit', list);
    },

    toggleItemDone (item) {
      item.toggleProperty('done');
      item.save();
    },

    deleteItem (item) {
      item.destroyRecord();
    },

    createItem (newItem) {
      let item = this.get('store').createRecord('item', newItem);
      item.save();
    },
  },
});
