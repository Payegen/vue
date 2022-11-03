<template>
  <div>
      <!-- 主页面 -->
      <div class="box">
          <!-- 活动区 -->
          <div id="stage">
              <div id="snake">
                  <div id="shenti"></div>
              </div>

              <div id="food">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
          </div>
          <!-- 计分区 -->
          <div id="score-panel">
              <div id="score">
              score:<span>{{score}}</span>
              </div>
              <div id="level">
              level:<span>{{level}}</span>
              </div>
          </div>
      </div>
      <button @click="begin">restart</button>
  </div>

</template>

<script lang='ts' setup>
import GameContol from './GameControl'
import {ref,watchEffect,onMounted,onBeforeUnmount,onUnmounted} from 'vue'

    let score = ref(0) ;
    let level = ref(1);

    let game: GameContol | null;
    
    function begin(){
        if(!game){
            game = new GameContol();
        }
        game = new GameContol()
    }

    //监听属性分数
    watchEffect(()=>{
      score.value =  game?.panel.score as number
    })
   
    onMounted(()=>{
        console.log('mounted');
        
    })
    onUnmounted(()=>{
        console.log('卸载之后');
        
    })
    onBeforeUnmount(()=>{
        console.log('卸载之前');
        game = null
    })
</script>

<style >
.box{
    width: 360px;
    height: 420px;
    box-sizing: border-box;
    background-color: #b7d4a8;
    margin: 0 auto;

    border: 10px solid;
    border-radius: 20px;
}
#stage{
    width: 304px;
    height: 304px;
    border: 1px solid;
    margin: 10px auto;
    position: relative;
}
#score-panel{
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    font-weight: 900;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
}
/* 蛇 */
#snake > #shenti{
    box-sizing: border-box;
    width: 10px;
    height: 10px;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #b7d4a8;
}
/* 食物 */
#food{
    width: 10px;
    height: 10px;
    position: absolute;
    top: 200px;
    left: 50px;
    
}
#food > div{
    float: left;
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background-color: black;
}
</style>