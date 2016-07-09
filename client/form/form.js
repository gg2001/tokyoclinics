import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './form.html';
import '../../imports/ui/style.css'

Template.form.events({
    'submit form': function(){
        event.preventDefault();
        var clinicNameVar = event.target.name.value;
        var clinicStatuspageVar = event.target.statuspage.value;
        var result = clinicStatuspageVar.indexOf("://") > -1;
        if (result == false) {
        	clinicStatuspageVar = "http://" + clinicStatuspageVar;
        }
        Meteor.call('clinicForm', clinicNameVar, clinicStatuspageVar)
        Router.go('/');
    }
});