import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './register.html';
import '../../imports/ui/style.css'

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
        location.reload();

    }
});

Template.register.onRendered(function(){
document.getElementById("backButton").innerHTML = '<a href="../"><span class="glyphicon glyphicon-chevron-left mainLinks"></span> Home</a>';
if (!Meteor.isCordova){
    $(".loginTemplate").empty();
    document.getElementById("unauthorized").innerHTML = 'You are unauthorized';
}
});
