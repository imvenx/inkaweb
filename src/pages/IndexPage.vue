<template>
  <q-page style="padding:2%" id="page">
    <p>csSvg or Inka (I haven't decided between those two names yet) is a tool that lets you animate SVG
      with CSS animations and Inkscape. </p>
    <!-- <a href="https://github.com/imvenx/cssvgweb/raw/master/public/cssvg-0.0.1.AppImage"> -->
    <img decoding="async" loading="lazy" src="../assets/cssvg_preview.svg" style="width:100%; ">

    <a href="/cssvgweb/cssvg-0.0.1.AppImage">
      Download for linux
    </a> |
    <!-- <a href="https://github.com/imvenx/cssvgweb/raw/master/public/cssvg%20Setup%200.0.1.exe"> -->
    <a href="/cssvgweb/cssvg%20Setup%200.0.1.exe" disabled>
      Download for Windows
    </a>
    | <a href="https://github.com/imvenx/cssvg" target="_blank" rel="noopener noreferrer">Repo</a>
    | <a href="https://discord.gg/F8Wzc5SPjq" target="_blank" rel="noopener noreferrer">Discord</a>
    | <a href="https://www.youtube.com/channel/UCh30W9QnXS-XZwNuk-twnyg" target="_blank"
      rel="noopener noreferrer">Youtube</a>
    <hr>


    <b>Animations created and exported with this tool:</b>
    <ul class="imgCont">
      <!-- <object type="image/svg+xml" data="src/assets/bird.svg" width="250" height="200">
      </object> -->

      <img decoding="async" loading="lazy" src="../assets/mountain.svg">
      <img decoding="async" loading="lazy" src="../assets/bird.svg">
      <img decoding="async" loading="lazy" src="../assets/face_wink.svg">
      <img decoding="async" loading="lazy" src="../assets/dragon.svg">
      <img decoding="async" loading="lazy" src="../assets/thumbup.svg">
      <img decoding="async" loading="lazy" src="../assets/weird.svg">
      <img decoding="async" loading="lazy" src="../assets/moon.svg">
    </ul>
    <hr />
    <b>Inkscape recomended configuration:</b>
    <ul>
      <li>Preferences -> Interface -> Default Window Size: Small</li>
      <li>Preferences -> Interface -> Saving Window size and position: Remember and use last
        window geometry
      </li>
      <li>Preferences -> Input/Output -> Numeric precision: 8</li>
    </ul>
    <hr />
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


    <b>News</b>
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
      <li>Rotation behaves herratically</li>
      <li>d attribute won't properly morph if you change the type of nodes from
        one keyframe from another
      </li>
      <li>Blur animation still not implemented</li>
      <li>If you change the total duration of the animation you need to refresh
        the application, and probably rewrite all kfs (will be fixed soon)
      </li>
    </ul>
    <hr>
  </q-page>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* #page {
  background-image: url("../assets/dragon.svg");
  background-position-y: 45vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-blend-mode: color;
} */

a {
  color: aqua;
  text-decoration: none;
}

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
  border-width: .4em;
  border-color: brown;
  box-shadow: 0 0 10px 5px black;
  border-style: outset;
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
</style>
