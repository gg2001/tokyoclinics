import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './edit.html';
import '../../imports/ui/style.css'

Template.edit.events({
	'submit form': function(){
        event.preventDefault();
        var url = window.location.href
        var idVar = url.substring(url.length - 17);
        var nameVar = event.target.name.value;
        var statuspageVar = event.target.statuspage.value;
        var result = statuspageVar.indexOf("://") > -1;
        if (result == false) {
            statuspageVar = "http://" + statuspageVar;
        }
		Meteor.call('clinicUpdate', idVar, nameVar, statuspageVar);
        Router.go('/');
	}
});

Template.edit.onRendered(function(){
    document.getElementById("backButton").innerHTML = '<a href="../"><span class="glyphicon glyphicon-chevron-left mainLinks"></span> Home</a>';
});