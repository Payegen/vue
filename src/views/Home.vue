<template>
    <div class="home">
        <div class="main-container">
            <div class="left">
                <Mycard/>
            </div>
            <div class="mainbox">
                <div class="barlist">
                    <info-list v-for="item in 8" :key="item"></info-list>
                </div>
                
            </div>
            
        </div>
    </div>
</template>

<script>
import Mycard from '../components/Mycard.vue';
export default {
    name: "Home",
    components:{
        Mycard
    }
}
</script>

<style lang="less">
.home {
    display: flex;
}

.main-container {
    display: flex;
    width: 90%;
    margin: auto;
    height: 90vh;
    // background-color: aqua;
    .left{
        flex: 1;
    }
    .mainbox{
        flex: 3;
        min-width: 300px;
        margin-left: 2rem;
        background-color: #fff;
        border-radius: 15px;
        .barlist{
            display: flex;
            padding: 2rem;
            flex-wrap: wrap;
            // justify-content: space-between;
            gap: 1.5rem;
        }
    }

}
</style>