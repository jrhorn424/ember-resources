import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['listr'],

  actions: {
    toggleItemDone (item) {
      return this.sendAction('toggleItemDone', item);
    },

    deleteItem (item) {
      return this.sendAction('deleteItem', item);
    },
  },
});
