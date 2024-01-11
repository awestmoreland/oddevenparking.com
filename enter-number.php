<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
      Which side do I park on?
    </title>
    <link
      rel="stylesheet"
      href="styles/styles.css<?php echo '?'.filemtime('styles/styles.css'); ?>"
    >
  </head>
  <body data-view="enter-number">
    <header class="page-header">
      <h1>
        My house number is:
      </h1>
    </header>
    <div class="actions">
        <a class="is-odd" href='/odd'>Odd</a>
        <a class="is-even" href='/even'>Even</a>
      </div>

    <script src="scripts/scripts.js<?php echo '?'.filemtime('scripts/scripts.js'); ?>"></script>

  </body>
</html>
