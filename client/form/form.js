import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './form.html';
import '../../imports/ui/style.css'

Template.form.onRendered(function(){
document.getElementById("backButton").innerHTML = '<a href="../"><span class="glyphicon glyphicon-chevron-left mainLinks"></span> Home</a>';
});

Template.form.events({
    'submit form': function(){
        event.preventDefault();
        var clinicNameVar = event.target.name.value;
        var clinicStatuspageVar = event.target.statuspage.value;
        var latitudeVar = event.target.latitude.value;
        var longitudeVar = event.target.longitude.value;
        var result = clinicStatuspageVar.indexOf("://") > -1;
        if (result == false) {
        	clinicStatuspageVar = "http://" + clinicStatuspageVar;
        }
        Meteor.call('clinicForm', clinicNameVar, clinicStatuspageVar, latitudeVar, longitudeVar)
        Router.go('/');
    }
});