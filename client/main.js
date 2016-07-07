import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Template.list.onCreated(function listOnCreated() {

});

Template.list.helpers({
	'clinic': function(){
        return Clinics.find();
    }
});

Template.list.events({

});