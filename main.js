$(document).ready(() =>{
	$('.hint-box').on('click', () => {
    $('.hint').slideToggle(300);
  });
  
  $('.wrong-answer-one').on('click', () => {
    $('.wrong-text-one').fadeOut('slow');
    $('.frown').show();
  });
  
  $('.wrong-answer-two').on('click', () => {
     $('.wrong-text-two').fadeOut('slow');
     $('.frown').show();
  });
  
  $('.wrong-answer-three').on('click', () => {
     $('.wrong-text-three').fadeOut('slow');
     $('.frown').show();
  });
  
  $('.correct-answer').on('click', () => {
    $('.frown').hide();
    $('.smiley').show();
    $('.wrong-answer-one').off('click');
    $('.wrong-answer-two').off('click');
    $('.wrong-answer-three').off('click');
    $('.wrong-text-one').fadeOut('slow');
    $('.wrong-text-two').fadeOut('slow');
    $('.wrong-text-three').fadeOut('slow');
  });
});
