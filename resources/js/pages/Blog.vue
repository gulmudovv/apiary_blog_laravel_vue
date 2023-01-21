<template>
    <h2 class="header-title">Все опубликованные статьи.</h2>
      <div class="searchbar">
        <form action="">
          <input type="text" placeholder="Search..." name="search" />

          <button type="submit">
            <i class="fa fa-search"></i>
          </button>

        </form>
      </div>
      <div class="categories">
        <ul >
          <li v-for="category in categories" :key="category.id" ><a href="">{{ category.name }}</a></li>
          
        </ul>
      </div>
      <section class="cards-blog latest-blog">
        <div class="card-blog-content" v-for="post in posts" :key="post.id">
          <img :src="`/${post.imagePath}`" alt="" />
          <p>
            {{post.created_at}}
            <span>{{ post.user }}</span>
          </p>
          <h4>
            <router-link :to="{name:'SingleBlog', params:{slug: post.slug}}">{{ post.title }}</router-link>
          </h4>
        </div>  
          <!-- pagination -->
          <div class="pagination-container">  <div class="pagination" id="pagination">
          <a href="">&laquo;</a>
          <a class="active" href="">1</a>
          <a href="">2</a>
          <a href="">3</a>
          <a href="">4</a>
          <a href="">5</a>
          <a href="">&raquo;</a>
        </div></div>
      
      </section>

</template>

<script>


export default {
  emits:['updateSidebar'],
  data(){
    return{
      categories:[],
      posts:[],
      
    }
  },
  mounted(){
    this.fetchPosts(), 
    this.fetchCategories()
       
  },
  
  methods:{
    fetchPosts(){
      axios.get('/api/posts').then((response)=>this.posts=response.data.data)
      .catch((error)=>console.log(error))
    },
    fetchCategories(){
      axios.get('/api/categories').then((response)=>this.categories=response.data)
      .catch((error)=>console.log(error))
    }
    
  }
}
</script>
<style scoped>
 .pagination-container{
  display: block;
 }
</style>