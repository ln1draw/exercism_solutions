export const hey = (message) => {
  var ret = "Whatever.";
  var yelling = false;
  var trimmed_message = message.trim();

  if (trimmed_message == '' ) {
    ret = "Fine. Be that way!";
  } else if (isYelling(trimmed_message)) {
    ret = "Whoa, chill out!";
    if (isQuestion(trimmed_message)) {
      ret = "Calm down, I know what I'm doing!";
    }
  } else if (isQuestion(trimmed_message)) {
    ret = "Sure.";
  }
  return ret;
};

function isYelling (test_str) {
  var ret = false;
  if (test_str == test_str.toUpperCase() && test_str != test_str.toLowerCase()) {
    ret = true;
  }

  return ret;
}

function isQuestion (test_str) {
  return test_str[test_str.length -1] == "?";
}