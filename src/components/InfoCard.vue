<template>
    <div>
        {{msg}}
        {{`this is text:`+text}}
        <button @click="change"></button>
    </div>
</template>

<script setup lang="ts">
import {ref,defineProps} from 'vue'
defineProps({
    text:String
})
let msg = ref('hello vue3');

function change(){
    msg.value = 'new msg'
}
</script>

<style lang="scss" scoped>

</style>