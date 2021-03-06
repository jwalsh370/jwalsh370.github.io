
// Function to retrieve date from input.
// var date = function userDate() {
//    var input = document.getElementById("datepicker").value;
//    console.log(input);
// }


var url = "https://api.nasa.gov/planetary/apod?api_key=2SWqmfBuIl0T1CkO3piiBCDnOONBuH1cNgaaWItH&hd=true"


$.ajax({
  url: url,
  success: function(result){
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }

  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none");
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
    $("#apod_vid_id").css("display", "none");
    $("#apod_img_id").attr("src", result.url);
  }
  $("#reqObject").text(url);
  $("#returnObject").text(JSON.stringify(result, null, 4));
  $("#apod_explaination").text(result.explanation);
  $("#apod_title").text(result.title);
}
});
