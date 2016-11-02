import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      {
        title: 'Favorites',
        items: [
          { content: 'Cats' },
          { content: 'Dogs' },
          { content: 'Scotch' },
        ],
      }, {
        title: 'Todos',
        items: [
          { content: 'Learn Ember' },
          { content: 'Change Oil' },
          { content: 'Visit Portland' },
        ],
      },
    ];
  },
});
