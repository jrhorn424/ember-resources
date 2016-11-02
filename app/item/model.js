import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  done: DS.attr('boolean'),
  list: DS.belongsTo('list'), // not a number (id), but a real object!
  // list_id: DS.attr('number') // OOOOH so close! but you're fucked
});
