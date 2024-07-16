<template>
  
        <div class="mov">
  <h1>MovieFlix</h1>
  <div class="input">
   <input type="text" id="name" v-model="search" placeholder="Search your movie"></div>
    <div class="button">
      <button id="but" v-on:click="searchmovies" ><h2>Search</h2></button>

    </div>
        </div>

<ul >
<li  v-for="item in movies.Search" >
<movie-detail v-bind:movie="item"></movie-detail>
</li>
</ul>
</template>


<script>


export default{
data(){ 
return{
search:'',
movies:[],

}
},

methods:{
searchmovies(){
var url='https://www.omdbapi.com/?s=' +this.search+ '&apikey=b4adb819&'
fetch(url)
.then(response=>response.json())
.then(data=>{
console.log(data)
this.movies=data;}
)
}

}


}
</script>

<style>
html,body{
  overflow-x:hidden;
}
.mov{
  position:relative;
  right:-50px;
  
  
}
body{
  background:url("./assets/i.jpg") no-repeat center center fixed;
  background-size: cover;
 
  
 
}
.mov h1{

font-size:100px;
color:white;
}
input[type=text]{
width:380px;
height:40px;

border-radius:30px;
border-style: double;
}
#but{


border-radius: 30px;
}
.input{
 position:relative;
 left:850px;
 top:-80px;
}
.button{
  position:relative;
  left:1270px;
  top:-130px;
  padding:10px;
  width:40px;
  border-radius:30px;
}
.button h2{
  font-size: 20px;
}

</style>