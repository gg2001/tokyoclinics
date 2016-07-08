import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Template.main.events({
	'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    }
});

Template.list.onCreated(function listOnCreated() {

});

Template.list.helpers({
	'clinic': function(){
        return Clinics.find();
    }
});

Template.list.events({

});

Template.register.events({
    'submit form': function(){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        });
        Router.go('/');
    }
});

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
        console.log(error.reason);
        document.getElementById("err").innerHTML = "Incorrect email or password";
    } else {
        Router.go('/');
    }
		});
    }
});