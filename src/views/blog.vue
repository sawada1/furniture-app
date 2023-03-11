<template>
    <div class="blog">
        <h2>our blog</h2>
    <div class="text">
     <router-link to="/">home</router-link>
     <span>/</span>
     <p>blogs</p>
    </div> 
    </div>
    <div class="ourblog">
        <div class="text">
     <h3>Categories</h3>
     <span>view all >></span>
    </div>
    <hr>
     <div class="mainbox">
      <div class="box">
      <div class="image">
       <img src="../assets/image/blog-1.jpg" alt="">
      </div>
       <div class="textt">
        <h5>Blog Title Goes Here...</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, sequi!</p>
         <button>read more</button>
         <div class="date">
            <div class="calender">
                <i class="fa-solid fa-calendar"></i>
             <span> 6st March, 2023</span> 
            </div>
            <div class="user">
                <i class="fa-solid fa-user"></i>
             <span>by admin</span>
            </div>
         </div>
       </div>
      </div>
      <div class="box">
      <div class="image">
       <img src="../assets/image/blog-2.jpg" alt="">
      </div>
       <div class="textt">
        <h5>Blog Title Goes Here...</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, sequi!</p>
         <button>read more</button>
         <div class="date">
            <div class="calender">
                <i class="fa-solid fa-calendar"></i>
             <span> 6st March, 2023</span> 
            </div>
            <div class="user">
                <i class="fa-solid fa-user"></i>
             <span>by admin</span>
            </div>
         </div>
       </div>
      </div>
      <div class="box">
      <div class="image">
       <img src="../assets/image/blog-3.jpg" alt="">
      </div>
       <div class="textt">
        <h5>Blog Title Goes Here...</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, sequi!</p>
         <button>read more</button>
         <div class="date">
            <div class="calender">
                <i class="fa-solid fa-calendar"></i>
             <span> 6st March, 2023</span> 
            </div>
            <div class="user">
                <i class="fa-solid fa-user"></i>
             <span>by admin</span>
            </div>
         </div>
       </div>
      </div>
      <div class="box">
      <div class="image">
       <img src="../assets/image/blog-4.jpg" alt="">
      </div>
       <div class="textt">
        <h5>Blog Title Goes Here...</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, sequi!</p>
         <button>read more</button>
         <div class="date">
            <div class="calender">
                <i class="fa-solid fa-calendar"></i>
             <span> 6st March, 2023</span> 
            </div>
            <div class="user">
                <i class="fa-solid fa-user"></i>
             <span>by admin</span>
            </div>
         </div>
       </div>
      </div>
      <div class="box">
      <div class="image">
       <img src="../assets/image/blog-5.jpg" alt="">
      </div>
       <div class="textt">
        <h5>Blog Title Goes Here...</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, sequi!</p>
         <button>read more</button>
         <div class="date">
            <div class="calender">
                <i class="fa-solid fa-calendar"></i>
             <span> 6st March, 2023</span> 
            </div>
            <div class="user">
                <i class="fa-solid fa-user"></i>
             <span>by admin</span>
            </div>
         </div>
       </div>
      </div>
      <div class="box">
      <div class="image">
       <img src="../assets/image/blog-6.jpg" alt="">
      </div>
       <div class="textt">
        <h5>Blog Title Goes Here...</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, sequi!</p>
         <button>read more</button>
         <div class="date">
            <div class="calender">
                <i class="fa-solid fa-calendar"></i>
             <span> 6st March, 2023</span> 
            </div>
            <div class="user">
                <i class="fa-solid fa-user"></i>
             <span>by admin</span>
            </div>
         </div>
       </div>
      </div>
     </div>
    </div>
</template>

<script >

</script>

<style lang="scss">
  @import '../sass/main.scss';

  .blog{
    @include banner();
  }

  .ourblog{
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
        @include grid(3);
        gap: 20px;
        width: 85%;
        margin: 50px 7%;
        .box{
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 100%;
            border: 2px solid #333;
            transition: 0.5s;
            box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.39);
            &:hover{
                transform: translateY(-10px);
            }
            .image{ 
                width: 100%;
                img{
                    width: 100%;
                    object-fit: contain;
                    transition: 0.5s;
                }
                transition: 0.5s;
            }
            .textt{
                padding: 20px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                button{
                    @include btn(10px , 20px , 16px);
                    width: 50%;
                    &:hover{
                        background-color: $ligth;
                    }
                }
                .date{
                    border-top: 1px solid #333;
                    padding: 10px;
                    margin-top: 10px;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    justify-content: space-around;
                    .calender,.user{
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        i{
                            font-size: 15px;
                        }
                        span{
                            font-size: 13px;
                        }
                    }
                }
            }
        }
    }
  }


  @media(max-width:920px){
    .ourblog{
        .mainbox{
            @include grid(2);
        }
    }
  }
  @media(max-width:680px){
    .ourblog{
        .mainbox{
            @include grid(1);
        }
    }
  }

</style>