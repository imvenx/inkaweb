<template>
  <q-expansion-item class="shadow-1 overflow-hidden" style="background-color:brown;" icon="download"
    label="Download options" header-class="">
    <q-card>
      <q-card-section>

        <span class="text-h4"> inka 1.3 Beta </span> <span class="text-h6">
          9/feb/2023</span>
        <br>
        <br>
        <div class="text-h5">Windows</div>
        <ul>
          <a href="/inkaweb/inka-1.3.0.exe"> inka-1.3.0.exe Beta </a>
          <div>
            <b><u> IMPORTANT!</u> </b> It requires this experimental version of inkscape to work
            <a download="" role="menuitem"
              href="https://gitlab.com/inkscape/inkscape/-/jobs/4535528983/artifacts/download?file_type=archive"
              rel="nofollow" target="_self" class="dropdown-item">
              inkscape:windows:x64:archive
            </a>
            <li>Demonstration: <a href="https://www.youtube.com/watch?v=vUn5EqMDkik" target="_blank"> youtube
                tutorial</a></li>
          </div>
        </ul>

        <div class="text-h5">Linux</div>
        <ul>
          <a href="/inkaweb/inka-1.3.0.AppImage"> inka-1.3.0.AppImage Beta </a>
          <div>
            <b><u> IMPORTANT!</u> </b> It requires this experimental version of inkscape to work
            <a download="" role="menuitem"
              href="https://gitlab.com/inkscape/inkscape/-/jobs/3709519231/artifacts/download?file_type=archive"
              rel="nofollow" target="_self" class="dropdown-item"><!----> <!----> <!---->
              appimage:linux:archive
            </a>
            <li>Demonstration: <a href="https://www.youtube.com/watch?v=vUn5EqMDkik" target="_blank"> youtube
                tutorial</a></li>
          </div>
        </ul>

        <hr />
        <a href="/inkaweb/inka-1.2.1.AppImage"> inka-1.2.1.AppImage (linux) </a> 29/12/2022
        <ul>
          <li>Added "open SVG with inkscape" button that asks and remembers inkscape path, and "open SVG with
            default
            program"</li>
          <li>Complete redesign of the UI, now in dark mode, and refactored so in the future is easier to add custom
            themes, improved spacing, etc</li>
          <li>Fixed bug on start it would not load correctly last project</li>
          <li>Add "_inka" to saved projects</li>
          <li>Demonstration: <a href="https://www.youtube.com/watch?v=I_WHppKb0r8&feature=youtu.be"
              target="_blank">video</a></li>
        </ul>
        <hr>
        <a href="/inkaweb/inka-1.2.0.AppImage"> inka-1.2.0.AppImage (linux) </a> 18/12/2022
        <ul>
          <li>Add support to animate rotation and translation only on "g" elements</li>
          <li>Add support to animate stroke, stroke-width, stroke-dasharray and stroke-linecap</li>
          <li>Fix bug that reseted project to last saved state</li>
          <li>Remember animation time on refresh or restart project</li>
          <li>Improved performance on drag kfs</li>
          <li>Improve animation viewer, now only shows what is inside the main layer</li>
          <li>Demonstration: <a href="https://www.youtube.com/watch?v=lA5omC4sO2U" target="_blank">video</a></li>
        </ul>
        <hr>
        <a href="/inkaweb/inka-1.1.0.AppImage"> inka-1.1.0.AppImage (linux) </a>
        <ul>
          <li>Fix bug on drag key frame when kf viewer was scrolled would not drag properly</li>
          <li>Fix bug on puase and play again would start animation from zero instead of current time</li>
          <li>Add support for fill-opacity attribute</li>
          <li>Fix bug on start or refresh app would not remember y scroll on animator</li>
          <li>knonw bug (also on older versions): change duration is glitchy</li>
          <li>knonw bug (also on older versions): drag keyframes sometimes is glitchy</li>
        </ul>
        <hr>
        <a href="/inkaweb/inka-1.0.0.AppImage"> inka-1.0.0.AppImage (linux) </a>
        <ul>
          <li>Known bug: on drag keyframe while scrolled in kf editor it won't drag properly</li>
          <li>See attribute keyframe value on hover</li>
          <li>Fix bug that svg would not refresh on pause/update time and create a new keyframe</li>
          <li>Refactored a bunch of code to make it more mantainable in the future</li>
          <li>Added face wink logo on AppImage</li>
          <li>Changed name from "cssvg" to "inka" in the AppImage</li>
          <li>Changed version to 1.0.0 just to start using version numbers as they are intended</li>
          <li>Prevents timepicker of being dragged if it haven't been clicked</li>
        </ul>
        <hr>
        <!-- <a href="https://github.com/imvenx/inkaweb/raw/master/public/cssvg-0.0.1.AppImage"> -->
        <a href="/inkaweb/cssvg-0.0.2.AppImage"> cssvg-0.0.2.AppImage (linux) </a>
        <ul>
          <li>Add capability to drag keyframes to change the time</li>
          <li>Delete keyframes now with right click instead of left click </li>
          <li>Demonstration: <a href="https://www.youtube.com/watch?v=w35GS6fKksE" target="_blank">making smiley
              youtube tutorial</a></li>
        </ul>
        <hr>
        <a href="/inkaweb/cssvg-0.0.1.AppImage"> cssvg-0.0.1.AppImage (linux) </a>
        <ul>
          First stable version on linux

          <li> Demonstration: <a href="https://www.youtube.com/watch?v=vPwZxCoeH_0" target="_blank"> first extensive
              video tutorial
              with voice</a></li>
        </ul>
        <hr>
        <!-- <a href="https://github.com/imvenx/inkaweb/raw/master/public/cssvg%20Setup%200.0.1.exe"> -->
        <a href="/inkaweb/cssvg%20Setup%200.0.1.exe" disabled target="_blank"
          title="discontinued for lack of time, maybe in the future will be retaken"> cssvg-0.0.1.exe (windows) </a>
        <ul>
          Discontinued at the moment, may be retaken in the future (only download this version if you dare)
          <li> Demonstration: <a href="https://www.youtube.com/watch?v=f8kHLQNz8zE" target="_blank"> animating in
              windows video
              tutorial</a></li>
        </ul>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>
