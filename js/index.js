/*
* @Author: mm
* @Date:   2016-03-24 23:14:24
* @Last Modified by:   AprilHan
* @Last Modified time: 2016-04-07 21:10:52
*/

(function($){
  var pullDown = document.querySelector(".pullDown");

  pullDown.addEventListener("click",function(){
      $.fn.fullpage.moveSectionDown();
  })
})($);


