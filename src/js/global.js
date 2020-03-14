
app.global = {
    init: function(){
        // Load all global functions here
        app.global.welcomeMessage();
    },
    welcomeMessage: function() {
        console.log('Welcome to this new project!');
    }
}

// Initialize application
app.global.init();
