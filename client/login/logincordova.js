/*
Copyright (c) 2016 Gautham Elango

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './logincordova.html';
import '../../imports/ui/style.css'

Template.logincordova.onRendered(function(){
    document.getElementById("backButton").innerHTML = '<a href="../"><span class="glyphicon glyphicon-chevron-left mainLinks"></span> Home</a>';
    if (!Meteor.isCordova){
        $(".loginTemplate").empty();
        document.getElementById("unauthorized").innerHTML = 'You are unauthorized';
    }
});

Template.logincordova.events({
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