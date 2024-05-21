$("#title1").text('Movie-Stream')

function getValue(element, id) {
    return element.querySelector(`#${id}_value`).innerText;
}
//value associated with the  id

//array oof all movies + 
function sortMovies(key) {
    const wrapper = document.querySelector('.wrapper');
    const movies = Array.from(wrapper.querySelectorAll('.movies'));
    movies.sort((a, b) => {
        const valueA = getValue(a, key);
        const valueB = getValue(b, key);
//abs value of n
        if (key === 'rate') {
            return parseFloat(valueB) - parseFloat(valueA);
        } else if (key === 'date') {
            return parseInt(valueB) - parseInt(valueA);
        } else if (key === 'genre') {
            return valueA.localeCompare(valueB);
        }
    });
      //It first selects all movie elements within the wrapper and convert it into nums
    //from big to s
    wrapper.innerHTML = '';
    movies.forEach(movie => wrapper.appendChild(movie));
}
$('#sort-date').click(() => sortMovies('date'));
$('#sort-rate').click(() => sortMovies('rate'))
$('#sort-genre').click(() => sortMovies('genre'))

//adds an event click to ids and sort of all
var lordof=["https://image.api.playstation.com/vulcan/ap/rnd/202207/0608/Iqy4ngMBhe4Ti2tV4ABSBhjF.jpg","https://media.gq-magazine.co.uk/photos/6310e803d0134da0a7d86f11/16:9/w_1280,c_limit/RPAZ_S1_UT_210709_GRAMAT_00291_R2_thumb.jpeg"]
var shank=["https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/07/the-Shawshank-Redemption-movie-lede.jpg"]
var leon=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaPaP6aA9N0fT8Gnh17RaJp1jIRQZjrUyrII8LK3YoQ&s"]
var redn=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Kz_k5vaYJdN5xIVRCGctcDnZru9l5C4nSiLYUVcC-g&s"]
var thed=["https://d1nslcd7m2225b.cloudfront.net/Pictures/480xAny/9/1/4/1105914_Dark_Knight.jpg"]
var joke=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kg9_VkiF4M6s7GMrWyJ7H89u2FBBoY14KQxUkQdnyA&s"]

var Index = 0;
$("#lord").click(function(){

    index=(index+1)%lordof.length;
    $("#lord").attr("src",lordof[index])
  });

  $("#sha").click(function(){

    index=(index+1)%shank.length;
    $("#sha").attr("src",shank[index])
  });
  $("#leo").click(function(){

    index=(index+1)%leon.length;
    $("#leo").attr("src",leon[index])
  });

  $("#red").click(function(){

    index=(index+1)%redn.length;
    $("#red").attr("src",redn[index])
  });

  $("#the").click(function(){

    index=(index+1)%thed.length;
    $("#the").attr("src",thed[index])
  });
  $("#jok").click(function(){

    index=(index+1)%joke.length;
    $("#jok").attr("src",joke[index])
  });

