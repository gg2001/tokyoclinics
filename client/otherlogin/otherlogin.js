import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './otherlogin.html';
import '../../imports/ui/style.css'

Template.page.rendered = function() {
	document.getElementById("backButton").innerHTML = '<a href="../login"><span class="glyphicon glyphicon-chevron-left"></span> Back</a>';
}