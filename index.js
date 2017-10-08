$(".code-images").mouseenter(() => {
  var blinkhorn_code = $(this).data("image");
  var imageTag = "<div>" +
  "<a href='https://github.com/blinkhorn'><img src='" + blinkhorn_code + "' alt='code image' height='100'></a>" + "</div>";
  $(this).parent('div').append(imageTag);
});

$(".code-images").mouseleave(() => {
  $(this).parent("div").children("div").remove();
});
