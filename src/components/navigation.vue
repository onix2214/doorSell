<template>
<div class="col-12 first">
  <!-- Навигация -->
  <nav class="navbar navbar-expand-lg col-12">
    <div class="container col-10 mt-3">
      <div class="col-4">
        <a class="navbar-brand" href="#">LOGO</a>
      </div>
      <div class="col-5 collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
          <li class="nav-item">
              <router-link to="/Home">
                <a @click="rel" class="nav-link active" aria-current="page" href="#"><u>Главная</u></a>
              </router-link>
            </li>
          <li class="nav-item">
            <router-link to="/Catalog">
              <a class="nav-link" href="#">Каталог</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/AboutUs">
              <a class="nav-link" href="#">О нас</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Contacts">
              <a class="nav-link" href="#">Контакты</a>
            </router-link>
          </li>
        </ul>
        <div class="col-2 d-flex flex-row justify-content-between">
            <img src="/public/nav/Search.svg" alt="">
            <img src="/public/nav/User.svg" alt="">
            <img src="/public/nav/Cart.svg" alt="">
        </div>
      </div>
    </div>
  </nav>
  <!-- Header -->
  <div class="container col-10 d-flex flex-column align-items-start h-75 mt-4 justify-content-center">
    <p class="title">WE OFFERING YOU THE BEST HOME DECOR PRODUCTS & ITEMS FOR A DREAM HOME</p>
    <button class="btn NavButton p-3 mt-4">EXPLORE OUR PRODUCTS</button>
  </div>
</div>
<div style="bottom: 0; width: 100%; height: 10px; background-color: blue; background: linear-gradient(#F8F5F3, white);"></div>
</template>
<script>
export default{
  data(){
    
  },
  methods:{
    rel(){
      window.location().reload;
    }
  }
}
</script>