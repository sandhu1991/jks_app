<script setup>
import HeroSection from '@/components/home/HeroSection.vue'
import TrustStats from '@/components/home/TrustStats.vue'
import ServicesGrid from '@/components/home/ServicesGrid.vue'
import WhyChooseSection from '@/components/home/WhyChooseSection.vue'
import ReviewsSection from '@/components/home/ReviewsSection.vue'
import ScrollReveal from '@/components/common/ScrollReveal.vue'
</script>

<template>
  <div class="jks-modern-page">
    <HeroSection />
    <TrustStats />
    <ScrollReveal>
      <ServicesGrid />
    </ScrollReveal>
    <ScrollReveal :delay="60">
      <WhyChooseSection />
    </ScrollReveal>
    <ScrollReveal :delay="60">
      <ReviewsSection />
    </ScrollReveal>
  </div>
</template>
