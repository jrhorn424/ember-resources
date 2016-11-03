import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['listr'],

  actions: {
    toggleItemDone (item) {
      this.sendAction('toggleItemDone', item);
    },

    deleteItem (item) {
      this.sendAction('deleteItem', item);
    },
  },
});
