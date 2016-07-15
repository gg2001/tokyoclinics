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

Meteor.methods({
    'updateTest': function(){
            Clinics.update({_id:"NXddnvM6uqYE2gAeT"},
                   {$set: {name:"Test3"}},
                   {multi: true}
    );
    }
})