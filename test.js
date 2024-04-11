function processUserInput(input) {
  var sanitizedInput = sanitizeInput(input);
  return '<div>' + sanitizedInput + '</div>';
}

function sanitizeInput(input) {
  return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
