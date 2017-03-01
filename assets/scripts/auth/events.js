'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


const onSignUp = (event) => {
 event.preventDefault();
 let data = getFormFields(event.target);
 api.signUp(data)
  .then(api.signIn(data))
    /// this is failing with No 'Access-Control-Allow-Origin'
    /// header is present on the requested resource.
    .done(ui.success)
    .fail(ui.failure);
 };

const onSignIn = (event) => {
 event.preventDefault();
 //api.getUserIDPlaylist();
 let data = getFormFields(event.target);
 api.signIn(data)
 .then(ui.signInSuccess)
 .then(ui.signInDisplayVotes)
 .then(api.postVote(data))
 .then(ui.postVoteSuccess)
 .fail(ui.failure);
};

const onSignOut = (event) => {
 event.preventDefault();
 api.signOut()
 .done(ui.signOutSuccess)
 .fail(ui.failure);
};

const onNavSignUp = () => {
  //console.log("We're inside onNavSignUp");
   $('#open-sign-up').modal('show');
};

const onNavSignIn = () => {
   $('#open-sign-in').modal('show');
};

const onNavOptions = () => {
   $('#open-options').modal('show');
};

const onChannelInput = function (event) {
   //console.log("channel input");
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.channelInput(data)
  .then(ui.channelInputSuccess)
  .catch(ui.channelInputFailure);
};

const onGetChannelAds = function (event) {
  //console.log('get dat channel');
  event.preventDefault();
  //let data = getFormFields(event.target);
  let channelTargeted = $('.commercial-button').text();
  api.getChannelAds(channelTargeted)
  .then(api.updateChannelAds)
  .then(ui.updateChannelAdsSuccess)
  .then(onIndexChannels)
  .catch(error => console.error(error));
};

const onGetChannelProg = function (event) {
  //console.log('get dat channel');
  event.preventDefault();
  let channelTargeted = $('.program-button').text();
  api.getChannelProg(channelTargeted)
  .then(api.updateChannelProg)
  .then(ui.updateChannelProgSuccess)
  .then(onIndexChannels)
  .catch(error => console.error(error));
};

const onDeleteChannel = function () {
  event.preventDefault();
  let channelDelete = $('.commercial-button').text();
  api.deleteChannel(channelDelete)
  .then(ui.deleteChannelSuccess)
  .catch(error => console.error(error));
};

const onIndexChannels = function () {
  console.log('eventsindex');
  event.preventDefault();
  api.indexChannels()
  .done(ui.indexSuccess)
  .fail(ui.failure);
};

const onUpdateVoteProg = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateVoteProg(data)
  .done(console.log('successVoteVote'))
  .fail(ui.failure);
};

const onUpdateVoteAds = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateVoteProg(data)
  .done(console.log('successVoteVoteAds'))
  .fail(ui.failure);
};

const addHandlers = () => {
 $('#sign-up').on('submit', onSignUp);
 $('#sign-in').on('submit', onSignIn);
 $('#options').on('submit', onSignOut);
 $('#nav-sign-up').on('click', onNavSignUp);
 $('#nav-sign-in').on('click', onNavSignIn);
 $('#nav-options').on('click', onNavOptions);
 $('#channel-input').on('submit', onChannelInput);
 $('body').on('click', '.commercial-button', onGetChannelAds);
 $('body').on('click', '.program-button', onGetChannelProg);
 $('.delete').on('click', onDeleteChannel);
 $('.index').on('click', onIndexChannels);
 $('.vote-program-button').on('click', onUpdateVoteProg);
 $('.vote-ads-button').on('click', onUpdateVoteAds);
};

module.exports = {
 addHandlers,
};
