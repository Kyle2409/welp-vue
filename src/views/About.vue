<template>
<Navbar/>
<div class="top">
  <div class="top-content">
    
    <div class="photo"><img src="https://i.postimg.cc/4yzxNJ8q/rsz-kyle1.png" alt="photo"/>
      <h1>Kyle Mc Bryne</h1>
    </div>
    
    <div class="info">
      <div class="title">Aspiring Fullstack Developer</div>
      <div class="contact">
        <li><b><span style="color:black ;">Email :</span></b><p> <b>Kylemcb.24@gmail.com</b></p></li>
        <li><b><span style="color:black ;">Nationality :</span></b><p><b> South African</b></p></li> 
        
        
      </div>
    </div>
    
  </div>
</div>

<div class="content">
  <div class="max-width">
   
    <div class="left">
      <div class="portfolio">
        <div class="con-title sk-title">Social Links</div>
       <div class="socials-icons">
        <a
          class="social-icon"
          target="_blank"
          href="https://github.com/Kyle2409"
          ><i class="fab fa-github"></i
        ></a>
        <a
          class="social-icon"
          target="_blank"
          href="https://codepen.io/kyle2409"
          ><i class="fab fa-codepen"></i
        ></a>
       
        <a
          class="social-icon"
          target="_blank"
          href="https://www.linkedin.com/in/kyle-mc-bryne-3b5420209/"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a href="mailto:kylemcb.24@gmail.com" class="social-icon"
          ><i class="far fa-envelope"></i
        ></a>
      </div>
      </div>
    </div>
    
    <div class="right">
      
      <div class="languagues">
        <div class="con-title la-title">INFO</div>
        <div class="la-content">
         <h1 class="section-title">About <span>me</span></h1>
        <h2>Full Stack Developer</h2>
        <p>I am a dedicated, hard-working individual and a fast learner. I am calm and respectful and willing to learn new things in order to achieve my goals.<br><br>My passion for coding came from a great experience where I was given the chance to manage the website of a local business, and I found myself enjoying it more than I thought I would.<br><br>In my free time I enjoy playing games, reading, watching Anime and occasionally putting my role-playing face on to play Dungeons & Dragons.</p>
        </div>
      </div>
      
      <div class="skills">
        <div class="con-title sk-title">SKILLS</div>
        <div class="skill-content">
          <div class="skill-con-left">
            <div class="skill-bar"><span>HTML</span>
              <div class="skill-level">
                <div class="yes"></div>
                <div class="yes"></div>
                <div class="yes"></div>
                <div class="yes"></div>
                <div class="yes"></div>
              </div>
            </div>
            <div class="skill-bar"><span>CSS</span>
              <div class="skill-level">
                <div class="yes"></div>
                <div class="yes"></div>
                <div class="yes"></div>
                <div class="yes"></div>
                <div class="no"></div>
              </div>
            </div>
            <div class="skill-bar"><span>JavaScript</span>
              <div class="skill-level">
                <div class="yes"></div>
                <div class="yes"></div>
                <div class="yes"></div>
                <div class="no"></div>
                <div class="no"></div>
              </div>
            </div>
          </div>
          <div class="skill-con-right">
            <div class="skill-bar"><span>MySQL</span>
              <div class="skill-level">
                <div class="yes"></div>
                <div class="yes"></div>
                <div class="yes"></div>
                <div class="yes"></div>
                <div class="no"></div>
              </div>
            </div>
            <div class="skill-bar"><span>Bootstrap</span>
              <div class="skill-level">
                <div class="yes"></div>
                <div class="yes"></div>
                <div class="yes"></div>
                <div class="yes"></div>
                <div class="no"></div>
              </div>
            </div>
            <div class="skill-bar"><span>Vuejs</span>
              <div class="skill-level">
                <div class="yes"></div>
                <div class="yes"></div>
                <div class="no"></div>
                <div class="no"></div>
                <div class="no"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  </div>

  
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'About',
  components: {
  Navbar
  }
}
</script>

<style>
.socials-icons {
  position: relative;
  z-index: 1;
  
  left: 15%; 
  /* right: 3%; */
  top: 24%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
  gap: 60px;
}
* {
  vertical-align: top;
  box-sizing: border-box;
  /* background-color: #f2f2e9; */
  color: #ffffff;
  font-family: lato, sans-serif;
  /* font-weight: 300; */
  /* line-height: 36px; */
  transition-duration: 0.5s;
}

