<template>
  <div>
    <h2 class="header-title">Все опубликованные статьи.</h2>
      <div class="searchbar">
        <form action="">
          <input type="text" placeholder="Search..." name="search" v-model="title" />

          <button type="submit">
            <i class="fa fa-search"></i>
          </button>

        </form>
      </div>
      <div class="categories">
        <ul >
          <li v-for="category in categories" :key="category.id" @click="filterByCategory(category.name)"><a href="#">{{ category.name }}</a></li>
          
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
               
      </section>
     <h3 v-if="!posts.length">Нет подходящего контента</h3>    

    <div v-if="posts.length" class="pagination-container">  
      <div class="pagination" id="pagination">
          <a href="#" v-for="(link, index) in links" 
          :key="index" 
          v-html="link.label"
          :class="{active:link.active, disableb:!link.url}" 
          @click="changePage(link)"
          >
        </a>          
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  emits:['updateSidebar'],
  data(){
    return{
      categories:[],
      posts:[],
      title:'',
      links:'',
      
    }
  },
  mounted(){
    this.fetchPosts(), 
    this.fetchCategories()
       
  },
  watch:{
    title(){
      axios.get('/api/posts',{
        params:{
          search: this.title
        }
      }).then((response)=>{
        this.posts=response.data.data
        this.links = response.data.meta.links;
      })
      .catch((error)=>console.log(error))
    }
  },
  methods:{
    fetchPosts(){
      axios.get('/api/posts').then((response)=>{
      this.posts=response.data.data
       console.log(response.data.meta.links);
       this.links = response.data.meta.links;
    })
      .catch((error)=>console.log(error))
    },
    fetchCategories(){
      axios.get('/api/categories').then((response)=>this.categories=response.data)
      .catch((error)=>console.log(error))
    },
    filterByCategory(categoryName){
      axios.get('/api/posts',{
        params:{
          category: categoryName
        }
      }).then((response)=>{
        this.posts=response.data.data
        this.links = response.data.meta.links;
      })
      .catch((error)=>console.log(error))
    },
    changePage(link){
       if(!link.url || link.active){
        return;
       }
       axios.get(link.url).then((response)=>{
      this.posts=response.data.data
       
       this.links = response.data.meta.links;
    })
      .catch((error)=>console.log(error))

    }
  
    
  }
}
</script>
<style scoped>
 h3{
  text-align: center;
  font-size: 30px;
  margin: 50px 0;
  color:#fff;
 }

 .disableb{
  pointer-events: none;
  color: dimgrey;
 }
</style>