// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function attatchModal() {
  $('.modal').click(function(e) {
    var url = $(this).attr('href');
    var dialog_form = $('<div id="dialog-form">Loading form...</div>').dialog({
      autoOpen: false,
      width: 520,
      modal: true,
      show: 'fade',
      hide: 'drop',
      open: function() {
        return $(this).load(url + ' #content');
      },
      close: function() {
        $('#dialog-form').remove();
      }
    });
    dialog_form.dialog('open');
    e.preventDefault();
  });
}

$(document).ready(function() {
  attatchModal();
});