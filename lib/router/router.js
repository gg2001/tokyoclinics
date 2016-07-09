Router.configure({
    layoutTemplate: 'main'
});
Router.route('/register');
Router.route('/login');
Router.route('/form');
Router.route('/clinic/:_id', {
	template: 'page',
	data: function(){
        var currentClinic = this.params._id;
        return Clinics.findOne({ _id: currentClinic });
    }
});
Router.route('/', {
    template: 'list'
});