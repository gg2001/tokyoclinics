import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './list.html';
import '../../imports/ui/style.css'

Template.list.helpers({
	'clinic': function(){
        return Clinics.find();
    }
});

Template.list.rendered = function() {
	document.getElementById("backButton").innerHTML = ''
}


