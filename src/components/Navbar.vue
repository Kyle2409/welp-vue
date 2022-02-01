<template>
<div id="nav">
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarBrand href="#"><h1><span>K</span>YLE <span>M</span>C <span>B</span>RYNE</h1></MDBNavbarBrand>
    <!-- Toggle button -->
    <MDBNavbarToggler
      target="#navbarRightAlignExample"
      @click="collapse5 = !collapse5"
    ></MDBNavbarToggler>
    <!-- Collapsible wrapper -->
    <MDBCollapse v-model="collapse5" id="navbarRightAlignExample">
      <MDBNavbarNav right class="mb-2 mb-lg-0">
        <!-- Right links -->
        <MDBNavbarItem router-link to="/" >
         <p>Home</p> 
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name:'About'}">
        <p>About</p> 
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name: 'Resume'}">
        <p>Resume</p> 
        </MDBNavbarItem>
        <MDBNavbarItem  router-link :to="{ name: 'Projects' }">
       <p>Projects</p> 
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{ name: 'Testimonials' }">
        <p>Testimonials</p> 
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{ name: 'Contact'}">
        <p>Contact</p> 
        </MDBNavbarItem>
        <!-- Navbar dropdown -->
       
           
       
        <!-- Right links -->
      </MDBNavbarNav>
    </MDBCollapse>
    <!-- Collapsible wrapper -->
  </MDBNavbar>


</div>
</template>

<script>
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';
  export default {
    components: {
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarBrand,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBCollapse,
      MDBDropdown,
      MDBDropdownToggle,
      MDBDropdownMenu,
      MDBDropdownItem
    },
    setup() {
      const collapse5 = ref(false);
      const dropdown8 = ref(false);
      return {
        collapse5,
        dropdown8
      }
    }
  };
</script>

<style>
/* .navbar-brand h1{
  color: white !important;

}
.bg-dark{
  background-color: rgb(136, 117, 117) !important;
}
#nav{
  z-index: -2;
}
#nav a {
font-weight: bold;
color: white;
text-decoration: none;
padding: 10px;
border-radius: 4px;
}

#navbar a.router-link-exact-active {
color: white;
background: crimson;
}
div#navbarNav{
  justify-content: end;
}

#Nav .h1{
  color: white;
} */
 span {
	color: crimson;
}

#nav p{
  font-size: 20px;
  padding-left: 100px;
}
</style>