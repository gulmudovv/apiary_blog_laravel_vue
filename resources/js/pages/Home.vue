<template>
  <!-- header -->
  <header class="header">
        <div class="header-text">
          <h1>Блог пчеловода</h1>
          <h4>Для тех кому интересно пчеловодство.</h4>
        </div>
        <div class="overlay"></div>
      </header>
    <h2 class="header-title">Последние добавленные статьи</h2>
        <section class="cards-blog latest-blog">
          
          <div v-for="post in posts" :key="post.id" class="card-blog-content">
            <img :src="post.imagePath" alt="" />
           
            <p>
              {{ post.created_at }}
              <span style="float: right">Written by: {{ post.user }}</span> 
              
            </p>
            <h4 style="font-weight: bolder">              
              <router-link :to="{name:'SingleBlog', params:{slug: post.slug}}">{{ post.title }}</router-link>
            </h4>
          </div>

          
        </section>
</template>

<script>
export default {
  emits:['updateSidebar'],
  data(){
    return {
      posts:[],
    }
   
  },
  mounted(){
    axios.get('/api/home-posts')
      .then((response)=>{
        
        this.posts=response.data.data})        
        .catch((error)=>{
            console.log(error);
       })
  }
}
</script>
