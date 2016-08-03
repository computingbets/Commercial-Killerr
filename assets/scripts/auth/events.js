'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


const onSignUp = (event) => {
 event.preventDefault();
 let data = getFormFields(event.target);
 api.signUp(data)
 .done(ui.success)
 .fail(ui.failure);
};

const onSignIn = (event) => {
 event.preventDefault();
 //api.getUserIDPlaylist();
 let data = getFormFields(event.target);
 api.signIn(data)
 .done(ui.signInSuccess)
 .fail(ui.failure);
};

const onSignOut = (event) => {
 event.preventDefault();
 api.signOut()
 .done(ui.signOutSuccess)
 .fail(ui.failure);
};

const onChangePassword = (event) => {
 event.preventDefault();
 let data = getFormFields(event.target);
 api.changePassword(data)
 .done(ui.success)
 .fail(ui.failure);
};

const onNavSignUp = () => {
  console.log("We're inside onNavSignUp");
   $('#open-sign-up').modal('show');
};

const onNavSignIn = () => {
   $('#open-sign-in').modal('show');
};

const onNavOptions = () => {
   $('#open-options').modal('show');
};

const onChannelInput = function (event) {
   console.log("channel input");
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.channelInput(data)
  .done(ui.channelInputSuccess)
  .fail(ui.failure);
};

// const onCommercialUpdate = function () {
//   let channelTargeted = $('#indicator').text();
//   //get channel name from channelInput
//   console.log(channelTargeted);
//   let boolean = true;
//   //data.ads = true
//   //data.name = 111
//   event.preventDefault();
//   api.commercialUpdate(boolean, channelTargeted)
//   .done(ui.getChannelSuccess)
//   .fail(ui.failure);
// };

// const onProgramUpdate = function () {
//   event.preventDefault();
//   api.programUpdate()
//   .done(ui.success)
//   .fail(ui.failure);
// };

const onGetChannel = function (event) {
  console.log('get dat channel');
  event.preventDefault();
  //let data = getFormFields(event.target);
  let channelTargeted = $('#indicator').text();
  api.getChannel(channelTargeted)
  .done(ui.getChannelSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
 $('#sign-up').on('submit', onSignUp);
 $('#sign-in').on('submit', onSignIn);
 $('#sign-out').on('submit', onSignOut);
 $('#change-password').on('submit', onChangePassword);
 $('#nav-sign-up').on('click', onNavSignUp);
 $('#nav-sign-in').on('click', onNavSignIn);
 $('#nav-options').on('click', onNavOptions);
 $('#channel-input').on('submit', onChannelInput);
 $('body').on('click', '.commercial-button', onGetChannel);
 $('.program-button').on('click', onGetChannel);
 $('.extra-channel').on('submit', onGetChannel);
};

module.exports = {
 addHandlers,
};
