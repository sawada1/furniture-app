<template>
    <div>
      <div class="navbarr">
      <router-link to="/" class="thelogo">
        <div class="logo">
        <i class="fa-solid fa-chair"></i>
       <h1>furn<i class="fa-solid fa-lightbulb"></i> </h1>  
    </div>    
      </router-link>
      
       <div class="mainnav" :class="{'active':check}">
        <div class="list">
        <ul>
        <li class="mainLi">
        <router-link to="/">
         home
        </router-link>
          <i @click="toggle" class="fa-solid fa-x"></i>
        </li>
        <li>
        <router-link to="/shop">
         shop
        </router-link>
        </li>
        <li>
        <router-link to="/about">
          about        
        </router-link>
        </li>
        <li>
        <router-link to="/team">
         team
        </router-link>
        
        </li>
        <li>
        <router-link to="/blog">
         blog
        </router-link>
        </li>
        <li>
        <router-link to="/contact">
        contact
        </router-link>
   
        </li>
        </ul>
    
       </div>
       </div>
   
       <div class="search">
         <input type="search" placeholder="search...">
         <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div class="icons">
            <i @click="toggle2" class="fa-solid fa-user"></i>
            <i @click="toggle1"  class="fa-solid fa-cart-shopping"></i>
            <i @click="toggle" class="fa-solid fa-bars bar"></i>
        </div>
        <div class="cart" :class="{'active':check1}">
              <div class="mainboxes">
                <i @click="toggle1" class="fa-solid fa-x close"></i>
                 <div class="box first">
                   <img src="../assets/image/cart-img-1.jpg" alt="">
                     <div class="text">
                      <h4>modern furiture</h4>
                      <p>1 X $140.00</p>
                     </div>
                     <i  class="fa-solid fa-x"></i>                     
                 </div>
                 <div class="box">
                   <img src="../assets/image/cart-img-2.jpg" alt="">
                     <div class="text">
                      <h4>modern furiture</h4>
                      <p>1 X $140.00</p>
                     </div>
                     <i  class="fa-solid fa-x"></i>                     
                 </div>
                 <div class="box">
                   <img src="../assets/image/cart-img-3.jpg" alt="">
                     <div class="text">
                      <h4>modern furiture</h4>
                      <p>1 X $140.00</p>
                     </div>
                     <i  class="fa-solid fa-x"></i>                     
                 </div>
                 <div class="box">
                   <img src="../assets/image/cart-img-4.jpg" alt="">
                     <div class="text">
                      <h4>modern furiture</h4>
                      <p>1 X $140.00</p>
                     </div>
                     <i  class="fa-solid fa-x"></i>                     
                 </div>
                 <h3>total: <span>$500.00</span></h3>
                 <button>checkout cart</button>
              </div>
        </div>
        <div class="login" :class="{'active':check2}">
        <div class="mainbox">
            <i @click="toggle2" class="fa-solid fa-x close"></i>
            <form action="" @submit.prevent class="form1 " :class="{'active1': check3}">
              <h3>login form</h3>
              <input type="text" placeholder="your email...">
              <input type="password" placeholder="your password...">
              <div class="che">
                <input type="checkbox">
              <label for="">remember me</label>
              </div>
              <button>login now</button>
              <div class="types">
             <p>forget password ? <span >click here</span></p>
             <p>don't have an account ? <span @click="toggle3"> create now</span></p>
            </div>
            </form>
            <form action="" @submit.prevent class="form2 " :class="{'active2':check3}">
              <h3>register form</h3>
              <input type="text" placeholder="enter your username...">
              <input type="text" placeholder="enter your email...">
              <input type="password" placeholder="enter your password...">
              <div class="che">
                <input type="checkbox">
              <label for="">remember me</label>
              </div>
              <button>create now</button>
              <div class="types">
             <p>already have an account ? <span @click="toggle3">login in</span></p>
            </div>
            </form>
        
        </div>
           
          


        </div>
      </div>  
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        let check = ref(false);
        let check1 = ref(false);
        let check2 = ref(false);
        let check3 = ref(false);
        const toggle = ()=>{
            check.value = !check.value;
        }
        const toggle1 = ()=>{
            check1.value = !check1.value;
        }
        const toggle2 = ()=>{
            check2.value = !check2.value
        }

        const toggle3 = ()=>{
            check3.value = !check3.value
        }
        return{check , toggle , check1 , toggle1, toggle2 ,check2 , check3 , toggle3}
    }
}

</script>

<style lang="scss" scoped>
  @import '../sass/main.scss';

