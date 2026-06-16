<script setup lang="ts">
import { skills } from '@/data/skills.ts'
</script>

<template>
  <div class="relative w-full overflow-hidden py-6">
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-canvas to-transparent"
    ></div>

    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-canvas to-transparent"
    ></div>

    <div class="flex w-max animate-marquee hover:[animation-play-state:paused]">
      <div v-for="i in 2" :key="i" class="flex gap-3 pr-3">
        <div
          v-for="skill in skills"
          :key="skill.id + '-' + i"
          class="group inline-flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap bg-surface border border-border font-display font-medium text-sm text-muted cursor-default transition-all duration-200 hover:border-accent hover:text-white"
        >
          <span
            class="w-1.5 h-1.5 rounded-full bg-accent opacity-50 flex-shrink-0 group-hover:opacity-100 transition-opacity"
          ></span>
          {{ skill.name }}
        </div>
      </div>
    </div>
  </div>
</template>
