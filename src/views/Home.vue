<template>
<Navbar/>
<div id="home" class="Kyles-section" style="">
  <div class="hero">
  <div class="container">
    <div class="hero-inner">
      <div class="content">
          <span class="hello">I AM</span>
          <h1 class="name">Kyle Mc Bryne</h1>
      <div class="job">
          <span class="job-headline rotate-1">
            <span ref="blc">Aspiring Fullstack Developer</span>
            <!-- <div ref="root">{{typingEffect()}}</div> -->
          </span>
          <div class="social-icons">
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
      <div class="hero-buttons">
      <a href="#projects" type="button" class="cta">Portfolio</a>
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
  name: 'Home',
  components: {
  Navbar
  }
}
// function waitForMs(ms){
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }
//   async function deleteWord (){
//     let sentences = this.$ref.home;
//     console.log(sentences);
//     let words = sentences.split("");
//     console.log(words);
    
//     while (words.length > 0) {
//       await waitForMs(200);
//       words.pop();
//       this.$ref.home = words.join("");
//     }
//   }
//   async function WriteSentence(word) {
//     let words = word.split("");
//     console.log(words);
    
//     let intro =0;
//     while(intro < words.length){
//       await waitForMs(100);
//       this.$ref.blc.append(words[intro]);
//     intro ++;
//     }
//   }
//   async function typingEffect(){
//     while(true){
//       await deleteWord();
//     await waitForMs(600);
//     await WriteSentence("Web Developer");
//     await waitForMs(1600);
//     await deleteWord();
//     await waitForMs(600);
//     await WriteSentence("App Developer");
//     await waitForMs(1600);
//     await deleteWord();
  
//     }
//   }
//   typingEffect();
</script>
// <style>
.Kyles-section{
  background-image:url(https://i.postimg.cc/qRHRfhwy/christopher-sardegna-b-Sm-Kli4-OTIY-unsplash.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  height: 95.5vh !important;
}
#home::after{
  
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: black;
    opacity: 0.7;
    z-index: -1;
}
.hero .content .hello{
  font-family: josefin sans-serif;
  font-weight: 700;
  color: rgb(0, 0, 0);
  letter-spacing: -.2px;
  display: inline-block;
  font-size: 141px;
}

@media (max-width: 1400px) {
  .hero .content .hello {
  font-size:20px;
  margin-bottom:10px;
}
}

.hero .content .name{
  font-weight: 700;
  color: #000000;
  letter-spacing: -.2px;
  line-height: 1.1;
  font-size:150px;
}
@media (max-width:1400px){
  .hero .content .name{
    font-size: 80px;
  }
}
.hero .content .job{
  overflow: hidden;
  font-size: 49px;
}
.hero .job-headline{
  font-weight: 700;
  color: rgb(0, 0, 0);
  letter-spacing: -.2px;
  font-family: sans-serif;
}
@media (max-width:1400px){
  .hero .job-headline{
    font-size: 25px;
  }
}
.job-headline .rotate-1 .words-wrapper{
  perspective: 300px;
}
.words-wrapper{
  display: inline-block;
  position: relative;
  text-align: left;
}
.hero .hero-buttons{
  width: 100%;
  float:left;
  display: flex;
  align-items: center;
  gap: 44px;
}
@media (max-width:1400px){
  .hero .hero-buttons{
    margin-top: 25px;
    margin-bottom: 45px;
  }
}
.hero .Kyle-button{
  width: auto;
}
.Kyle-button{
  height: auto;
  clear: both;
  float: left;
}
.Kyle-button a{
  text-decoration: none;
  color: #fff;
  font-family: sans-serif;
  display: inline-block;
  background-color: #ea4343;
  font-weight: 700;
  position: relative;
  border-radius: 6px;
  border: 20px solid #ea4343;
  white-space: nowrap;
  transition: all .3s ease;
}
@media(max-width:1400px){
  .Kyle-button a{
    padding: 10px 62px 9px 35px;
  }
}
@media (max-width:1400px){
  .Kyle-hero .just-button{
    margin-left: 28px;
  }
}
.just-button a{
  text-decoration: none;
  color: #fff;
  font-family: sans-serif;
  display: inline-block;
  background-color: #ea4343;
  font-weight: 700;
  position: relative;
  border-radius: 6px;
  border: 20px solid #ea4343;
  white-space: nowrap;
  transition: all .3s ease;
}
a{
  cursor:pointer;
}
.hero .just-button a:after{
  content: "";
  width: 0;
  height: 1px;
  position: absolute;
  left: auto;
  right: 0;
  bottom: 3px;
  transition: width .6s cubic-bezier(.25,.8,.25,1)0s;
  background: currentColor;
}
a{
  text-decoration: none;
}
#home{
display: flex;
flex-direction: row;
gap: 20px;
height: 100vh;
background-color: white;
}
.mypic{
  height: 400px;
  width: 400px;
  border-radius: 100%;
 
}
.cta {
	display: inline-block;
	padding: 10px 30px;
	color: rgb(0, 0, 0);
	background-color: transparent;
	border: 2px solid crimson;
	font-size: 2rem;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	margin-top: 30px;
	transition: 0.3s ease;
	transition-property: background-color, color;
}
.cta:hover {
	color: white;
	background-color: crimson;
}
.social-icons {
  position: fixed;
  z-index: 1;
  /* top: 3%;
  left: 3%; */
  right: 3%;
  bottom: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.social-icon i {
  font-size: 30px;
  color: crimson;
  transition: color 0.3s linear;
}

.social-icon:hover i {
  color: var(--blueGray9);
}
.name{
  font-size: 20px;
}
</style>//*