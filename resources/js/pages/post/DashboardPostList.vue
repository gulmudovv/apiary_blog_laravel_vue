<template>
    <div class="categories-list">
      <h1>Posts List</h1>
      <!-- success message -->
      <div class="success-msg" v-if="success">
        <i class="fa fa-check"></i>
        Post deleted successfully
      </div>

      <div class="success-msg" v-if="editPostSuccess">
        <i class="fa fa-check"></i>
        Post updated successfully
      </div>

      <div  class="item" v-for="(post, index) in posts" :key="post.id">
        <span>{{ index +1 }}</span>
        <p>{{ post.title }}</p>
        <div>
          <router-link class="edit-link" :to="{name: 'EditPost', params:{slug:post.slug}}" >Edit</router-link>
          
        </div>
  
        <input type="submit" value="Delete" class="delete-btn" @click="destroy(post.slug)"/>
    </div>    
  
 
   
  
  
      <div class="index-categories">
        <router-link :to="{ name: 'CreatePost' }"
          >Create post<span>&#8594;</span></router-link
        >
      </div>
    
    </div>
  </template>
  <script>
  export default {
    props:['editPostSuccess'],
    emits:['updateSidebar'],
    data(){
      return{
        categories:[],
        posts:[],
        success:false,
        
      }
    },
    mounted(){
      this.fetchPosts(), 
      this.fetchCategories()
         
    },
    
    methods:{
      fetchPosts(){
        axios.get('/api/dashboard-posts').then((response)=>this.posts=response.data.data)
        .catch((error)=>console.log(error))
      },
      fetchCategories(){
        axios.get('/api/categories').then((response)=>this.categories=response.data)
        .catch((error)=>console.log(error))
      },
      destroy(slug){
        axios.delete(`/api/post/${slug}`).then((response)=>{
          this.success = true;
          setTimeout(()=>{
            this.success = false;
          }, 2500);
          this.fetchPosts()
        })
        .catch((error)=>{
          if(error.response.status===403){
            this.$router.push({name: 'DashboardPostList'});
          }
        })
      }
      
    }
  }
  </script>
  <style scoped >

.edit-link{
    padding: 6px 20px;
    background-color: #4caf50;
    color:#fff;
    font-size: 14px;
    display: inline-block;
  }
  .delete-btn{
    padding: 6px 13px;
    background-color:red;
    border: none;
    color:#fff;
    font-size: 14px;
    cursor: pointer;
  }
  .categories-list {
    min-height: 100vh;
    background: #fff;
  }
  .categories-list h1 {
    font-weight: 300;
    padding: 50px 0 30px 0;
    text-align: center;
  }
  .categories-list .item {
    display: flex;
    justify-content: right;
    align-items: center;
    max-width: 300px;
    margin: 0 auto !important;
  }
  .categories-list .item p {
    font-size: 16px;
  }
  .categories-list .item p,
  .categories-list .item div,
  .categories-list .item {
    margin: 15px 8px;
  }
  .categories ul li {
    list-style: none;
    background-color: #494949;
    margin: 20px 5px;
    border-radius: 15px;
  }
  .categories ul {
    display: flex;
    justify-content: center;
  }
  .categories a {
    color: white;
    padding: 10px 20px;
    display: inline-block;
  }
  .create-categories a,
  .index-categories a {
    all: revert;
    margin: 20px 0;
    display: inline-block;
    text-decoration: none;
  }
  .create-categories a span,
  .index-categories a span {
    font-size: 22px;
  }
  .index-categories {
    text-align: center;
  }
  </style>