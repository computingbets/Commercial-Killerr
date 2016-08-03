'use strict';

const app = require('../app.js');
const api = require('./api');
const handlebarsTemplate = require('../templates/display-update-buttons.handlebars');

const success = (data) => {
 if (data) {
   console.log(data);
 } else {
   console.log('Success');
 }
};

const failure = (error) => {
 console.error(error);
};

const signInSuccess = (data) => {
 app.user = data.user;
 console.log(app.user);
};

const signOutSuccess = () => {
 console.log('User signed out successfully');
 app.user = null;
};

const channelInputSuccess = function (data) {
  console.log(data.channel.name);
  $('#indicator').append(data.channel.name);
  $('.commercial-body').prepend(handlebarsTemplate({data}));
  //$('.commercial-button').on('click', onGetChannel);

  console.log(data);

  //pass data.channel or data.id to onUpdateChannel
};

const getChannelSuccess = function (data) {
  console.log('getChannelSuccess');
  event.preventDefault();

  api.updateChannel(data)
  .done(success())
  .fail(failure());
};

module.exports = {
 success,
 failure,
 signInSuccess,
 signOutSuccess,
 channelInputSuccess,
 getChannelSuccess,
};
