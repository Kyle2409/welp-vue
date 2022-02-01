<template>
<Navbar/>
<section id="journey">
  <h1 class="section-title"  style="padding-top: 100px;">RES<span>U</span>ME</h1>
  <div class="timeline">
    <ul>
      <li>
        <div class="content">
          <h3>September 2021 -
            present</h3>
            <h2>Life Choices Coding Academy</h2>
          <p>Learning the fundamentals of coding ,while also finding out more about myself. </p>
        </div>
        <div class="time">
          <h4>Present</h4>
        </div>
      </li>
      <li>
        <div class="content">
          <h3>March 2021 -
            September 2021</h3>
          <h2>Civil Teaching Assistant</h2>
          <p>Giving a helping hand to the teacher to lighten the work load of the teacher at Oval North High School</p>
        </div>
        <div class="time">
          <h4>2021</h4>
        </div>
      </li>
      <li>
        <div class="content">
          <h3>january 2018 - December
            2020</h3>
          <h2>Completed N6 Civil Engineering</h2>
          <p>Gaining knowledge about the building industry and gaining new skills, finishing my N6 at Northlink College.</p>
        </div>
        <div class="time">
          <h4>2018-2020</h4>
        </div>
      </li>
      <li>
        <div class="content">
          <h3>March 2017 - December
            2017</h3>
          <h2>Apprenticeship</h2>
          <p>Doing a Apprenticeship at Nickay Photography learning about Web Development,Administration and Customer Service.</p>
        </div>
        <div class="time">
          <h4>2017</h4>
        </div>
      </li>
      
      <li>
        <div class="content">
          <h3>December 2016</h3>
          <h2>Completed my National Senior Certificate</h2>
          <p>Completed my National Senior Certificate at Bellville Technical High School(HTS)</p>
        </div>
        <div class="time">
          <h4>2016</h4>
        </div>
      </li>
      <div style="clear:both;"></div>
    </ul>
  </div>
 </section>
</template>
<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Resume',
  components: {
  Navbar
  }
}
</script>

<style>
#journey.section-title {
	
	font-size: 4rem;
	font-weight: 300;
	color: black;
	margin-bottom: 10px;
	text-transform: uppercase;
	letter-spacing: 0.2rem;
	text-align: center;
}
hr{
	margin-top: 100px;
	border-radius: 50px;
	background-color: crimson;
	height: 10px;
	margin-left: 800px;
	margin-right: 800px;
}
 #journey h1{
	font-size:60px;
	text-align:center;
	margin-bottom: 50px;
  }
#journey.timeline{
	padding-top: 400px;
	position:relative;
	margin:50px auto;
	padding:40px 0;
	width:1000px;
	box-sizing:border-box;
  }
  .timeline:before{
	  margin-top: 40px;
	content:'';
	position:absolute;
	left:50%;
	width:2px;
	height:69%;
	background:#c5c5c5;
  }
  .timeline ul{
	padding:0;
	margin:0;
  }
  .timeline ul li{
	list-style:none;
	position:relative;
	width:50%;
	padding:20px 40px;
	box-sizing:border-box;
  }
  .timeline ul li:nth-child(odd){
	float:left;
	text-align:right;
	clear:both;
  }
  .timeline ul li:nth-child(even){
	float:right;
	text-align:left;
	clear:both;
  }
  .content{
	padding-bottom:20px;
  }
  .timeline ul li:nth-child(odd):before
  {
	content:'';
	position:absolute;
	width:10px;
	height:10px;
	top:24px;
	right:-6px;
	background:crimson;
	border-radius:50%;
	box-shadow:0 0 0 3px rgba(233,33,99,0.2);
  }
  .timeline ul li:nth-child(even):before
  {
	content:'';
	position:absolute;
	width:10px;
	height:10px;
	top:24px;
	left:-4px;
	background:crimson;
	border-radius:50%;
	box-shadow:0 0 0 3px rgba(233,33,99,0.2);
  }
  .timeline ul li h3{
	padding:0;
	margin:0;
	color:crimson;
	font-weight:600;
  }
  .timeline ul li p{
	margin:10px 0 0;
	padding:0;
  }
  .timeline ul li .time h4{
	margin:0;
	padding:0;
	font-size:14px;
  }
  .timeline ul li:nth-child(odd) .time
  {
	position:absolute;
	top:12px;
	right:-165px;
	margin:0;
	padding:8px 16px;
	background:crimson;
	color:#fff;
	border-radius:18px;
	box-shadow:0 0 0 3px rgba(233,33,99,0.3);
  }
  .timeline ul li:nth-child(even) .time
  {
	position:absolute;
	top:12px;
	left:-165px;
	margin:0;
	padding:8px 16px;
	background:crimson;
	color:#fff;
	border-radius:18px;
	box-shadow:0 0 0 3px rgba(233,33,99,0.3);
  }
  @media(max-width:1000px)
  {
	.timeline{
	  width:100%;
	}
	.timeline:before{
		margin-top: 40px;
	  content:'';
	  position:absolute;
	  left:50%;
	  width:2px;
	  height:68%;
	  background:#c5c5c5;
	}
  }
  @media(max-width:767px){
	.timeline{
	  width:100%;
	  padding-bottom:0;
	}
	
	.timeline:before{
	  left:20px;
	  height:110%;
	}
	.timeline ul li:nth-child(odd),
	.timeline ul li:nth-child(even)
	{
	  width:100%;
	  text-align:left;
	  padding-left:50px;
	  padding-bottom:50px;
	}
	.timeline ul li:nth-child(odd):before,
	.timeline ul li:nth-child(even):before
	{
	  top:-18px;
	  left:16px;
	}
	.timeline ul li:nth-child(odd) .time,
	.timeline ul li:nth-child(even) .time{
	  top:-30px;
	  left:50px;
	  right:inherit;
	}
  }
</style>