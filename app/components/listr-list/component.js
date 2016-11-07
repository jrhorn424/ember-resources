import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['listr'],

  form: {
    text: null,
    done: false,
  },

  actions: {
    toggleItemDone (item) {
      this.sendAction('toggleItemDone', item);
    },

    deleteItem (item) {
      this.sendAction('deleteItem', item);
    },

    createItem () {
      let newItem = this.get('form');
      newItem.list = this.get('list');

      this.sendAction('createItem', newItem);

      this.set('form.text', null);
    },

    edit () {
      this.sendAction('edit', this.get('list'));
    },
  },
});
