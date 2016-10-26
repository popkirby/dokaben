$(function() {

  var changeFrom = $('#dokabenfield').val()

  $('#dokabenfield').on('change keyup keydown', function(e) {
    var changeTo = $(this).val()

    if (isHiraOrKana(changeTo)) {
      changeTo = hira2kana(changeTo)
      $('#dokaben').text(changeTo)
      changeFrom = changeTo
    }
  })

  var moving = false;
  $('#dokabenbutton').on('click', function() {
    if (moving) {
      $(this).text('動かす')
      $('#dokaben').removeClass('moving')
      moving = false
    } else {
      $(this).text('止める')
      $('#dokaben').addClass('moving')
      moving = true
    }
  })

  function hira2kana(str) {
    return str.replace(/[\u3041-\u3096]/g, function(match) {
      var chr = match.charCodeAt(0) + 0x60
      return String.fromCharCode(chr)
    })
  }

  function isHiraOrKana(str) {
    var result = str.replace(/[\u3041-\u3094\u30A1-\u30F4\u30FC]/g, '')
    return result.length === 0
  }
})
