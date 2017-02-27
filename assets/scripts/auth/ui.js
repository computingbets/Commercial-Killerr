'use strict';

const app = require('../app.js');
const api = require('./api');
const handlebarsTemplate = require('../templates/display-update-buttons.handlebars');
const slaughterhouse = require('../templates/slaughterhouse.handlebars');

const success = (data) => {
 if (data) {
   console.log("success", data);
 } else {
   console.log('Success');
 }
 $('#open-sign-up').modal('hide');
 $('#sign-in-up-success').modal('show');
 };


const failure = (error) => {
 console.error(error);
};

const signInSuccess = (data) => {
 app.user = data.user;
 app.id = data.user._id;
 console.log(app.user);
 $('#open-sign-in').modal('hide');
 $('#sign-in-up-success').modal('show');
};

const signOutSuccess = () => {
 console.log('User signed out successfully');
 app.user = null;
};

const channelInputSuccess = function (data) {
  //console.log(data.channel.name);
  //$('#indicator').html(data.channel.name);
  $('.button-body').html(handlebarsTemplate({data}));
  $('#indicator').html('Red for commercials. Green for program.');
  //console.log(data);
};

const channelInputFailure = function () {
  console.log('InputFailure');
  $('#indicator').html('Channel already created. Click slaughterhouse for index');
};

let points = 0;
const updateChannelAdsSuccess = function () {
points += 4;
  $('#indicator').css("background-color", "red");
  $('.points').css('border-color', 'blue').html('you have killed '+ points + ' minutes of commercials');
  if (points >= 40) {
    //console.log('Steph!');
    $('.delusional').show();
    $('.badges').hide();
    //.css("background-image", 'url("https://soundcloud.com/deathgrimes/death-grimes-ehblivion")');
    $('.badge-message').html('Ooh, you\'re sounding delusional');
  } else if (points >= 28){
    $('.badges').css("background-image", 'url("https://s-media-cache-ak0.pinimg.com/originals/e3/11/d7/e311d71d0b123e7b546fa1d5502886c0.gif")');
    $('.badge-message').html('You earned a Killerr badge - Eye of the Killuminati!');
  } else if (points >= 16){
    $('.badges').css("background-image", 'url("https://sites.google.com/site/mapsapiicon/_/rsrc/1468759346685/home/steph%20curry%20head.png")');
    $('.badge-message').html('You earned a Killerr badge! You are the Steph Curry of commercial killing!');
  }
};

const updateChannelProgSuccess = function () {
  $('#indicator').css("background-color", "green");
};

const deleteChannelSuccess = function () {
  $('.button-body').html("");
  $('#indicator').html('select another channel').css("background-color", "white");
  $('#indicator').css('font-color', 'black');
};

const indexSuccess = function (data) {
  $('.slaughterhouseTitle').show();
  //console.log(data);
  //$('.slaughterhouseMessage').html('Default status is green/program unless ads/red specified');
  $('.slaughterhouseFill').html(slaughterhouse(data));
};

module.exports = {
 success,
 failure,
 signInSuccess,
 signOutSuccess,
 channelInputSuccess,
 channelInputFailure,
 updateChannelAdsSuccess,
 updateChannelProgSuccess,
 deleteChannelSuccess,
 indexSuccess,
};
