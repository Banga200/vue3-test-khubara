<script setup>
const props = defineProps(['items', 'columns', 'borderColor'])
</script>
<template>
    <table :class="{'table-border': props.borderColor}">
        <thead>
            <tr >
                <th v-for="header in props.columns" :key="header">{{ header }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, i) in props.items" :key="i">
                <td v-for="(cell, i) in row" :key="i">{{ cell }}</td>
            </tr>
        </tbody>
    </table>
</template>
<style scoped>
.table-border {
    border-collapse: collapse;
    width: 100%;
}
td,th{
    border: 1px solid lightgray;
}
</style>
