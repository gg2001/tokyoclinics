/*
Copyright (c) 2016 Gautham Elango

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './page.html';
import '../../imports/ui/style.css'

Template.page.events({
	'submit form': function(){
		var url = window.location.href
		var mongoID = url.substring(url.length - 17);
			var confirmation = confirm("Are you sure you want to remove this clinic?");
			if (confirmation == true) {
				Meteor.call('clinicRemove', mongoID)
				var currentClinic = document.getElementById("theClinic").innerHTML;
				if (currentClinic == "") {
					Router.go('/');
				}
			} else {}
	}

});

Template.page.onRendered(function(){
    document.getElementById("backButton").innerHTML = '<a href="../../"><span class="glyphicon glyphicon-chevron-left mainLinks"></span> Home</a>';
    if (document.getElementById("theClinic").innerHTML == '') {
    	Router.go('/');
    }
    if (!Meteor.isCordova) {
    	document.getElementById("cordovaSite").removeAttribute("onclick");
    }
    var url = window.location.href
	var mongoID = url.substring(url.length - 17);
	var thisClinic = Clinics.findOne({_id:mongoID}).name;
	document.title = thisClinic + ' - Tokyo Clinics'
});