
$(document).ready(onReady);
function onReady(){
  console.log('script src');

} //end onReady

$.ajax({
  url: 'http://www.omdbapi.com/?t=the+italian+job',
  success: function (moviename) {
    console.log('this is the movie', moviename);
    $('#movie-title').append("<div id='movie-title'>" + moviename.Title + "</div>");
  $('#movie-title').append( '<img src="'+ moviename.Poster +'">');
  $('#movie-title').append("<div id='movie-title'>" + moviename.Awards + "</div>");
  $('#movie-title').append("<div id='movie-title'>" + moviename.Plot + "</div>");
  $('#movie-title').append("<div id='movie-title'>" + moviename.Genre + "</div>");
  $('#movie-title').append("<div id='movie-title'>" + moviename.Year + "</div>");
  //if there is an error case this is where i would put it like an if/else statement

  },
}); //end doc
