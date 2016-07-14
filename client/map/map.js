import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './map.html';
import '../../imports/ui/style.css';

Template.map.onRendered(function() {
  GoogleMaps.load({
    key: "AIzaSyBWkWU-HMefXevQiEXuzpqG2BcOg3xM0vc"
  });
  //document.getElementById("backButton").innerHTML = '<a href="../"><span class="glyphicon glyphicon-chevron-left"></span> Back</a>';

});

Template.map.helpers({  
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(35.6895, 139.6917),
        zoom: 10
      };
    }
  }
});

Template.map.onCreated(function() {  
  GoogleMaps.ready('map', function(map) {
     
    });
});