html, body {
  margin: 0px;
  padding: 0px;
  width: 100%;
}
.right{
  font-size: 16px !important;
}
.top {
  height: 300px;
  background-color: crimson;
}

.top-content {
  width: 1027px;
  height: 300px;
  background-color: crimson;
  margin-right: auto;
  margin-left: auto;
}

.photo {
  width: 200px;
  height: 275px;
  display: inline-block;
  margin-top: 20px;
  margin-left: 300px;
  background-color: crimson;
}
.photo h1 {
  text-align: center;
  font-weight: 500;
  font-size: 30px;
  position: relative;
  bottom: 15px;
  background-color: crimson;
  color: #f2f2e9;
  margin-top: 30px;
}

img {
  width: 200px;
  height: 200px;
  border-radius: 100%;
}

.info {
  width: 450px;
  height: 275px;
  margin-top: 20px;
  background-color: crimson;
}

.photo, .info {
  display: inline-block;
}

.title {
  width: 350px;
  height: 80px;
  margin-left: 50px;
  padding-top: 15px;
  text-align: center;
  font-size: 26px;
  line-height: 80px;
  border-bottom: solid 3px black;
  background-color: crimson;
  color: #f2f2e9;
}
p{
  color: black;
}
.contact {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 20px;
}
h2{
  color: rgb(0, 0, 0);
}
.url {
  padding-left: 10px;
  padding-top: 10px;
  background-color: crimson;
  color: #f2f2e9;
}
.url span {
  line-height: 36px;
  font-family: karla, sans-serif;
  padding-left: 10px;
  background-color: #24260f;
  color: #f2f2e9;
}

.max-width {
  width: 1027px;
  margin-right: auto;
  margin-left: auto;
}

.left, .right {
  display: inline-block;
  width: 49%;
  height: 700px;
}

.con-title {
  width: 450px;
  height: 50px;
  font-weight: 900;
  font-size: 20px;
  color: crimson;
  margin-left: 30px;
  margin-top: 30px;
  padding-top: 15px;
  border-bottom: solid 1px #24260f;
}

.ex-con-left {
  display: inline-block;
  width: 50px;
  height: 250px;
  margin-left: 30px;
}
.ex-con-left .dot {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #24260f;
  margin-left: 20px;
  margin-top: 30px;
}
.ex-con-left .vertical-line {
  width: 3px;
  height: 170px;
  border-radius: 10%;
  background-color: #90a955;
  margin-left: 24px;
  margin-top: 5px;
}

.ex-con-right {
  display: inline-block;
  width: 400px;
  height: 250px;
}
.ex-con-right h3 {
  margin: 10px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
}
.ex-con-right h5 {
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #90a955;
}
.ex-con-right span {
  font-size: 16px;
  color: #24260f;
  margin: 10px;
}
.ex-con-right p {
  margin: 10px 10px 0px 10px;
  line-height: 20px;
  font-size: 16px;
}
.ex-con-right br {
  line-height: 26px;
}

.ed-con-left {
  display: inline-block;
  width: 50px;
  height: 250px;
  margin-left: 30px;
}
.ed-con-left .dot {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #24260f;
  margin-left: 20px;
  margin-top: 30px;
}
.ed-con-left .vertical-line {
  width: 3px;
  height: 170px;
  border-radius: 10%;
  background-color: #90a955;
  margin-left: 24px;
  margin-top: 5px;
}

.ed-con-right {
  display: inline-block;
  width: 400px;
  height: 250px;
}
.ed-con-right h3 {
  margin: 10px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
}
.ed-con-right h5 {
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #90a955;
}
.ed-con-right span {
  font-size: 16px;
  color: #24260f;
  margin: 10px;
}
.ed-con-right p {
  margin: 10px 10px 0px 10px;
  line-height: 20px;
  font-size: 16px;
}
.ed-con-right br {
  line-height: 26px;
}

.languages {
  height: 250px;
}

.la-title {
  margin-left: 10px;
}

.chinese {
  width: 150px;
  height: 150px;
  display: inline-block;
  border-radius: 100%;
  overflow: hidden;
  margin: 30px 15px 0px 10px;
  border: solid 5px #90a955;
}
.chinese h3 {
  text-align: center;
  margin-top: 40px;
  font-weight: bold;
  font-size: 16px;
}
.chinese h4 {
  text-align: center;
  margin-top: -20px;
  color: #90a955;
}

