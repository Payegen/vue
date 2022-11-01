<!-- 右侧固定导航栏 -->
<template>
    <div class="rightlistBox">
        <!-- 名片 -->
        <section class="card">
            <div class="r1-head">
                <img src="../assets/p1.jpg" alt="">
                <h1 >
                    <span>Link</span>小余
                </h1>
            </div>
            <div class="r1-body">
                <p>可以通过这些了解我</p>
                <div class="catch-me" >
                    <div class="">
                        <el-tooltip  class="item"  content="Github" placement="top" >
                            <a  href="" target="_blank" ><i class="fa fa-fw fa-github">G</i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="QQ" placement="top">
                            <a  href="" target="_blank"><i class="fa fa-fw ">Q</i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="微博" placement="top">
                            <a href="" target="_blank"><i class="fa fa-fw fa-weibo">W</i></a>
                        </el-tooltip>
                    </div>
                    <div class="">
                        <el-tooltip class="item" effect="dark" content="微信" placement="top">
                            <a href="" target="_blank"><i class="fa fa-fw el-icon-pear"></i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="CSDN" placement="top">
                            <a href="" target="_blank"><i class="fa fa-fw el-icon-pear"></i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="简历" placement="top">
                            <a href="" target="_blank"><i class="fa fa-fw el-icon-document"></i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="更多" placement="top">
                            <a href="#/About" ><i class="fa fa-fw el-icon-more"></i></a>
                        </el-tooltip>
                    </div>
                </div>
            </div>
        </section>
        <!-- 个人简介 -->
        <section class="info">
            <el-collapse  v-model="activeName" accordion>
                <el-collapse-item title="Consistency" name="1">
                    <div>
                       111
                    </div>
                    <div>
                       111
                    </div>
                </el-collapse-item>
                <el-collapse-item title="Feedback" name="2">
                    <div>
                       222
                    </div>
                    <div>
                       222
                    </div>
                </el-collapse-item>
                <el-collapse-item title="Efficiency" name="3">
                    <div>
                       333
                    </div>
                    <div>
                        444
                    </div>
                    <div>
                       555
                    </div>
                </el-collapse-item>
             
            </el-collapse>
        </section>
    </div> 
</template>


<script lang="ts" setup>
import { ref } from "vue";
let activeName = ref('')
</script>

<style lang="scss" >

.rightlistBox{
    position: relative;
    .card{
        margin-top: auto;
    }
    .info{
        border: 1px solid rgba(0,0,0,.1);
    }
}
.rightlistBox section {
    transition: all 0.2s linear;
    position: relative;
    background: #fff;
    padding:15px;
    margin-bottom: 20px;
    border-radius: 5px;
    width: 280px;
}
.rightlistBox section:hover{
    transform: translate(0,-2px);
    box-shadow:0 15px 30px rgba(0,0,0,.1);
}
.rightlistBox .r1-head{
    text-align: center;
    border-radius: 4px 4px 0 0 ;
    text-align: center;
    position: relative;
    /*box-shadow: inset 0 -70px 100px -50px rgba(0,0,0,.5);*/
}
.rightlistBox .r1-head img{
    width:100%;
    min-height: 100px;
}
.rightlistBox .r1-head h1{
    position: absolute;
    bottom:5px;
    margin:0 0 0 -65px;
    font-size: 20px;
    letter-spacing:0.5px;
    color:#fff;
    text-shadow: 1px 1px 1px rgba(0,0,0,.7);
    font-weight: 700;
    width:130px;
    left:50%;
}
.rightlistBox .r1-head h1 span{
    opacity: 0.3;
}
.rightlistBox .r1-body p{
    font-size: 14px;
    margin:5px 0 8px 0;
    font-weight: 700;
    text-align: center;
}
.rightlistBox .r1-body .catch-me{
    text-align: center;
}
.rightlistBox .r1-body .catch-me a{
    display: inline-block;
    margin-bottom: 7px;
    position: relative;
    text-decoration: none;
}
.rightlistBox .r1-body .catch-me a:hover i{
    color:#fff;
    background: #F4692C;
}
.rightlistBox .r1-body .catch-me a i{
    display: inline-block;
    font-size: 18px;
    width:42px;
    height:42px;
    line-height: 42px;
    border-radius: 42px;
    color:rgba(0,0,0,0.5);
    background: rgba(0,0,0,0.1);
    transition: all 0.3s ease-in-out;
    font-style: normal;
    margin:0 3.2px;
}

@keyframes toflow {
    0%{
        /*top:400px;*/
        transform: scale(0.95) translate(0,10px);
    }
    50%{
        /*top:410px;*/
        transform:scale(1) translate(0,0px);
    }
    100%{
        /*top:400px;*/
        transform:scale(0.95) translate(0,10px);
    }
}
.goTophui{
    bottom:120vh;
}
// tag
#tag{
    padding: 0;
    width: 310px;
    }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
    .tags{
        margin: 10px 20px;
    }
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }

</style>
