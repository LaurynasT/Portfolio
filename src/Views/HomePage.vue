<script setup lang="ts">
import Projects from '@/components/projects/projects.vue'
import Skills from '@/components/projects/Skills.vue'

</script>

<template>
  <div
    class="min-h-screen bg-canvas text-white font-body"
    style="background-image: radial-gradient(ellipse 80% 50% at 50% -10%, rgba(110,231,183,0.08) 0%, transparent 60%);"
  >
    <div class="max-w-5xl mx-auto px-6">

   
      <section class="pt-28 pb-20 flex flex-col gap-5">
        <div class="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest">
          <span class="w-2 h-2 rounded-full bg-accent animate-pulse2"></span>
          Available for work
        </div>
        <h1 class="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-white">
          Hi, I'm <span class="text-accent">Laurynas Tauginas</span>
        </h1>
        <p class="text-muted text-lg leading-relaxed max-w-lg">
          I build things for the web — clean code, thoughtful UX, and products that actually ship.
        </p>
        <div class="flex flex-wrap gap-3 pt-2">
          <a href="https://github.com/LaurynasT" target="_blank"
             class="inline-block bg-accent text-canvas font-display font-semibold text-sm px-7 py-3 rounded-lg
                    hover:bg-emerald-300 hover:-translate-y-px transition-all duration-200">
            See my work
          </a>
          <a href="mailto:laurynas.tauginas@gmail.com"
             class="inline-block text-muted font-display font-medium text-sm px-7 py-3 rounded-lg
                    border border-border hover:border-accent hover:text-accent transition-all duration-200">
            Get in touch
          </a>
        </div>
      </section>

      
      <section id="projects" class="py-16 border-t border-border">
        <div class="reveal flex items-baseline gap-4 mb-8">
          <span class="font-mono text-[0.7rem] uppercase tracking-widest text-accent">Work</span>
          <h2 class="font-display font-semibold text-2xl tracking-tight text-white">Projects</h2>
        </div>
        <Projects />
      </section>

      
      <section class="py-16 border-t border-border">
        <div class="reveal flex items-baseline gap-4 mb-8">
          <span class="font-mono text-[0.7rem] uppercase tracking-widest text-accent">Stack</span>
          <h2 class="font-display font-semibold text-2xl tracking-tight text-white">Skills</h2>
        </div>
        <Skills />
      </section>

    </div>
  </div>
</template>
