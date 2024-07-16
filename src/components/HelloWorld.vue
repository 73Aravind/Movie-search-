<template>
  <div class="container text-center">
  <div class="row">
  <div class="col-12 col-md-6 col-lg-4">
 <div class="card" style="width: 18rem;">
  <img :src="movie.Poster" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ movie.Title }} {{ movie.Year }}</h5>
    
    <a href="#" class="btn btn-primary">Next</a>
  </div>
</div>
</div>
</div>
</div>
 </template>

<script>
export default {
  props:['movie']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.col-12 col-md-6 col-lg-4{
  
  padding-top:20px;
}
body{
  background-color:aquamarine;
}
.row{
  padding:20px 20px 20px 20px;
}
.card-body{
  padding-top: 20px;
}
</style>
