import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './list.html';
import '../../imports/ui/style.css'

Template.list.helpers({
	'clinic': function(){
        return Clinics.find();
    }
});

Template.list.onRendered(function(){
	document.getElementById("backButton").innerHTML = '';
	if (Meteor.isCordova) {
	if (Meteor.userId()) {
		$("#cordovaClinic").after('<li id="cordovaLogout"><a href="#" class="logout"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>');
		$("#cordovaRegister").remove();
		$("#cordovaLogin").remove();
		if ($('#cordovaLogout').length >= 2) {
			$("#cordovaLogout").remove();
		}
	} else {
		$("#cordovaMapout").after('<li id="cordovaRegister"><a href="../register"><span class="glyphicon glyphicon-user"></span> Register</a></li>');
		$("#cordovaMapout").after('<li id="cordovaLogin"><a href="../login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>');
		$("#cordovaLogout").remove();
	}
		document.getElementById("loginButtons-remove").innerHTML = '';
	}
	/*
	window.onload = function(){
		document.getElementById("cordovaLogout").innerHTML = '<a href="#" class="logout"><span class="glyphicon glyphicon-log-in"></span> Log out {{currentUser.emails.[0].address}}{{currentUser.services.google.email}}{{currentUser.services.facebook.email}}{{services.twitter.screenName}}</a>';
		document.getElementById("loginButtons-remove").innerHTML = '';
	}
	*/

/*else {

	document.getElementById("loginButtons-remove").innerHTML = '<a href="#">{{> loginButtons align="right"}}</a>';
	document.getElementById("cordovaLogout").innerHTML = '';
	document.getElementById("cordovaRegister").innerHTML = '';
	document.getElementById("cordovaLogin").innerHTML = '';

	}
	*/

	
});