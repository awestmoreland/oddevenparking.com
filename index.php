<?php
  // Get the current URL path
  $fullPath = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');

  // Get the first section of path
  $firstPathSection = strToLower(explode('/', $fullPath)[0]);

  $pattern = '/^(odd|even|\d+)$/'; // odd, even, or an integer

  // Check if first part of path is something we can work with
  if (preg_match($pattern, $firstPathSection)) {
    // if it's a number
    if(ctype_digit($firstPathSection)) {
      $intValue = intval($firstPathSection);
      $houseIsEven = $intValue % 2 == 0; // determine odd or even
    }
    // if it's odd or even
    else {
      $houseIsEven = $firstPathSection == "even";
    }
    include('./show-me-where.php');
  }
  // if it's invalid
  else {
    include('./enter-number.php');
  }

?>
