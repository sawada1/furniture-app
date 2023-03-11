<template>
      <!-- :scrollbar="{ draggable: true }" -->
  <div class="home">
    <div class="landing">
      <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"

    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
  <swiper-slide>
  
       <div class="box">
        <div class="text">
         <span>new arrivals</span>
         <h2>Flexible Chair</h2>
          <p>Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Corporis
           expedita architecto tenetur 
           nostrum odit exercitationem?</p>
           <button>shop now</button>
        </div>
        <div class="image">
         <img src="../assets/image/home-img-1.png" alt="">
        </div>
       </div>

      </swiper-slide>
  <swiper-slide>
       <div class="box">
        <div class="text">
         <span>new arrivals</span>
         <h2>Flexible Chair</h2>
          <p>Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Corporis
           expedita architecto tenetur 
           nostrum odit exercitationem?</p>
           <button>shop now</button>
        </div>
        <div class="image">
         <img src="../assets/image/home-img-2.png" alt="">
        </div>
       </div>

      </swiper-slide>
  <swiper-slide>
       <div class="box">
        <div class="text">
         <span>new arrivals</span>
         <h2>Flexible Chair</h2>
          <p>Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Corporis
           expedita architecto tenetur 
           nostrum odit exercitationem?</p>
           <button>shop now</button>
        </div>
        <div class="image">
         <img src="../assets/image/home-img-1.png" alt="">
        </div>
       </div>

      </swiper-slide>
  <swiper-slide>
       <div class="box">
        <div class="text">
         <span>new arrivals</span>
         <h2>Flexible Chair</h2>
          <p>Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Corporis
           expedita architecto tenetur 
           nostrum odit exercitationem?</p>
           <button>shop now</button>
        </div>
        <div class="image">
         <img src="../assets/image/home-img-2.png" alt="">
        </div>
       </div>

      </swiper-slide>

      </swiper>
    </div>
    <div class="boxes">
     <div class="thebox">
       <div class="text">
       <span>limited offer</span>
       <h3>up to 50% off</h3>
       <button>shop now</button>
       </div>
       <div class="image">
       <img src="../assets/image/banner-2.jpg" alt="">
       </div>
     </div>
     <div class="thebox">
       <div class="text">
       <span>limited offer</span>
       <h3>up to 50% off</h3>
       <button>shop now</button>
       </div>
       <div class="image">
       <img src="../assets/image/banner-3.jpg" alt="">
       </div>
     </div>
     <div class="thebox">
       <div class="text">
       <span>limited offer</span>
       <h3>up to 50% off</h3>
       <button>shop now</button>
       </div>
       <div class="image">
       <img src="../assets/image/banner-1.jpg" alt="">
       </div>
     </div>
    </div>
  </div>









</template>

<script>
// @ is an alias to /src
 // import Swiper core and required modules
 import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default {
  name: 'HomeView',
  components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
}
}
</script>


<style lang="scss">
@import '../sass/main.scss';

.landing{
  margin-top: 100px;  
  padding: 50px;
  .box{
    width: 100%;
    display: flex;
    .text{
      width: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 30px;
      span{
        color: gray;
        font-size: 30px;
      }
      h2{
        font-size: 50px;
      }
      button{
        padding: 15px 30px;
        border-radius: 10px;
        cursor: pointer;
        color: #fff;
        border: none;
        background-color: $green;
        transition: 0.4s;
        &:hover{
          background-color: $ligth;
        }
      }
    }
    .image{
      width: 50%;
      img{
        width: 100%;
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next
  {
    background-color: $green;
    color: #fff;
    padding: 10px 20px;
    font-size: 18px;

  }
}

@media(max-width:785px){
  .landing{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .box{
      flex-direction: column;
      gap: 30px;
      justify-content: center;
      .image{
        width: 100%;
        img{
          width: 100%;
        }
      }
      .text{
        width: 100%;
      }
    }
  }
}
.boxes{
  @include grid(3);
  gap: 10px;
  // position: relative;
  width: 90%;
  margin: 20px auto;
  .thebox{
    width: 90%;
    position: relative;
    .image{
       width: 100%;
       position: relative;
       img{
        width: 300px;
        object-fit: contain;
        transition: 0.5s;
        &:hover{
          transform:scale(1.1);
        }
       }
    }
    .text{
      position: absolute;
      z-index: 1111;
      top: 20%;
      left: 10px;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 5px;
      h3{
        color: $green;
      }
      button{
        background-color: $green;
        color: #fff;
        padding: 10px 20px;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.5s;
        border: none;
        &:hover{
          background-color: $ligth;
        }
      }
    }
  }
}

@media(max-width:900px){
  .boxes{
    @include grid(2);
  }
}
@media(max-width:700px){
  .boxes{
    // width: 100%;
    @include grid(1);
    gap: 50px;
    .thebox{
      margin: 20px 0px;
      width: 100%;
      .image{
        width: 100%;
        img{
          width: 100%;
        }
      }
    }
  }
}
  











</style>
