import HeroSection from '@/components/home/HeroSection'
import BenefitsBar from '@/components/home/BenefitsBar'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import CategoryGrid from '@/components/home/CategoryGrid'
import HowItWorks from '@/components/home/HowItWorks'
import WhyImported from '@/components/home/WhyImported'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import BlogPreview from '@/components/home/BlogPreview'
import FAQSection from '@/components/home/FAQSection'
import FinalCTA from '@/components/home/FinalCTA'
import { generateFAQJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo'

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([{ name: 'Início', url: '/' }])
          ),
        }}
      />

      <HeroSection />
      <BenefitsBar />
      <FeaturedProducts />
      <CategoryGrid />
      <HowItWorks />
      <WhyImported />
      <TestimonialsSection />
      <FAQSection />
      <BlogPreview />
      <FinalCTA />
    </>
  )
}
