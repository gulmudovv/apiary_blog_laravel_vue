
<template>
<div id="wrapper">      

      <!-- sidebar -->
      <div class="sidebar" :class="{showOverlay:overlayVisibility}">
        <span class="closeButton" @click="HideOverlay">&times;</span>
        <p class="brand-title"><router-link  :to="{name:'Home'}">Блог Пчеловода.</router-link></p>

        <div class="side-links">
          <ul @click="HideOverlay">
            <li><router-link  :to="{name:'Home'}">Главная</router-link></li>
            <li><router-link  :to="{name:'Blog'}">Блог</router-link></li>
            <li><router-link  :to="{name:'About'}">О нас</router-link></li>
            <li><router-link  :to="{name:'Contact'}">Контакты</router-link></li>
            <li v-if="!loggedIn"><router-link  :to="{name:'Login'}">Войти</router-link></li>
            <li v-if="!loggedIn"><router-link  :to="{name:'Register'}">Регистрация</router-link></li>
            <li v-if="loggedIn"><router-link  :to="{name:'Dashboard'}">Dashboard</router-link></li>
          </ul>
        </div>

        <!-- sidebar footer -->
        <footer class="sidebar-footer">
          <div>
            <a href=""><i class="fab fa-facebook-f"></i></a>
            <a href=""><i class="fab fa-instagram"></i></a>
            <a href=""><i class="fab fa-twitter"></i></a>
          </div>

          <small>&copy; {{ new Date().getFullYear() }} Apiary Blog</small>
        </footer>
      </div>
      <!-- Menu Button -->
      <div class="menuButton" @click="ShowOverlay">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <!-- main -->
      <main class="container">
        <router-view 
        @update-sidebar="updateSidebar"
        @show-edit-success="showEditSuccess" 
        :editPostSuccess = "editPostSuccess"
        :key="$route.path">
      </router-view>
      </main>

      <!-- Main footer -->
      <footer class="main-footer">
        <div>
          <a href=""><i class="fab fa-facebook-f"></i></a>
          <a href=""><i class="fab fa-instagram"></i></a>
          <a href=""><i class="fab fa-twitter"></i></a>
        </div>
        <small>&copy; {{ new Date().getFullYear() }} Apiary Blog</small>
      </footer>
    </div>
</template>

<script>
export default{
  data(){
    return{
      overlayVisibility: false,
      loggedIn: false,
      editPostSuccess:false
    }
  },
  methods:{
     ShowOverlay(){
        this.overlayVisibility = true;
     },
     HideOverlay(){
        this.overlayVisibility = false;
     },
     updateSidebar(){
       this.loggedIn = !this.loggedIn;
     },
     showEditSuccess(){
       this.editPostSuccess = true;
     }
  },
  mounted(){
    if(localStorage.getItem('authenticated')){
      this.loggedIn = true;
    }else{
      this.loggedIn = false;
    }
  }

}

</script>

<style scoped>
.showOverlay{
  width: 100%;
  z-index: 5;
}
</style>
