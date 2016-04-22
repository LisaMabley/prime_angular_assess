// Imports
var app = angular.module('messageApp', []);

// Init controller
app.controller('MainController', function($http) {
  var cont = this;

  // Declare variables
  cont.hasMessage = false;
  cont.hasPrevMessages = false;
  cont.newMessage = '';
  cont.currentMessage = '';
  cont.prevMessageList = [];

  // Declare functions
  cont.addMessage = function() {

    // If message exists, it becomes a previous message
    if (cont.hasMessage) {
      cont.prevMessageList.push(cont.currentMessage);
      cont.hasPrevMessages = true;
    }

    // Entered message becomes current message
    cont.hasMessage = true;
    cont.currentMessage = cont.newMessage;
    cont.newMessage = '';
  }
});
