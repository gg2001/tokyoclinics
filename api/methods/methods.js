Meteor.methods({
    'clinicForm': function(clinicNameVar, clinicStatuspageVar){
        Clinics.insert({
        	name: clinicNameVar,
            statuspage: clinicStatuspageVar,
        });
    }
});

Meteor.methods({
    'clinicRemove': function(mongoID){
    	Clinics.remove(mongoID);
    }
});

Meteor.methods({
    'clinicUpdate': function(idVar, nameVar, statuspageVar){
        Clinics.update({_id:idVar},
           {$set: {name:nameVar, statuspage:statuspageVar}},
           {multi: true}
        );
    }
});