.navbarr{

    .thelogo{

            color: $green;
        
    }
    .logo{
        display: flex;
        align-items: center;
        gap: 5px;
        h1{
            i{
                font-size: 20px;
            }
        }
        i{
            font-size: 30px;
        }
    }
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: $ligth-bg;
    padding: 30px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 111111;
    .list{
        ul{
            display: flex;
            align-items: center;
            gap: 15px;
            li{
                margin: 0px 5px;
                &.mainLi{
                    i{
                        display: none;
                    }
                }
                            a {
                font-weight: bold;
                color: #2c3e50;

                &.router-link-exact-active {
                color: #42b983;
                text-decoration: underline;
                }
            }
            }
        }
    }
    .search{
        background-color: #fff;
        padding: 10px;
        border-radius: 20px;
        input{
            border: none;
            outline: none;
            background-color: transparent;
        }
    }
    .icons{
        display: flex;
        align-items: center;
        gap: 7px;
        i{
            font-size: 25px;
            cursor: pointer;
            transition: 0.6s;
            color: #332;
            &:hover{
                color: $green;
            }
            &.bar{
                display: none;
            }
        }
    }
    .cart{
        position: fixed;
        top: 0;
        background-color: #3333336b;
        width: 100vw;
        height: 100vh;
        transition: 0.5s;
        transform: translateX(100%);
        &.active{
            transform: translateX(0);
        }
        .mainboxes{
            position: absolute;
            height: fit-content;
            padding: 10px;
            right: 0;
            background-color: #fff;
            width: 250px;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 5px;
            .box{
                // margin-top: 50px;
                &.first{
                    margin-top: 50px;
                }
                display: flex;
                align-items: center;
                gap: 10px;
                i{
                    font-size: 14px;
                    margin: 0px 5px;
                    cursor: pointer;
                  
                }
              
            }
            i{
                cursor: pointer;
                    &.close{
                        font-size: 30px;
                        position: absolute;
                        right: 20px;
                        top: 10px;
                    }
                    transition: 0.5s;
                    &:hover{
                        color: $ligth;
                    }
                }
                h3{
                    color: $green;
                    span{
                        color: $ligth;
                    }
                    margin-bottom: 10px;
                }
                button{
                    background-color: $green;
                    border: none;
                    padding: 15px;
                    color: #fff;
                    cursor: pointer;
                    border-radius: 5px;
                    transition: 0.5s;
                    &:hover{
                        background-color: $ligth;
                    }
                }
        }
    }
    .login{
        position: fixed;
        top: 0;
        background-color: #3333336b;
        width: 100vw;
        height: 100vh;
        transition: 0.5s;
        transform: translateX(100%);
        &.active{
            transform: translateX(0);
        }
        .mainbox{
            position: absolute;
            height: 100vh;
            right: 0;
            padding: 20px;
            background-color: #fff;
            width: 270px;
            display: flex;
            align-items: center;
            flex-direction: column;
            i{
                &.close{
                    font-size: 30px;
                    margin-bottom: 20px;
                    cursor: pointer;
                }
            }
            .form1,.form2{
                display: flex;
                flex-direction: column;
              justify-content: center;
              gap: 10px;
              border: 2px solid #333;
              padding: 20px;
              p{
                font-size: 15px;
              }
              input{
                padding: 7px;
                outline: none;
                border-radius:10px;
              }
              button{
                padding: 7px;
                border: none;
                background-color: $green;
                color: #fff;
                font-size: 16px;
                cursor: pointer;
                border-radius: 10px;
              }
              .types{
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: 10px;
                p{
                    color: black;
                    span{
                        color: $green;
                        cursor: pointer;
                        &:hover{
                            text-decoration: underline;
                        }
                    }
                }
              }
     
            }
            .form1{
             &.active1{
                display: none;
             }
            }
            .form2{
                display: none;
                input{
                    margin: 5px 0px;
                }
                .che{
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                &.active2{
                    display: block;
                }
            }
        }
    }
}

@media (max-width: 880px){

    .navbarr{
        .list{
            gap: 5px;
            ul{
                gap: 5px;
                li{
                    margin: 2px;
                    a{
                        font-size: 17px;
                    }
                }
            }
        }
    }
}

@media (max-width:790px){
    .navbarr{
        position: relative;
        .mainnav{
            position: fixed;
            top:0px;
            background-color: rgba(0, 0, 0, 0.348);
            width: 100vw;
            height: 100vh;
            transition: 0.5s;
            transform: translateX(100%);
        .list{
           
            padding: 30px;
            ul{
                position: absolute;
            right:0%;
            top: 0%;
            width: 250px;
            justify-content: space-around;
            min-height: 100vh;
                background-color:$green;
                flex-direction: column;
                li{
                                              a {
                               font-size: 20px;
                               color: #fff;

                            &.router-link-exact-active {
                              color: #42b983;
                            }
                          }
                }
                .mainLi{
                    position: relative;
                    i{
                        display: block;
                        position: absolute;
                        right: -150%;
                        font-size: 24px;
                        top: -50%;
                        cursor: pointer;
                        color: #fff;
                    
                    }
                }
            }
        }
        &.active{
            transform: translateX(0);
        }
        }
        .icons{
      i{
        &.bar{
            display: block;
        }
      }
    }
    
    }
    
    
}


@media (max-width: 480px){
    .navbarr{
        
        .thelogo{
            .logo{
                h1{
                    font-size: 20px;
                    span{
                        font-size: 20px;
                    }
                }
                i{
                    font-size: 20px;
                }
            }
        }
        .icons{
     i{
        font-size: 20px;
     }
    }
    .search{
        padding: 5px;
        input{
            font-size: 15px;
        }
    }
    }
   
   
}
@media (max-width: 431px){
    .navbarr{
    .search{
        padding:5px;
       width: 150px;
       i{
        font-size: 10px;
       }
       input{
        width:80%;
       }
    }
    }
   
   
}
@media (max-width: 371px){
    .navbarr{
     .thelogo{
        .logo{
            gap: 0px;
            h1{
            font-size: 18px ;
            }
            span{
              font-size: 15px;
            }
            i{
            font-size: 15px;
            }
        }
     }
    }
   
   
}

</style>