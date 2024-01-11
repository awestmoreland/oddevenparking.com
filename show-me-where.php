<?php
  // Set text values based on whether the house is odd or even
  $oddDayPhaseLabel = $houseIsEven ? 'Away from the house' : 'Near the house';
  $evenDayPhaseLabel = $houseIsEven ? 'Near the house' : 'Away from the house';
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
      Which side do I park on NOW?
    </title>
    <link
      rel="stylesheet"
      href="styles/styles.css<?php echo '?'.filemtime('styles/styles.css'); ?>"
    >
    <script>
      const evenDayText = "<?php echo $houseIsEven ? 'closest to' : 'furthest from'; ?>";
      const oddDayText = "<?php echo $houseIsEven ? 'furthest from' : 'closest to'; ?>";
    </script>
  </head>
  <body data-view="show-me-where">
    <header class="page-header">
      <h1>
        Which side do I park on NOW?
      </h1>
      <h2>
      </h2>
      <p class="text-side-specific">
        The side of the street <span class="text-proximity-now"></span> the house.
      </p>
      <p class="text-side-agnostic">
        You can park on
        <span>either side</span>.
      </p>
    </header>

    <div class="view">

      <div class="phases" data-current-date="odd">

        <!--  Day (phase) runs 1am-1am  -->
        <div class="phase-odd">

          <div class="location-here active">
            <div class="details">
              <span class="when">
                <!-- TODO: add day of week -->
                1am&mdash;6pm:
              </span>
              <span class="where">
                <?php echo $oddDayPhaseLabel; ?>
                <!--
                  TODO:
                  <span class="duration">for the next 5h 23m</span>
                -->
              </span>
            </div>
          </div>

          <div class="location-any">
            <div class="details">
              <span class="when">
                6pm&mdash;1am:
              </span>
              <span class="where">
                Either side
              </span>
            </div>
          </div>

        </div>

        <div class="phase-even">

          <div class="location-there">
            <div class="details">
              <span class="when">
                <!-- TODO: add day of week -->
                1am&mdash;6pm:
              </span>
              <span class="where">
                <?php echo $evenDayPhaseLabel; ?>
              </span>
            </div>
          </div>

          <div class="location-any">
            <div class="details">
              <span class="when">
                6pm&mdash;1am:
              </span>
              <span class="where">
                Either side
              </span>
            </div>
          </div>

        </div>
      </div>

      <footer>
        <span>
          Now
        </span>
        <span>
          Later
        </span>
      </footer>

    </div>

    <footer>
      <p>
        <span class="text-move-required-true">
          Sometime between 6pm-1am you'll need to move to the opposite side.
        </span>
        <span class="text-move-required-false">
          You don't need to move tomorrow because that's also an odd date!
        </span>
      </p>
    </footer>

    <script src="scripts/scripts.js<?php echo '?'.filemtime('scripts/scripts.js'); ?>"></script>

    <?php
      include('./_collaborate.php');
    ?>

  </body>
</html>
