<template>
    <div class="team">
        <h2>our team</h2>
    <div class="text">
     <router-link to="/">home</router-link>
     <span>/</span>
     <p>team</p>
    </div>
    </div>


    <div class="ourteam">
        <div class="text">
     <h3>our team</h3>
     <span>view all >></span>
    </div>
    <hr>
    <div class="mainbox">
     <div class="box">
       <div class="image">
         <img src="../assets/image/khaled1.jpg" alt="">
         <div class="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
         </div>
       </div>
       <div class="textt">
        <h4>khaled sawada</h4>
        <span>web Designer</span>
       </div>
     </div>
     <div class="box">
       <div class="image">
         <img src="../assets/image/khaled2.jpg" alt="">
         <div class="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
         </div>
       </div>
       <div class="textt">
        <h4>khaled sawada</h4>
        <span>web Designer</span>
       </div>
     </div>
     <div class="box">
       <div class="image">
         <img src="../assets/image/khaled3.jpg" alt="">
         <div class="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
         </div>
       </div>
       <div class="textt">
        <h4>khaled sawada</h4>
        <span>web Designer</span>
       </div>
     </div>
     <div class="box">
       <div class="image">
         <img src="../assets/image/team-2.jpg" alt="">
         <div class="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
         </div>
       </div>
       <div class="textt">
        <h4>khaled sawada</h4>
        <span>web Designer</span>
       </div>
     </div>
     <div class="box">
       <div class="image">
         <img src="../assets/image/team-4.jpg" alt="">
         <div class="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
         </div>
       </div>
       <div class="textt">
        <h4>khaled sawada</h4>
        <span>web Designer</span>
       </div>
     </div>
     <div class="box">
       <div class="image">
         <img src="../assets/image/team-6.jpg" alt="">
         <div class="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
         </div>
       </div>
       <div class="textt">
        <h4>khaled sawada</h4>
        <span>web Designer</span>
       </div>
     </div>
    </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
    @import '../sass/main.scss';

  .team{
    @include banner();
  }

  .ourteam{
    margin-top: 50px;
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
    width: 90%;
    margin: 0px 5%;
    .box{
        margin: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px solid #332;
        transition: 0.5s;
        &:hover {
                transform: translateY(-15px);
          }
        .image{
          width: 100%;
        position: relative;
        overflow: hidden;
          img{
            height: 400px;
            width: 100%;
            object-fit: cover;
            transition: 0.5s;
          }
         .icons{
            position: absolute;
            z-index: 1111;
            top: 0%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
            color: #fff;
            background-color: $green;
            height: 99%;
            padding: 20px;
            transform: translateX(-100%);
            transition: 0.4s;
            i{
                border: 2px solid #fff;
                padding: 7px;
                transition: 0.4s;
                cursor: pointer;
                &:hover{
                   background-color: #fff;
                   color: $green;
                }
            }
         }
         &:hover .icons{
            transform: translateX(0);
         }
        }
        .textt{
            display: flex;
            width: 100%;
            align-items: center;
            padding: 10px 30px;
            gap: 10px;
            h4{
                font-size: 15px;
            }
            span{
                font-size: 14px;
                color: gray;
            }
        }
    }
  }
  }

  @media(max-width: 950px){
    .ourteam{
        .mainbox{
            @include grid(2);
        }
    }
  }
  @media(max-width: 720px){
    .ourteam{
        .mainbox{
            @include grid(1);
            .box{
                .image{
                    img{
                        height: 600px;
                    }
                }
                .textt{
                    justify-content: space-around;
                    h4{
                        font-size: 30px;
                    }
                    span{
                        font-size: 20px;
                    }
                }
            }
        }
    }
  }
</style>