<template>
    <div class="contact">
        <h2>contact us</h2>
    <div class="text">
     <router-link to="/">home</router-link>
     <span>/</span>
     <p>contact</p>
    </div> 
    </div>
    <div class="maincontact">
      <div class="box1">
        <h3>get in touch</h3>
        <form action="" @click.prevent>
          <div class="inp">
           <label for="">your name</label>
           <input type="text">
          </div>
          <div class="inp">
           <label for="">your number</label>
           <input type="number">
          </div>
          <div class="inp">
           <label for="">your email</label>
           <input type="email">
          </div>
          <div class="inp">
           <label for="">your message</label>
           <textarea style="resize: none;" name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button>submit</button>
        </form>
      </div>
      <div class="box2">
   <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=cairo&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co">2yu</a><br></div><a href="https://embedgooglemap.2yu.co/">html embed google map</a></div>
    </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
  @import '../sass/main.scss';


  .contact{
    @include banner();
  }

  .maincontact{
   @include grid(2);
    width: 100%;
    margin-top: 50px;
   .box1,.box2{
    height: 730px;
   }

   .box1{
    background-color: $ligth-bg;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 30px;
    h3{
        font-size: 40px;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 20px;
        .inp{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            label{
                color: gray;
            }
            input,textarea{
                width: 100%;
                padding: 10px;
                font-size: 18px;
                border: none;
                background-color: transparent;
                border-bottom: 1px solid #333;
            }
        }
        button{
            @include btn(10px ,20px, 18px);
            &:hover{
                background-color: $ligth;
            }
        }
    }
   }
  }
  .mapouter{
    position:relative;
    text-align:right;
    height:100%;
    width:100%;
}
.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}


@media (max-width:850px){
    .maincontact{
        @include grid(1);
        gap: 30px;
    }
}

</style>