import ApplicationSerializer from 'ga-wdi-boston.ember-resources/application/serializer';

export default ApplicationSerializer.extend({
  // serialize () {
  //   // switch back from text to content
  // },

  normalize (model, response) {
    response.text = response.content;
    delete response.content;

    return this._super(model, response);
  },
});
