<template>
  <v-expansion-panels accordion multiple>
    <v-expansion-panel v-for="category in categories" :key="category.id">
      <v-expansion-panel-title>
        {{ category.name }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <template v-if="category.children.length > 0">
          <v-list dense>
            <template v-for="child in category.children" :key="child.id">
              <SubCategoies :item="child"/>
            </template>
          </v-list>
        </template>
        <p v-else>No subcategories available.</p>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
import { ref } from 'vue';
import SubCategoies from './SubCategoies.vue';

const categories = ref([
        {
          id: 1,
          name: 'Category 1',
          children: [
            {
              id: 2,
              name: 'Subcategory 1.1',
              children: [
                { id: 3, name: 'Nested Subcategory 1.1.1', children: [] },
                {
                  id: 4,
                  name: 'Nested Subcategory 1.1.2',
                  children: [{ id: 5, name: 'Deeper Subcategory 1.1.2.1', children: [] }]
                }
              ]
            }
          ]
        }
      ]
)
//   components: {
//     CategoryItem: {
//       template: `
//         <v-list-item>
//           <v-list-item-content>
//             <v-list-item-title>{{ item.name }}</v-list-item-title>
//           </v-list-item-content>
//           <v-list-item-action>
//             <v-icon v-if="item.children.length > 0">mdi-chevron-right</v-icon>
//           </v-list-item-action>
//           <v-list
//             dense
//             v-if="item.children.length > 0"
//             :key="item.id + '-nested'"
//           >
//             <template v-for="(child, index) in item.children">
//               <category-item
//                 :key="index"
//                 :item="child"
//               />
//             </template>
//           </v-list>
//         </v-list-item>
//       `
//     }
//   }

</script>
