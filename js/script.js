/* global $ */

// BELOW Update the songs array with four of your favorites songs.
/*
let song = ["Mood", "Rockstar", "Id Rather Sleep", "Hot Rod"];
let image = ["https://i2.wp.com/i.ytimg.com/vi/2fvw0TkENHM/0.jpg",
              "https://i1.sndcdn.com/artworks-9pybcFAgzK0LjsqY-ugjNeg-t500x500.jpg",
              "https://i.ytimg.com/vi/c4j9Z9bwBBU/maxresdefault.jpg",
              "https://images.genius.com/03052530458dc3060cd37811fb230400.1000x1000x1.jpg"];
let artist = ["24kGoldn","DaBaby","Kero Kero Bonito","Dayglow"];
let songLengths = ['2:20', '3:01', '1:55', '3:26'];
let links = ["https://www.youtube.com/watch?v=GrAchTdepsU","https://www.youtube.com/watch?v=4PDpVNKZgKg","https://www.youtube.com/watch?v=c4j9Z9bwBBU","https://www.youtube.com/watch?v=tsJXoqvmgzM"];
*/

let songs = [
  {
    name: "Mood",
    image: "https://i2.wp.com/i.ytimg.com/vi/2fvw0TkENHM/0.jpg",
    artist: "24kGoldn",
    length: "2:20",
    link: "https://www.youtube.com/watch?v=GrAchTdepsU"
  },
  {
    name: "Rockstar",
    image:
      "https://i1.sndcdn.com/artworks-9pybcFAgzK0LjsqY-ugjNeg-t500x500.jpg",
    artist: "DaBaby",
    length: "3:01",
    link: "https://www.youtube.com/watch?v=4PDpVNKZgKg"
  },
  {
    name: "Id Rather Sleep",
    image: "https://i.ytimg.com/vi/c4j9Z9bwBBU/maxresdefault.jpg",
    artist: "Kero Kero Bonito",
    length: "1:55",
    link: "https://www.youtube.com/watch?v=c4j9Z9bwBBU"
  },
  {
    name: "Hot Rod",
    image:
      "https://images.genius.com/03052530458dc3060cd37811fb230400.1000x1000x1.jpg",
    artist: "Dayglow",
    length: "3:26",
    link: "https://www.youtube.com/watch?v=tsJXoqvmgzM"
  }
];


$("#add").click(function() {
  //$(".column").html("");
  addSongInfo();
  displaySongInfo();
  $("input").val("");
  $(".playlist").html(`Playlist (${songs.length} songs)`);
});

displaySongInfo();

$("#remove").click(function() {
  removeSongInfo();
  displaySongInfo();
});

//shuffle
$("#shuffle").click(function() {
  //$(".column").html("");
  songs = songs.sort(() => Math.random() - 0.5);
  displaySongInfo();
});

//recommend a song
$("#choose").click(function(){
  let mood = $("#mood").val()
  if(mood === "happy"){
    $("#answer").text("We recommend you to listen to Mood by 24kGoldn")
  } else if (mood === "hype"){
    $("#answer").text("We recommend you to listen to Rockstar by DaBaby")
  } else if ( mood === "sleepy"){
    $("#answer").text("We recommend you to listen to I'd Rather sleep by Kero Kero Bonito")
  } else if ( mood === "nostalgic"){
    $("#answer").text("We recommend you to listen to Hot Rod by Dayglow")
  }else {
    $("#answer").text("We recommend you to listen to anything you like")
  }
});

//remove a song
function removeSongInfo() {
  songs.splice($("#removeInput").val() - 1, 1);
}

// BELOW write the code to add new items to each of the arrays.
function addSongInfo() {
  let song = {
    name: $("#song").val(),
    image: $("#image").val(),
    artist: $("#artist").val(),
    length: $("#length").val(),
    link: $("#link").val()
  };
  songs.push(song);
}

function displaySongInfo() {
  // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
  $(".column").html("");
  for (let s of songs) {
    $("#images").append(`<img src = ${s.image}>`);
  }
  for (let s of songs) {
    $("#songs").append("<p>" + s.name);
  }
  for (let s of songs) {
    $("#artists").append("<p>" + s.artist);
  }
  for (let s of songs) {
    $("#lengths").append("<p>" + s.length);
  }
  for (let s of songs) {
    $("#links").append(`<a href = ${s.link} target="_blank">Links</a>`);
  }
}