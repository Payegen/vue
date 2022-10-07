<template>
<div class="item-list">
    <div class="cursor-pointer">
        <img src="../assets/logo.png" alt="">
    </div>
    <span>aaaa</span>
</div>
</template>
<script>
export default {
    name:"InfoList"
}
</script>
<style lang="less">
.item-list{
    display: flex;
    width: 80px;
    height: 100px;
    flex-direction: column;
    justify-content: space-between;
    .cursor-pointer{
        width: 80px;
        height: 80px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .cursor-pointer:hover{
        cursor: pointer;
    }
    span{
        display: block;
        color: #000;
    }
}
</style>