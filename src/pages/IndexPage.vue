<template>
  <q-page style="padding:2%" id="page">

    <b>"csSvg" or "inka" </b>is a tool to animate SVG with CSS animations and Inkscape.



    <div class="q-my-md">
      <q-expansion-item class="shadow-1 overflow-hidden" style="background-color:brown;" icon="download"
        label="Download options" header-class="">
        <q-card>
          <q-card-section>
            <!-- <a href="https://github.com/imvenx/cssvgweb/raw/master/public/cssvg-0.0.1.AppImage"> -->
            <a href="/cssvgweb/cssvg-0.0.2.AppImage"> linux 0.0.2 </a>
            <ul>
              <li>Add capability to drag keyframes to change the time</li>
              <li>Delete keyframes now with right click instead of left click </li>
              <li>Demonstration: <a href="https://www.youtube.com/watch?v=w35GS6fKksE" target="_blank">making smiley
                  youtube tutorial</a></li>
            </ul>
            <hr>
            <a href="/cssvgweb/cssvg-0.0.1.AppImage"> linux 0.0.1 </a>
            <ul>
              First stable version on linux

              <li> Demonstration: <a href="https://www.youtube.com/watch?v=vPwZxCoeH_0" target="_blank"> first extensive
                  video tutorial
                  with voice</a></li>
            </ul>
            <hr>
            <!-- <a href="https://github.com/imvenx/cssvgweb/raw/master/public/cssvg%20Setup%200.0.1.exe"> -->
            <a href="/cssvgweb/cssvg%20Setup%200.0.1.exe" disabled target="_blank"
              title="discontinued for lack of time, maybe in the future will be retaken"> windows 0.0.00001 </a>
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
    <img decoding="async" loading="lazy" src="../assets/cssvg_preview.svg" style="width:100%; ">
    <p style="color:orange"><b>Warning:</b> This project is under active development and
      it contains multiple bugs that we are currently fixing. To understand how to use it you
      can watch tutorials on our
      <a href="https://www.youtube.com/channel/UCh30W9QnXS-XZwNuk-twnyg" target="_blank"
        rel="noopener noreferrer">youtube</a>
      channel or join us in <a href="https://discord.gg/F8Wzc5SPjq" target="_blank"
        rel="noopener noreferrer">discord</a>
    </p>
    <hr>

    <b>Animations created and exported with this tool:</b>
    <ul class="imgCont">
      <!-- <object type="image/svg+xml" data="src/assets/bird.svg" width="250" height="200">
      </object> -->
      <img decoding="async" loading="lazy" src="../assets/mountain.svg">
      <img decoding="async" loading="lazy" src="../assets/bird.svg">
      <img decoding="async" loading="lazy" src="../assets/face_wink.svg">
      <img decoding="async" loading="lazy" src="../assets/fish.svg">
      <img decoding="async" loading="lazy" src="../assets/dragon.svg">
      <img decoding="async" loading="lazy" src="../assets/thumbup.svg">
      <img decoding="async" loading="lazy" src="../assets/weird.svg">
      <img decoding="async" loading="lazy" src="../assets/smiley.svg">
      <img decoding="async" loading="lazy" src="../assets/smiley3.svg">
      <!-- <img decoding="async" loading="lazy" src="../assets/moon.svg"> -->
    </ul>
    <hr>
    <b>How to use this program:</b>
    <ol>
      <li>Go to the home view (top left)</li>
      <li>Create a new project</li>
      <li>Open it with inkscape (File -> open with inkscape (Inkscape should be your default program to open SVGs,
        otherwise open tmp/cssvg/temp.svg with inkscape manually))</li>
      <li>Draw something on inkscape temp.svg file</li>
      <li>Save on inkscape (this should refresh inka UI to show what you did draw)</li>
      <li>Create a Keyframe</li>
      <li>In inka move the time line to another second or milisecond by clicking on the timepicker</li>
      <li>Convert whatever you drawed to a path if is an object (in inkscape Object -> Object to path)</li>
      <li>Move, change the color or morph whatever you drawed </li>
      <li>Save in inkscape</li>
      <li>Create a new keyframe</li>
      <li>Now press F1 to play your animation</li>
      <li>Pres F1 to stop the animation</li>
      <li>Drag the keyframe with left click to change the time of that keyframe</li>
      <li>Right click to delete that keyframe</li>
    </ol>
    <hr />
    <b>Useful advice:</b>
    <ul>
      <li>Set inkscape as your default program to open svg's (if you can't do this the program will not open inkscape
        and you will need to go to your temporal folder tmp/cssvg/temp.svg and open it with inkscape )</li>
      <li>Use always paths, instead of circles or rectangles, use object to path inskcape functionality</li>
      <li>Set strokes to not resize on resize object</li>
      <li>Hide angle vector points</li>
      <li>Sometimes if you animate a path it will just jump from one state to another, that is because CSS morphing
        animation is still not as good as it could be, so to prevent this you need to be carefull to not change the type
        of node (if it is an arc keep it as an arc, if you plan to animate a line make it a curve or an arc before,
        etc),
      </li>
      <li>If you move the timeline with unsaved changes on inkscape, inkscape will ask you if you want to continue
        reverting the file. You can accept to get the part of the animation that is expected to happen at that point, or
        you can cancel to conservate the state of your svg, this is useful if you want to duplicate certaion state of
        the animation since there is no duplicate operation at the moment </li>
    </ul>
    <hr>
    <b>Inkscape recomended configuration:</b>
    <ul>
      <li>Preferences -> Interface -> Default Window Size: Small</li>
      <li>Preferences -> Interface -> Saving Window size and position: Remember and use last
        window geometry
      </li>
      <li>Preferences -> Input/Output -> Numeric precision: 8</li>
    </ul>
    <hr />
    <b>FAQs</b> (Please watch youtube tutorial for more details)
    <ul>
      <li><b> How can I zoom in/out?</b></li>
      <ul>
        <li>focus on the timepicker component (the one with that show the seconds) with the mouse, and ctrl + scroll
        </li>
      </ul>
      <li> <b>
          Inkscape often asks whether to reset the file, and I'm not sure what to choose, because I have not found
          out when and why that happens.</b>
      </li>
      <ul>
        <li>
          This happens because to update inkscape UI what I do is an overwrite and then a "file revert" which means you
          lose all the changes you did to your svg. It is a complex workaround that is not intended to be used for this
          purpose so is kinda tricky to explain all the implications, but basically you need to know this:
          To animate: First select the time you desire, second update the svg, third save svg, fourth create keyframe
          if you select the time you desire after editing the svg there are two posibilities:

          one: you didn't save the svg so it tell's you that the file is being reverted and you will lose your changes,
          you can press cancel and then you will update the timeline without losing your changes
          two: you did save the svg in which case it don't ask you anything, you will lose your changes as the editor
          goes to that timeline seocnd and refreshes the svg.
        </li>
      </ul>
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

    <b>Roadmap / To Do list:</b>
    <ul>
      <li>Add support to more attributes and elements, like rotation, blur etc that are currently not supported </li>
      <li>Improve keyframe system, to be able to drag keyframes, edit values, delete, inpsect, etc</li>
      <li>Improve hierachy system to be able to add attributes or elements directly from the hierarchy</li>
      <li>Add record button to record changes on svg instead of having to create keyframes each time</li>
      <li>Add capabilities to handle and reuse multiple animations inside the same animation</li>
      <li>(Maybe) Add an "inka" profile to inkscape to improve user experience by setting default preferences etc</li>
    </ul>

    <hr />
    <b>News</b>
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
      <li>Rotation behaves herratically</li>
      <li>d attribute won't properly morph if you change the type of nodes from
        one keyframe from another
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
  background-image: url("../assets/dragon.svg");
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

a {
  color: aqua;
  text-decoration: none;
  font-weight: 1000;
}
</style>
