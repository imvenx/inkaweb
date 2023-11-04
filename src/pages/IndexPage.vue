<template>
  <q-page style="padding:2%" id="page">
    A tool to animate SVG with CSS animations and Inkscape.
    <div class="q-my-md">
      <q-expansion-item class="shadow-1 overflow-hidden" style="background-color:brown;" icon="download"
        label="Download options" header-class="">
        <q-card>
          <q-card-section>

            <span class="text-h4"> inka 1.3.1 Beta </span> <span class="text-h6">
              2023-11-18</span>
            <br>
            <br>
            <div class="text-h5">Windows</div>
            <ul>
              <a href="/cssvgweb/inka-1.3.1.exe"> inka-1.3.1.exe Beta </a>
              <div>
                <li>Demonstration: <a href="https://www.youtube.com/watch?v=vUn5EqMDkik" target="_blank"> youtube
                    tutorial</a></li>
              </div>
            </ul>

            <div class="text-h5">Linux</div>
            <ul>
              <a href="/cssvgweb/inka-1.3.1.AppImage"> inka-1.3.1.AppImage Beta </a>
              <div>
                <li>Demonstration: <a href="https://www.youtube.com/watch?v=vUn5EqMDkik" target="_blank"> youtube
                    tutorial</a></li>
              </div>
            </ul>
            <hr />
            <a href="/cssvgweb/inka-1.3.0.AppImage"> inka-1.3.0 <small>beta</small> AppImage (linux) </a> 9/feb/2023 <br />
            <a href="/cssvgweb/inka-1.3.0.exe"> inka-1.3.0 <small>beta</small> exe (windows)</a>
            <ul>
              <div>
                <li>Demonstration: <a href="https://www.youtube.com/watch?v=vUn5EqMDkik" target="_blank"> youtube
                    tutorial</a></li>
              </div>
            </ul>
            <ul>
              <div>
                <li>Demonstration: <a href="https://www.youtube.com/watch?v=vUn5EqMDkik" target="_blank"> youtube
                    tutorial</a></li>
              </div>
            </ul>
            <hr />
            <a href="/cssvgweb/inka-1.2.1.AppImage"> inka-1.2.1.AppImage (linux) </a> 29/12/2022
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
            <a href="/cssvgweb/inka-1.2.0.AppImage"> inka-1.2.0.AppImage (linux) </a> 18/12/2022
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
            <a href="/cssvgweb/inka-1.1.0.AppImage"> inka-1.1.0.AppImage (linux) </a>
            <ul>
              <li>Fix bug on drag key frame when kf viewer was scrolled would not drag properly</li>
              <li>Fix bug on puase and play again would start animation from zero instead of current time</li>
              <li>Add support for fill-opacity attribute</li>
              <li>Fix bug on start or refresh app would not remember y scroll on animator</li>
              <li>knonw bug (also on older versions): change duration is glitchy</li>
              <li>knonw bug (also on older versions): drag keyframes sometimes is glitchy</li>
            </ul>
            <hr>
            <a href="/cssvgweb/inka-1.0.0.AppImage"> inka-1.0.0.AppImage (linux) </a>
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
            <!-- <a href="https://github.com/imvenx/cssvgweb/raw/master/public/cssvg-0.0.1.AppImage"> -->
            <a href="/cssvgweb/cssvg-0.0.2.AppImage"> cssvg-0.0.2.AppImage (linux) </a>
            <ul>
              <li>Add capability to drag keyframes to change the time</li>
              <li>Delete keyframes now with right click instead of left click </li>
              <li>Demonstration: <a href="https://www.youtube.com/watch?v=w35GS6fKksE" target="_blank">making smiley
                  youtube tutorial</a></li>
            </ul>
            <hr>
            <a href="/cssvgweb/cssvg-0.0.1.AppImage"> cssvg-0.0.1.AppImage (linux) </a>
            <ul>
              First stable version on linux

              <li> Demonstration: <a href="https://www.youtube.com/watch?v=vPwZxCoeH_0" target="_blank"> first extensive
                  video tutorial
                  with voice</a></li>
            </ul>
            <hr>
            <!-- <a href="https://github.com/imvenx/cssvgweb/raw/master/public/cssvg%20Setup%200.0.1.exe"> -->
            <a href="/cssvgweb/cssvg%20Setup%200.0.1.exe" disabled target="_blank"
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
    </div>
    <!-- <a href="https://github.com/imvenx/cssvg" target="_blank" rel="noopener noreferrer">Repo</a> |
    <a href="https://discord.gg/F8Wzc5SPjq" target="_blank" rel="noopener noreferrer">Discord</a> |
    <a href="https://www.youtube.com/channel/UCh30W9QnXS-XZwNuk-twnyg" target="_blank"
      rel="noopener noreferrer">Youtube</a> -->
    <!--<img decoding="async" loading="lazy" src="../assets/inka-preview-2.png" style="width:100%; ">-->
    <p style="color:orange"><b>Warning:</b> This project is under active development and
      it contains multiple bugs that we are currently fixing. To understand how to use it you
      can watch tutorials on our
      <a href="https://www.youtube.com/channel/UCh30W9QnXS-XZwNuk-twnyg" target="_blank"
        rel="noopener noreferrer">youtube</a>
      channel or join us in <a href="https://discord.gg/F8Wzc5SPjq" target="_blank" rel="noopener noreferrer">discord</a>
    </p>
    <hr>

    <b>Animations created and exported with this tool:</b>
    <ul class="imgCont">
      <img decoding="async" loading="lazy" src="../assets/llama_walk2.svg" style="background: burlywood; ">
      <img decoding="async" loading="lazy" src="../assets/inka_now_for_windows2.svg.svg" style="background: burlywood; ">
      <img decoding="async" loading="lazy" src="../assets/inka12.svg" style="background: burlywood; ">
      <img decoding="async" loading="lazy" src="../assets/viracocha.svg">
      <img decoding="async" loading="lazy" src="../assets/smiley.svg">
      <img decoding="async" loading="lazy" src="../assets/fox_ice.svg">
      <img decoding="async" loading="lazy" src="../assets/mountain.svg">
      <img decoding="async" loading="lazy" src="../assets/bird.svg">
      <img decoding="async" loading="lazy" src="../assets/inka1_1.svg" style="background:burlywood">
      <img decoding="async" loading="lazy" src="../assets/witch.svg">
      <img decoding="async" loading="lazy" src="../assets/inka3.svg">
      <img decoding="async" loading="lazy" src="../assets/face_wink.svg">
      <img decoding="async" loading="lazy" src="../assets/merry_consume.svg">
      <img decoding="async" loading="lazy" src="../assets/fish.svg">
      <img decoding="async" loading="lazy" src="../assets/thumbup.svg">
      <img decoding="async" loading="lazy" src="../assets/bird_stroke.svg" style="background: skyblue;">
      <img decoding="async" loading="lazy" src="../assets/weird.svg">
      <!-- <img decoding="async" loading="lazy" src="../assets/moon.svg"> -->
    </ul>
    <hr>

    <!-- <b>Videos</b>
    <div id="videos-cont">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/O287AKWyLrY" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/oPd4NaYtfvY" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
    <hr> -->

    <!-- <b>Windows version limitations:</b>
    <ul>
      <li>
        <p>If you donwload windows version, everything should work the same except the
          auto-refresh of inkscape UI when you pause an animation or move the time of the
          animation by clicking on the timepicker. To refresh the UI, you need to go to:
          File -> Revert on inkscape, or you can set a hotkey to make it faster. We recomend
          you to watch <a href="https://www.youtube.com/embed/f8kHLQNz8zE" target="_blank">
            windows tutorial </a> for better understanding this issue.
        </p>
      </li>
    </ul>
    <hr> -->
    <!-- <b>Current supported attributes:</b>
    <ul>
      <li>
        <p>x, y, width, height, fill, d</p>
      </li>
    </ul>
    <hr> -->

    <b>Roadmap / To Do list:</b>
    <ul>
      <li>Improve keyframe system, to be able to drag keyframes, edit values, delete, inpsect, etc</li>
      <li>Improve hierachy system to be able to add attributes or elements directly from the hierarchy</li>
      <li>Add capabilities to handle and reuse multiple animations inside the same animation</li>
      <li>(Maybe) Add an "inka" profile to inkscape to improve user experience by setting default preferences etc</li>
      <li>Make standard humanoid skeleton to make animations reusable, then add funcitonality download/upload reusable
        template animations</li>
    </ul>

    <hr />
    <b>News</b>
    <ul>
      <li> <b> 09/feb/2023 </b> </li>
      <ul>
        <li>New major version release candiadate with a lot of new features on inkscape and inka side</li>
        <li>Add windows support</li>
        <li>Add record functionality</li>
        <li>Improved UI and UX</li>
        <li>Add remember kfs on inkscape</li>
        <li>Add option to enable/disable refresh inksape</li>
        <li>Add option to reset inkcape path</li>
      </ul>
    </ul>
    <ul>
      <li> <b> 23/11/22 </b> </li>
      <ul>
        <li>Added file system capabilities to load and save projects directly from the program </li>
        <li>Pick file name and path on export</li>
      </ul>
    </ul>
    <ul>
      <li> <b> 13/11/22 </b> </li>
      <ul>
        <li>Major changes on animation editor, improved UI, improved TimePicker, KfEditor, etc</li>
        <li>Add multi-file handling, now you can import many files and save your animations to
          comeback later
        </li>
        <li>Added code viewer</li>
        <li>Added Menu page where you can load saved projects or import new ones</li>
        <li>
          Discontinued windows version support for the moment, in the future is possible that
          we retake that initiative, but at the moment is too much time spent on testin and fixing
          bugs only for windows.
        </li>
      </ul>
      <li> <b> 25/10/22 </b> </li>
      <ul>
        <li>
          Released new version (only for linux download) with export functionality, bug fixes, improved code, remember
          attributes state, show individual kfs for each attribute only if exist, on hover on
          kf show value, on hover on attr name shows current attr value changed attrs color.
        </li>
      </ul>
      <li> <b> 20/10/22 </b> </li>
      <ul>
        <li>
          Export funtionality already working on dev, and will be available to the public soon.
        </li>
      </ul>
    </ul>
    <hr>

    <b>Knwon limitations, bugs, etc:</b>
    <ul>
      <li>Rotation and translation can't be in the same group, need a specific group to track each transform</li>
      <li>Rotations limited by inkscape degrees (max 180, min -180), so if you need custom rotation, has to be added
        manually</li>
      <li>Resize, skew transforms not supported</li>
      <li>d attribute won't properly morph if you change the type of nodes from
        one keyframe from another, so is necesary to convert all nodes to curves (shown in video tutorials)
      </li>
      <li>Blur animation still not implemented</li>
    </ul>
    <hr>
  </q-page>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* #page {
  background-image: url("../assets/inka-anim.svg");
  background-position-y: 45vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-blend-mode: color;
} */

/* a {
  color: aqua;
  text-decoration: none;
} */

@media (min-width:1150px) {
  #videos-cont {
    display: flex;
    justify-content: center;
    gap: 3em;
  }
}

@media (max-width:1150px) {
  #videos-cont {
    text-align: center;
  }

  iframe {
    width: 80vw;
    margin: 1em;
  }
}

hr,
img {
  margin: 1em auto;
  border-width: .1em;
  border-color: #fff;
}

.imgCont {
  display: flex;
  flex-wrap: wrap;
  /* align-content: stretch; */
  /* width: 100%; */
  /* margin: auto; */
  padding: 0;
  gap: 1%;
}

.imgCont * {
  max-height: 9em;
}

a {
  color: rgb(20, 182, 182);
  text-decoration: none;
}
a:hover {
  color: rgb(255, 255, 255);
}
</style>
