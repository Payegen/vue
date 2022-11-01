<template>
    <div class="home">
        <!-- <info-card text="hello"></info-card> -->
        <div class="main-container">
            <div class="left">
                <Mycard/>
            </div>
            <div class="mainbox">
                <div class="barlist">
                    <info-list v-for="item in 2" :key="item"></info-list>
                </div>
                
            </div>
            
        </div>
    </div>
</template>

<script lang="ts">
import Mycard from '../components/Mycard.vue';
import InfoCard from '../components/InfoCard.vue';
export default {
    name: "Home",
    components:{
        Mycard,
        InfoCard
    }
}
</script>

<style lang="scss">
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