$(function () {
  $('.saveBtn').on('click', function () {
    const task = $(this).siblings('textarea').val();
    const time = $(this).parent().attr('id');
    localStorage.setItem(time, task);

    $('#announce').css('opacity', '1');
    $('#announce').fadeTo(500, 0);
  })
  
  $('#announce').css('opacity', '0');

  function update() {
    for (let i = 9; i <= 17; i++) {
      const currentTime  = dayjs().hour();
      if(i < currentTime) {
        $('#hour-' + i.toString()).addClass('past');
      } else if(i > currentTime) {
        $('#hour-' + i.toString()).addClass('future');
      } else {
          $('#hour-' + i.toString() + ' .description').addClass('present');
      }
    }
  }
  
  setInterval(update(), 30000);
  
  $('textarea').each(function (i) {
    $(this).val(localStorage.getItem($(this).parent().attr('id')));
  })

  $('#currentDay').text(dayjs().format('dddd, MMMM d, YYYY'));
});