import Ember from 'ember';

var User = Ember.Object.extend({
    simpleStore: Ember.inject.service(),
});

export default User;


