<template>
<Navbar/>
  <div v-if="Projects">
      <h1>{{ Projects.image }}</h1>
      <h1>{{ Projects.title }}</h1>
      <p>Project {{ id }}</p>
      <h2>{{ Projects.details }}</h2>
      <h3>{{ Projects.github }}</h3>
      <h3>{{ Projects.live}}</h3>
  </div>
  <div v-else>
     <p> Loading Projects...</p>
  </div>
</template>

<script>
export default {
props: ["id"],
data() {
    return {
        Projects: null,
    };
},
  mounted() {
    fetch("  http://localhost:3000/Projects/" + this.id)
      .then((res) => res.json())
      .then((data) => {
           this.Projects = data;
           console.log(data);
      })
      .catch((err) => console.log(err.message));
  },
};
</script>