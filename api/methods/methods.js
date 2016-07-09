Meteor.methods({
    'clinicForm': function(clinicNameVar, clinicStatuspageVar){
        Clinics.insert({
        	name: clinicNameVar,
            statuspage: clinicStatuspageVar
        });
    }
});

Meteor.methods({
    'clinicRemove': function(mongoID){
    	Clinics.remove(mongoID);
    }
});
