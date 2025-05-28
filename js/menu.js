
$(function() {
  $("a[href=#menu-expand]").click(function (e) {
      $(".menu").toggleClass("menu-open");
      e.preventDefault();
  });
}); 


$(function(){
  $("h3[id=q1]").click(function(a){
    $("#a1").toggleClass("faq-item-open");
    a.preventDefault();
  })
})
$(function(){
  $("h3[id=q2]").click(function(a){
    $("#a2").toggleClass("faq-item-open");
  })
})
$(function(){
  $("h3[id=q3]").click(function(a){
    $("#a3").toggleClass("faq-item-open");
  })
})
$(function(){
  $("h3[id=q4]").click(function(a){
    $("#a4").toggleClass("faq-item-open");
  })
})
$(function(){
  $("h3[id=q5]").click(function(a){
    $("#a5").toggleClass("faq-item-open");
  })
})
let a = 1%4
console.log(a)