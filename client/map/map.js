import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './map.html';
import '../../imports/ui/style.css'

Template.map.onRendered(function() {
  GoogleMaps.load({
    key: "AIzaSyBWkWU-HMefXevQiEXuzpqG2BcOg3xM0vc"
  });
});

Template.map.helpers({  
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8
      };
    }
  }
});

Template.map.onCreated(function() {  
  GoogleMaps.ready('map', function(map) {
     console.log("I'm ready!");
  });
});