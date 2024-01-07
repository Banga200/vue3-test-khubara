<script setup>
const props = defineProps(['item'])
</script>
<template>
    <v-list-item>
             <v-list-item-title>{{ props.item.name }}</v-list-item-title>
           <v-list-item-action>
             <v-icon v-if="props.item.children.length > 0">mdi-chevron-right</v-icon>
           </v-list-item-action>
           {{ console.log(props.item) }}
           <v-list
             dense
             v-if="props.item.children.length > 0"
             :key="item.id + '-nested'"
           >
             <template v-for="(child) in props.item.children" :key="child.id">
               <SubCategoies :item="child"/>
             </template>
           </v-list>
         </v-list-item>
</template>