import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './page.html';
import '../../imports/ui/style.css'

Template.page.events({
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

Template.page.rendered = function() {
    // if(!this._rendered) { this._rendered = true }
    document.getElementById("backButton").innerHTML = '<a href="../"><span class="glyphicon glyphicon-chevron-left"></span> Back</a>';
    if (document.getElementById("theClinic").innerHTML == '') {
    	Router.go('/');
    }
}