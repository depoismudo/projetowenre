var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {

        console.log('Received Event: ' + id);
    },

    capture: function() {

        alert('clicou em bater foto!');

        navigator.camera.getPicture(this.onSuccess, this.onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            allowEdit: true,
            sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
            encodingType: 0     // 0=JPG 1=PNG
        });
    },

    onSuccess: function(imageData) {

        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
        alert('success');
    },

    onFail: function(message) {
        alert('Fail: ' + message);
    }
};