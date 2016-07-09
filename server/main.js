import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if (Meteor.isClient) {
        return SEO.config({
            title: 'Tokyo Clinics',
            meta: {
                'description': 'All of Tokyo's clinics'
            },
            og: {
                'image': '' 
           }
        });
    }
});
