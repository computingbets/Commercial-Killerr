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
  //$('#indicator').html(data.channel.name);
  $('.button-body').html(handlebarsTemplate({data}));
  //$('.commercial-button').on('click', onGetChannel);

  console.log(data);

  //pass data.channel or data.id to onUpdateChannel
};

const updateChannelAdsSuccess = function () {
  $('#indicator').css("background-color", "red");
};

const updateChannelProgSuccess = function () {
  $('#indicator').css("background-color", "green");
};

// const getChannelAdsSuccess = function (data) {
//   //console.log(data);
//   event.preventDefault();
//
//   // api.updateChannelAds(data)
//   // .done(updateChannelAdsSuccess())
//   // .fail(failure());
// };

// const getChannelProgSuccess = function (data) {
//   //console.log(data);
//   event.preventDefault();

  // api.updateChannelProg(data)
  // .done(updateChannelProgSuccess())
  // .fail(failure());
//};

module.exports = {
 success,
 failure,
 signInSuccess,
 signOutSuccess,
 channelInputSuccess,
 // getChannelAdsSuccess,
 // getChannelProgSuccess,
 updateChannelAdsSuccess,
 updateChannelProgSuccess,
};
