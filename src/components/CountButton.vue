<!-- eslint-disable no-undef -->
<script setup>
import {ref} from 'vue'
const count = defineModel('count')
const text = ref("hello")
function change() {
    text.value = "Count"
}
defineExpose({
    text
})
</script>
<template>
    <button @click="count++; change()">Counter {{ count }}</button>
</template>