$('#copyright-year').text(new Date().getFullYear());

$("smooth-scroll").on("click", function(event){
  event.preventDefault();
  if(event.target);
  console.log(event.target.hash);
  if(event.target.hash === "#home");
    $("html, body").animate(
    {
      scrollTop: 0
    },
      500
      );
  console.error(event);
  $("html, body").animate(
  {
    scrollTop: $($.attr(this, "href")).offset().top
  })
    })
if(true){
  console.log('true');
}
