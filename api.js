$.ajax ({
  url: 'https://api.github.com/repos/EtkarP/NoroffTask4.4',
  success: function(response) {
    console.log(response);
    // var originalUrl = response.data.images.original.url;
    // $("body").append("<img src = '" + originalUrl + "'></img>")
    // if (response.data.user != null){
    //   var userAvatar = response.data.user.avatar_url;
    //   $("body").append("<img src = '" + userAvatar + "'></img>")
    // }
  }
})



// var request = new XMLHttpRequest();

// request.open('GET', 'https://hplussport.com/api/products');

// request.onload = function() {
//    var response = request.response
//    console.log(request.timeout);
//    var parsedData = JSON.parse(response);
//    console.log(parsedData[5].id);
//    console.log(parsedData);

// }

// request.send();

// $.ajax ({
//   url: 'https://hplussport.com/api/products',
//   success: function(response) {
//       console.log(response)
//   }
// })