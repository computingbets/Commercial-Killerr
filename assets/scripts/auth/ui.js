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
  $('#indicator').html('Red for commercials. Green for program.')
  //console.log(data);
};

let points = 0;
const updateChannelAdsSuccess = function () {
points += 4;
  $('#indicator').css("background-color", "red");
  $('.points').css('border-color', 'blue').html('you have killed '+ points + ' minutes of commercials');
  if (points >= 16) {
    console.log('Steph!');
    $('.badges').css("background-image", 'url("https://sites.google.com/site/mapsapiicon/_/rsrc/1468759346685/home/steph%20curry%20head.png")');
    $('.badge-message').html('You earned a badge! You are the Steph Curry of commercial killing!');
  }
};

const updateChannelProgSuccess = function () {
  $('#indicator').css("background-color", "green");
};

const deleteChannelSuccess = function () {
  $('.button-body').html("");
  $('#indicator').html('selekt another channel').css("background-color", "white");
  $('#indicator').css('font-color', 'black');
};

module.exports = {
 success,
 failure,
 signInSuccess,
 signOutSuccess,
 channelInputSuccess,
 updateChannelAdsSuccess,
 updateChannelProgSuccess,
 deleteChannelSuccess,
};
