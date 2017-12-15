function interactor(wrap, button, textArea){
  return {
    doWrap: function(text, columns){
      var result = wrap(text, columns);
      textArea.show(result); // mutation testing
    }
  }
}

function button(id){
  return {
    click: function(){
      // TODO
    },
    show: function(){
      // TODO
    }
  };
}

function textarea(id){
  return {
    show: function(text){
        // draw text in the DOM
    }
  }
}

module.exports = {
  interactor,
  textarea,
  button
}