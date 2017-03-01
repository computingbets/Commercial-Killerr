'use strict';
const app = require('../app.js');

const signUp = function (data) {
  // return new Promise ((resolve, reject) => {
  return $.ajax({
    url: app.host + "/sign-up",
    method: 'POST',
    data: data,
      // success: (response) => {
      // resolve(response);
      // },
      // error: (error) => {
      //   reject(error);
      // },
    });
  // });
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

const channelInput = function (data) {
  return new Promise((resolve, reject) => {
  return $.ajax({
    url: app.host + "/channels",
    method: 'POST',
    data: data,
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const getChannelAds = (channelTargeted) => {
  return new Promise((resolve, reject) => {
  //console.log(channelTargeted);
    return $.ajax({
      url: app.host + "/channels/" + channelTargeted,
      method: 'GET',
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const getChannelProg = function (channelTargeted) {
  return new Promise((resolve, reject) => {
  //console.log(channelTargeted);
  return $.ajax({
      url: app.host + "/channels/" + channelTargeted,
      method: 'GET',
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};


const updateChannelAds = function (data) {
  return new Promise((resolve, reject) => {
  //console.log(data.channel.id);
  return $.ajax({
    url: app.host + "/channels/" + data.channel.id,
    method: 'PATCH',
    data: {
      channel: {
      "id": data.id,
      "name": data.name,
      "ads": true,
      }
    },
    success: (response) => {
      resolve(response);
    },
    error: (error) => {
      reject(error);
      },
    });
  });
};

const updateChannelProg = function (data) {
  console.log(data.channel.id);
  return new Promise((resolve, reject) => {
  return $.ajax({
    url: app.host + "/channels/" + data.channel.id,
    method: 'PATCH',
    data: {
      channel: {
      "id": data.id,
      "name": data.name,
      "ads": false,
      }
    },
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const deleteChannel = function (channelDelete) {
  return new Promise((resolve, reject) => {
    return $.ajax({
      url: app.host + "/channels/" + channelDelete,
      method: 'DELETE',
        success: (response) => {
          resolve(response);
        },
        error: (error) => {
          reject(error);
      },
    });
  });
 };

 const indexChannels = function () {
   return $.ajax({
     url: app.host + "/channels",
     method: 'GET',
   });
 };

 const postVote = function (data) {
   return new Promise((resolve, reject) => {
   return $.ajax({
     url: app.host + "/votes",
     method: 'POST',
     data: {
       votes: {
       data: data,
     },
       success: (response) => {
         resolve(response);
       },
       error: (error) => {
         reject(error);

       },
     },
     });
   });
 };

 const updateVoteProg = function (data) {
   console.log(data.votes.id);
   return new Promise((resolve, reject) => {
   return $.ajax({
     url: app.host + "/votes/" + data.votes.id,
     method: 'PATCH',
     headers: {
      Authorization: 'Token token=' + app.user.token,
    },
     data: {
       vote: {
       "user_id": app.user.id,
       "channel_id": data.name,
       "ads": false,
       }
     },
       success: (response) => {
         resolve(response);
       },
       error: (error) => {
         reject(error);
       },
     });
   });
 };

 const updateVoteAds = function (data) {
   console.log(data.channel.id);
   return new Promise((resolve, reject) => {
   return $.ajax({
     url: app.host + "/votes/" + data.vote.id,
     method: 'PATCH',
     data: {
       vote: {
       //"userID": data.id,
       "channel_id": data.id,
       "ads": true,
       }
     },
       success: (response) => {
         resolve(response);
       },
       error: (error) => {
         reject(error);
       },
     });
   });
 };


module.exports = {
  signUp,
  signIn,
  signOut,
  channelInput,
  getChannelAds,
  getChannelProg,
  updateChannelAds,
  updateChannelProg,
  deleteChannel,
  indexChannels,
  updateVoteProg,
  updateVoteAds,
  postVote,
};
