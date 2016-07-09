import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './clinicPage.html';
import '../../imports/ui/style.css'

Template.clinicPage.events({
	'submit form': function(){
		Router.go('/');
		var url = window.location.href
		var mongoID = url.substring(url.length - 17);
		Clinics.remove(mongoID);
		Router.go('/');
		var currentClinic = document.getElementById("theClinic").innerHTML;
		if (currentClinic == "") {
			Router.go('/');
		}
	}
});

Template.clinicPage.rendered = function() {
    // if(!this._rendered) { this._rendered = true }
    document.getElementById("backButton").innerHTML = '<a href="../"><span class="glyphicon glyphicon-chevron-left"></span> Back</a>';
}

Template.list.rendered = function() {
	document.getElementById("backButton").innerHTML = '';
}