.outer-jp {
  width: 150px;
  height: 150px;
  display: inline-block;
  background: #c1d7ae;
  border-radius: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 30px;
}

.sq1-jp {
  width: 150px;
  height: 150px;
  position: absolute;
  left: 75px;
  background-color: #90a955;
}

.sq2-jp {
  width: 75px;
  height: 75px;
  position: absolute;
  top: 75px;
  background-color: #90a955;
}

.sq3-jp {
  width: 75px;
  height: 75px;
  background-color: #90a955;
  transform-origin: bottom;
  transform: skewX(36deg);
}

.inner-jp {
  width: 140px;
  height: 140px;
  position: absolute;
  border-radius: 100%;
  top: 5px;
  left: 5px;
  background-color: #f2f2e9;
  overflow: hidden;
}
.inner-jp h3 {
  text-align: center;
  margin-top: 40px;
  font-weight: bold;
  font-size: 16px;
}
.inner-jp h4 {
  text-align: center;
  margin-top: -20px;
  color: #90a955;
}
h1{
  color: black;
}
.outer-eng {
  width: 150px;
  height: 150px;
  display: inline-block;
  background: #c1d7ae;
  border-radius: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 30px;
  margin-left: 10px;
}

.sq1-eng {
  width: 150px;
  height: 150px;
  position: absolute;
  left: 75px;
  background-color: #90a955;
}

.sq2-eng {
  width: 75px;
  height: 75px;
  position: absolute;
  top: 75px;
  background-color: #90a955;
}

.inner-eng {
  width: 140px;
  height: 140px;
  position: absolute;
  border-radius: 100%;
  top: 5px;
  left: 5px;
  background-color: #f2f2e9;
  overflow: hidden;
}
.inner-eng h3 {
  text-align: center;
  margin-top: 40px;
  font-weight: bold;
  font-size: 16px;
}
.inner-eng h4 {
  text-align: center;
  margin-top: -20px;
  color: #90a955;
}

.skills {
  height: 200px;
}

.sk-title {
  margin-left: 10px;
  margin-top: 0px;
}

.skill-con-left, .skill-con-right {
  display: inline-block;
  width: 230px;
  height: 130px;
  margin-top: 20px;
}

.skill-bar span {
  display: inline-block;
  font-weight: bold;
  margin-left: 10px;
  width: 90px;
}

.skill-level {
  display: inline-block;
  margin-left: 10px;
}

.yes {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: #90a955;
  margin-top: 10px;
  margin-right: 2px;
}

.no {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: #c1d7ae;
  margin-top: 10px;
  margin-right: 2px;
}

.portfolio {
  margin-top: 32px;
  height: 200px;
}

.po-con-right {
  display: inline-block;
  transition-duration: 0.5s;
  width: 150px;
  height: 160px;
  margin-left: 10px;
  padding-top: 10px;
  opacity: 0.5;
  position: relative;
  top: 0px;
}
.po-con-right span {
  display: inline-block;
  font-weight: bold;
  width: 100px;
  text-align: center;
}
.po-con-right:hover {
  opacity: 1;
}
.po-con-right:active {
  top: 10px;
}

.po-con-middle {
  display: inline-block;
  width: 150px;
  height: 160px;
  margin-left: 10px;
  padding-top: 10px;
  opacity: 0.5;
  position: relative;
  top: 0px;
}
.po-con-middle span {
  display: inline-block;
  font-weight: bold;
  width: 100px;
  text-align: center;
}
.po-con-middle:hover {
  opacity: 1;
}
.po-con-middle:active {
  top: 10px;
}

.po-con-left {
  display: inline-block;
  width: 150px;
  height: 160px;
  margin-left: 10px;
  padding-top: 10px;
  opacity: 0.5;
  position: relative;
  top: 0px;
}
.po-con-left span {
  display: inline-block;
  font-weight: bold;
  width: 100px;
  text-align: center;
  padding-right: 15px;
}
.po-con-left:hover {
  opacity: 1;
}
.po-con-left:active {
  top: 10px;
}
.fab fa-codepen{
  color: black;
}
.content{
  background-image: url(http://wallpaper-house.com/wallpaper-id-414897.php);
background-size: cover;
background-repeat: no-repeat;
}
</style>