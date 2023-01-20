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
          <div class="card-blog-content">
            <img src="images/pic1.jpg" alt="" />
            <p>
              2 hours ago
              <span style="float: right">Written By Alphayo Wakarindi</span>
            </p>
            <h4 style="font-weight: bolder">              
              <router-link :to="{name:'SingleBlog', params:{slug:'SingleBlog'}}">Benefits of Getting Covid 19 Vaccination</router-link>
            </h4>
          </div>

          <div class="card-blog-content">
            <img src="images/pic2.jpg" alt="" />
            <p>
              23 hours ago
              <span style="float: right">Written By Alphayo Wakarindi</span>
            </p>
            <h4 style="font-weight: bolder">
              <router-link :to="{name:'SingleBlog', params:{slug:'SingleBlog'}}">Benefits of Getting Covid 19 Vaccination</router-link>
            </h4>
          </div>

          <div class="card-blog-content">
            <img src="images/pic3.jpg" alt="" />
            <p>
              2 days ago
              <span style="float: right">Written By Alphayo Wakarindi</span>
            </p>
            <h4 style="font-weight: bolder">
              <router-link :to="{name:'SingleBlog', params:{slug:'SingleBlog'}}">Benefits of Getting Covid 19 Vaccination</router-link>
            </h4>
          </div>

          <div class="card-blog-content">
            <img src="images/pic4.jpg" alt="" />
            <p>
              3 days ago
              <span style="float: right">Written By Alphayo Wakarindi</span>
            </p>
            <h4 style="font-weight: bolder">
              <router-link :to="{name:'SingleBlog', params:{slug:'SingleBlog'}}">Benefits of Getting Covid 19 Vaccination</router-link>
            </h4>
          </div>
        </section>
</template>