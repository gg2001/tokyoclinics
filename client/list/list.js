/*
Copyright (c) 2016 Gautham Elango

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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
			//$("#cordovaClinic").after('<li id="cordovaLogout" class="theCordovaLogout"><a href="#" class="logout mainLinks"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>');
			$("#cordovaRegister").remove();
			$("#cordovaLogin").remove();
			var numItems = $('.theCordovaLogout').length;
			if (numItems > 1) {
				var elements = document.getElementsByClassName('theCordovaLogout');
				var requiredElement = elements[0];
				requiredElement.remove();
			}
		} else { /*
			$("#cordovaMapout").after('<li id="cordovaRegister" class="theCordovaRegister"><a href="../register" class="mainLinks"><span class="glyphicon glyphicon-user"></span> Register</a></li>');
			$("#cordovaMapout").after('<li id="cordovaLogin" class="theCordovaLogin"><a href="../login" class="mainLinks"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>');
			*/
			$("#cordovaLogout").remove();
			/*
			var numItems1 = $('.theCordovaRegister').length;
			if (numItems1 > 1) {
				var elements1 = document.getElementsByClassName('theCordovaRegister');
				var requiredElement1 = elements1[0];
				requiredElement1.remove();
			}
			var numItems2 = $('.theCordovaLogin').length;
			if (numItems2 > 1) {
				var elements2 = document.getElementsByClassName('theCordovaLogin');
				var requiredElement2 = elements2[0];
				requiredElement2.remove();
			}
		*/ } 
		document.getElementById("loginButtons-remove").innerHTML = '';
		$('.mainLinks').click(function(e){
	    	document.getElementById("mainButton").click();
		});
	}
});