<script setup lang="ts">
import { projects } from '@/data/projects.ts';
</script>

<template>
  <div class="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="project in projects"
      :key="project.id"
      class="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col"
    >
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.name"
        class="w-full h-40 object-cover"
      />

      <div class="p-4 flex flex-col flex-1">
        <h3 class="text-lg font-semibold text-gray-900">
          {{ project.name }}
        </h3>

        <p class="text-sm text-gray-600 mt-2 flex-1">
          {{ project.description }}
        </p>

        <a
          :href="project.githubLink"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  </div>
</template>