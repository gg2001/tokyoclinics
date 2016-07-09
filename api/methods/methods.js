Meteor.methods({
    'clinicForm': function(clinicNameVar, clinicStatuspageVar){
        Clinics.insert({
        	name: clinicNameVar,
            statuspage: clinicStatuspageVar
        });
    }
});
