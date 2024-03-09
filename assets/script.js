$(function () {

  // Event listener for save buttons
  $('.saveBtn').on('click', function () {
    // Get the task text from the sibling textarea
    const task = $(this).siblings('textarea').val();
    // Get the time ID from the parent element
    const time = $(this).parent().attr('id');

    // Store the task in local storage with time as key
    localStorage.setItem(time, task);

    // Show announcement message and fade it out after 500ms
    $('#announce').css('opacity', '1');
    $('#announce').fadeTo(500, 0);
  })
  
  // Hide announcement message initially
  $('#announce').css('opacity', '0');

  // Function to update time blocks' colors based on current time
  function update() {
    for (let i = 9; i <= 17; i++) {
      // Get the current hour using dayjs library
      const currentTime  = dayjs().hour();
      // Add classes to time blocks based on current time
      if(i < currentTime) {
        $('#hour-' + i.toString()).addClass('past');
      } else if(i > currentTime) {
        $('#hour-' + i.toString()).addClass('future');
      } else {
          $('#hour-' + i.toString() + ' .description').addClass('present');
      }
    }
  }
  
  // Update time blocks every 30 seconds
  setInterval(update(), 30000);
  
  // Populate textareas with stored tasks from local storage
  $('textarea').each(function (i) {
    $(this).val(localStorage.getItem($(this).parent().attr('id')));
  })

  // Display current day using dayjs library
  $('#currentDay').text(dayjs().format('dddd, MMMM d, YYYY'));
});