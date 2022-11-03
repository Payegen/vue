<template>
    <div class="home">
        <!-- <info-card text="hello"></info-card> -->
        <div class="main-container">
            <div class="left">
                <Mycard/>
            </div>
            <div class="mainbox">
                <div class="barlist">
                    <InfoList v-for="(item,index) in items" 
                    :key="item.id+index" 
                    :name="item.name"
                    @click="openViews(item)"
                    />
                </div>
            </div>
            <el-dialog 
                v-model="dialogTableVisible"
                :show-close= false
                width="90%"
                :title="currentPath"
                @close="dialogClose">
                <router-view></router-view>
            </el-dialog>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Mycard from '../components/Mycard.vue';
import InfoList from '@/components/InfoList.vue';
import { ref } from "vue";
import { useRouter, useRoute } from 'vue-router'

interface routerData {
    id:string,
    name:string,
    path:string
}
const router = useRouter()
let items = ref<Array<routerData>>([{id:'a',name:"贪吃蛇",path:'/snake'},{id:'a',name:"相册",path:'/photo'}])
let currentPath = ref('')

let dialogTableVisible = ref(false)

function openViews(item:routerData) {
    console.log(item);
    currentPath.value = item.name
    dialogTableVisible.value = true
    router.push(item.path)
}

function dialogClose(){
    console.log(`dialog close`);  
    router.push('/')
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