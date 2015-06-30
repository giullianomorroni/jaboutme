export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('title', "Hello world!");
  },
  
  model: function() {
     return Ember.ArrayController();
  }
});