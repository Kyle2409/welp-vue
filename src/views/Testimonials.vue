
    <template>
      <Navbar/>
<div class="card-list">
  <div class="col-sm-4 col-sm-offset-0 col-xs-12">
    <div class="card">
      <figure class="profile"><img src="https://i.postimg.cc/bJdZG1GW/Hannah.jpg"/>
        <figcaption>
          <p class="name">Mel Moe</p>
          <p class="position">Head of software</p>
        </figcaption>
      </figure>
      <div class="body">Kyle is a gifted talent who works hard to produce quality work.</div>
    </div>
  </div>
  <div class="col-lg-4 col-md-4 col-sm-4 hidden-xs">
    <div class="card">
      <figure class="profile"><img src="https://i.postimg.cc/SKHhr9Tw/Bongani3.png"/>
        <figcaption>
          <p class="name">Jane Doe</p>
          <p class="position">Founder &amp; CEO</p>
        </figcaption>
      </figure>
      <div class="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odio voluptates quibusdam excepturi amet, itaque aliquid, a sed atque obcaecati delectus eum saepe</div>
    </div>
  </div>
  <div class="col-lg-4 col-md-4 col-sm-4 hidden-xs">
    <div class="card">
      <figure class="profile"><img src="https://i.postimg.cc/Jhs8ZxqN/Nadeem.jpg"/>
        <figcaption>
          <p class="name">Michelle Doe</p>
          <p class="position">Managing Partner</p>
        </figcaption>
      </figure>
      <div class="body">Kyle excels in creativity being dedicated and passionate who believes firmly in persistence and patience.
  </div>
</div>
  </div>
</div>
</template>


<script>
import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";
import Navbar from '../components/Navbar.vue'
export default {
name: 'Testimonials',
components: {
Navbar,MDBCarousel
},
setup() {
      const items6 = [
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp",
          alt: "..."
        },
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp",
          alt: "..."
        },
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp",
          alt: "..."
        }
      ];
      const carousel6 = ref(0);
      return {
        items6,
        carousel6
      };
    }
  };

</script>

<style>
.profile img{
  border-radius: 2px;
}
.card-list {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  max-width: 1440px;
  text-align: center;
  width: 100%;
}
.card {
  background-color: transparent;
  border: 5px solid transparent;
  color: #333;
  overflow: hidden;
  position: relative;
  text-align: left;
  text-decoration: none;
  vertical-align: top;
}
.profile {
  background-color: white;
  margin: 0;
}
.profile img {
  display: inline-block;
  height: 100px;
}
.profile figcaption {
  display: inline-block;
  padding: 10px;
  vertical-align: middle;
}
.profile .name {
  color: #252830;
  font-size: 21px;
}
.profile .position {
  color: #7A7A7A;
  font-size: 13px;
}
.body {
  background-color: #013C4D;
  color: white;
  font-size: 15px;
  font-style: italic;
  letter-spacing: 1px;
  line-height: 25px;
  padding: 25px;
}
p {
  margin: 0;
  padding: 0;
}
body {
  background-color: #252830;
}
</style>