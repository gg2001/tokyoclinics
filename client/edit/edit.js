import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './edit.html';
import '../../imports/ui/style.css'

Template.edit.events({
	'submit form': function(){
		Router.go('/');
		var url = window.location.href
		var mongoID = url.substring(url.length - 17);
		Meteor.call('clinicRemove', mongoID)
		Router.go('/');
		var currentClinic = document.getElementById("theClinic").innerHTML;
		if (currentClinic == "") {
			Router.go('/');
		}
	}
});

Template.edit.onRendered(function(){
    // if(!this._rendered) { this._rendered = true }
    document.getElementById("backButton").innerHTML = '<a href="../"><span class="glyphicon glyphicon-chevron-left mainLinks"></span> Home</a>';
    if (document.getElementById("theClinic").innerHTML == '') {
    	Router.go('/');
    }

    if (!Meteor.isCordova) {
    	document.getElementById("cordovaSite").removeAttribute("onclick");
    }
});