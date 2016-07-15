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
				Router.go('/');
				Meteor.call('clinicRemove', mongoID)
				Router.go('/');
				var currentClinic = document.getElementById("theClinic").innerHTML;
				if (currentClinic == "") {
					Router.go('/');
				}
			} else {}
	}

});

Template.page.onRendered(function(){
    document.getElementById("backButton").innerHTML = '<a href="../"><span class="glyphicon glyphicon-chevron-left mainLinks"></span> Home</a>';
    if (document.getElementById("theClinic").innerHTML == '') {
    	Router.go('/');
    }
    if (!Meteor.isCordova) {
    	document.getElementById("cordovaSite").removeAttribute("onclick");
    }
});