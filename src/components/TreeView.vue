<template>
  <v-expansion-panels multiple>
    <v-expansion-panel v-for="category in categories" :key="category.id" expand-icon="mdi-chevron-down">
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
</script>
