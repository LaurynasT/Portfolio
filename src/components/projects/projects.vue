<script setup lang="ts">
import { projects } from '@/data/projects.ts'
</script>

<template>
  <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <a
      v-for="project in projects"
      :key="project.id"
      :href="project.githubLink"
      target="_blank"
      rel="noopener noreferrer"
      class="group relative flex flex-col bg-surface border border-border rounded-xl overflow-hidden no-underline transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(110,231,183,0.1)] hover:border-[#2a2a3e]"
    >
      <span
        class="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-250"
      ></span>

      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.name"
        class="w-full h-40 object-cover border-b border-border brightness-90 group-hover:brightness-100 transition-all"
      />

      <div class="flex flex-col flex-1 gap-2 p-6">
        <span class="font-mono text-[0.7rem] uppercase tracking-widest text-accent">Project</span>

        <h3 class="font-display font-semibold text-lg tracking-tight text-white">
          {{ project.name }}
        </h3>

        <p class="text-sm text-muted leading-relaxed flex-1">
          {{ project.description }}
        </p>

        <div
          class="flex items-center gap-2 mt-3 text-sm font-display font-medium text-accent transition-[gap] duration-200 group-hover:gap-3"
        >
          GitHub
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  </div>
</template>
