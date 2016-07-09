import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import '../imports/ui/style.css'

Template.main.events({
	'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    }
});

if(Meteor.isCordova){
	document.getElementById("cordovaLogout").innerHTML = '<a href="#" class="logout"><span class="glyphicon glyphicon-log-in"></span> Log out {{currentUser.emails.[0].address}}{{currentUser.services.google.email}}{{currentUser.services.facebook.email}}{{services.twitter.screenName}}</a>';
	document.getElementById("cordovaRegister").innerHTML = '<a href="../register"><span class="glyphicon glyphicon-user"></span> Register</a>';
	document.getElementById("cordovaLogin").innerHTML = '<a href="../login"><span class="glyphicon glyphicon-log-in"></span> Login</a>';
}