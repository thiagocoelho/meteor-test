Router.configure({
  layoutTemplate: 'AppLayout'
});

Router.route('/', {
  name: 'app.index'
});

Router.route('/section', {
  name: 'app.section'
});

AppSectionController = RouteController.extend({
  waitOn: function(){
    return [
      Meteor.subscribe('items')
    ];
  },

  data: function(){
    return {
      items: function() {
        return Items.find()
      }
    }
  }
});

Items = new Mongo.Collection('items');

Meteor.startup(function(){
  if (Meteor.isClient) return;
  if (Items.find().count() > 0) {
    console.log('Count');
    return; 
  }

  for (var i = 0; i < 10; i++) {
    Items.insert({
      name: i
    })
  }
});