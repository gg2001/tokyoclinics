import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './login.html';
import '../../imports/ui/style.css'

Template.login.onRendered(function(){

document.getElementById("backButton").innerHTML = '<a href="../"><span class="glyphicon glyphicon-chevron-left mainLinks"></span> Home</a>';
});

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
            if (error) {
                console.log(error.reason);
                document.getElementById("err").innerHTML = "Incorrect email or password";
            } else {
                Router.go('/');
                location.reload();
                location.reload();
                location.reload();
            }
        });
    }
});