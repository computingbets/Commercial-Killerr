'use strict';
const app = require('../app.js');

const signUp = (data) => {
  return $.ajax({
    url: app.host + "/sign-up",
    method: 'POST',
    data: data,
  });
};

const signIn = (data) => {

  return $.ajax({
    url: app.host + "/sign-in",
    method: 'POST',
    data: data,
  });
};

const signOut = function () {
  return $.ajax({
    url: app.host + "/sign-out/" + app.user.id,
    method: 'DELETE',
    headers: {
    Authorization: 'Token token=' + app.user.token,
    },
  });
};

const changePassword = function (data){
   return $.ajax({
    url: app.host + "/change-password/" + app.user.id,
    method: 'PATCH',
    headers: {
    Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const channelInput = function (data) {
  return $.ajax({
    url: app.host + "/channels",
    method: 'POST',
    data: data,
  });
};

const getChannelAds = function (channelTargeted) {
  console.log(channelTargeted);
  return $.ajax({
    url: app.host + "/channels/" + channelTargeted,
    method: 'GET',
  });
};

const getChannelProg = function (channelTargeted) {
  console.log(channelTargeted);
  return $.ajax({
    url: app.host + "/channels/" + channelTargeted,
    method: 'GET',
  });
};

const updateChannelAds = function (data) {
  console.log(data.channel.id);
  return $.ajax({
    url: app.host + "/channels/" + data.channel.id,
    method: 'PATCH',
    data: {
      channel: {
      "id": data.id,
      "name": data.name,
      "ads": true,
      }
    }
  });
};

const updateChannelProg = function (data) {
  console.log(data.channel.id);
  return $.ajax({
    url: app.host + "/channels/" + data.channel.id,
    method: 'PATCH',
    data: {
      channel: {
      "id": data.id,
      "name": data.name,
      "ads": false,
      }
    }
  });
};
// const getChannel =  function () {
//   return $.ajax({
//     url: app.host + "/channels",
//     method: 'GET',
//   });
// };


module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  channelInput,
  // commercialUpdate,
  getChannelAds,
  getChannelProg,
  updateChannelAds,
  updateChannelProg,
};
