Meteor.methods({
    'clinicForm': function(clinicNameVar, clinicStatuspageVar, latitudeVar, longitudeVar){
        Clinics.insert({
        	name: clinicNameVar,
            statuspage: clinicStatuspageVar,
            latitude: latitudeVar,
            longitude: longitudeVar
        });
    }
});

Meteor.methods({
    'clinicRemove': function(mongoID){
    	Clinics.remove(mongoID);
    }
});

Meteor.methods({
	'testMarkers': function(latitude, longitude){
		Markers.insert({
			lat: latitude,
			lgn: longitude
		})
	}
});
