// Security Vulnerability 1: Command Injection
function executeCommand(command) {
  // This code is vulnerable to command injection
  return require('child_process').execSync(command);
}

// Security Vulnerability 2: SQL Injection
function getUser(username) {
  // This code is vulnerable to SQL injection
  var query = "SELECT * FROM users WHERE username = '" + username + "'";
  return executeQuery(query);
}

// Security Vulnerability 3: Cross-Site Scripting (XSS)
function displayMessage(message) {
  // This code is vulnerable to XSS
  var output = "<div>" + message + "</div>";
  document.getElementById('output').innerHTML = output;
}

// Security Vulnerability 4: Insecure Random Number Generation
function generateApiKey() {
  // This code uses Math.random, which is not suitable for generating secure keys
  var apiKey = Math.random().toString(36).substring(2);
  return apiKey;
}ho
