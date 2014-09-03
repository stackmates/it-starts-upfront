/*
 * client/js/shared/services/alert.js
 */

// Todo setup up an index lookup for nice messages based on key from server

'use strict';

var _ = require('lodash');

var _messages = [];

function clearMessages() {
  _messages.length = 0;
}

function removeMessage(idx) {
  _messages.splice(idx, 1);
}

function getMessages() {
  return _messages;
}

function setMessages(type, messages) {
  clearMessages();
  _([messages])
      .flatten()
      .each(function (message) {
        _messages.push({
          type: type,
          message: message
        });
      });
}

function addMessage(type, message) {
  _messages.push({
    type: type,
    message: message
  });
}


module.exports = /*@ngInject*/
  function alert () {
    return {
      clearMessages: clearMessages,
      removeMessage: removeMessage,
      getMessages: getMessages,
      setMessages: setMessages,
      addMessage: addMessage
    };
  };
