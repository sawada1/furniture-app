<template>
  <div class="about">
    <h2>about us</h2>
    <div class="text">
     <router-link to="/">home</router-link>
     <span>/</span>
     <p>about</p>
    </div>
  </div>
  <div class="aboutLanding">
    <div class="image">
     <img src="../assets/image/about-img.jpg" alt="">
    </div>
    <div class="text">
    <span>Welcome To Our Shop</span>
    <h3>We Make Your Home More Astonishing</h3>
   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
   Numquam aut id unde voluptatum culpa! Quod, nesciunt
   . Quisquam perferendis ducimus quas.</p>
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, nam.</p>
   <button>read more</button>
    </div>
  </div>
  <div class="services">
    <div class="text">
     <h3>our services</h3>
     <span>view all >></span>
    </div>
    <hr>
    <div class="mainbox">
     <div class="box">
       <img src="../assets/image/serv-1.svg" alt="">
       <h4>Product Selling</h4>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, deleniti!</p>
       <button>read more</button>
     </div>
     <div class="box">
       <img src="../assets/image/serv-2.svg" alt="">
       <h4>Product Designing</h4>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, deleniti!</p>
       <button>read more</button>
     </div>
     <div class="box">
       <img src="../assets/image/serv-3.svg" alt="">
       <h4>24 / 7 Support</h4>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, deleniti!</p>
       <button>read more</button>
     </div>
    </div>
  </div>
</template>



<script>

</script>



<style lang="scss">
    @import '../sass/main.scss';

.about{
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
  background-color: $green;
  color: #fff;
  a{
    color: #fff;
    &:hover{
      color: yellow;
    }
  }
  .text{
    display: flex;
    align-items: center;
    gap: 30px;
    p{
      color: yellow;
    }
  }
}
.aboutLanding{
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  .image{
    width: 50%;
    img{
      width: 100%;
    }
  }
  .text{
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    span{
      color: gray;
      font-size: 20px;
    }
    h3{
      color: $green;
    }
    p{
      color: grey;
    }
    button{
      padding: 10px 20px;
      color: #fff;
      font-size: 18px;
      background-color: $green;
      border: none;
      transition: 0.5s;
      cursor: pointer;
      &:hover{
        background-color: $ligth;
      }
    }
  }
}


.services{
  margin-top: 60px;
  .text{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    h3{
      font-size: 35px;
    }
    span{
      color: gray;
    }
  }
  .mainbox{
    margin-top: 30px;
    margin-bottom: 50px;
    @include grid(3);
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    gap: 30px;
    .box{
      margin: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 20px;
      background-color: #ccc;
      padding: 30px;
      border-radius: 20px;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.392);
      transition: 0.5s;
      &:hover{
        transform: translateY(-15px)
      }
      button{
        @include btn(10px , 20px , 20px);
        border-radius: 10px;
        &:hover{
          background-color: $ligth;
        }
      }
    }
  }
}


@media (max-width:892px){
  .services{
    .mainbox{
      @include grid(2);
    }
  }
}
@media (max-width:750px){
  .services{
    .mainbox{
      @include grid(1);
      .box{
        img{
          width: 170px;
        }
      }
    }
  }
}


@media (max-width:760px){
  .aboutLanding{
    flex-direction: column;
    .image{
      width: 100%;
      img{
        width: 100%;
      }
    }
    .text{
      width: 100%;
      padding: 30px;
    }
  }
}
</style>
