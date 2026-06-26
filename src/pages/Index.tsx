import OptiqueBrands from "@/components/optique-brands";
import OptiqueChatbot from "@/components/optique-chatbot";
import OptiqueCollections from "@/components/optique-collections";
import OptiqueContact from "@/components/optique-contact";
import OptiqueFooter from "@/components/optique-footer";
import OptiqueGallery from "@/components/optique-gallery";
import OptiqueHeader from "@/components/optique-header";
import OptiqueHero from "@/components/optique-hero";
import OptiqueLocation from "@/components/optique-location";
import OptiqueServices from "@/components/optique-services";
import OptiqueTestimonials from "@/components/optique-testimonials";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-slate-900">
      <OptiqueHeader />
      <OptiqueHero />
      <OptiqueServices />
      <OptiqueBrands />
      <OptiqueCollections />
      <OptiqueGallery />
      <OptiqueTestimonials />
      <OptiqueLocation />
      <OptiqueContact />
      <OptiqueFooter />
      <OptiqueChatbot />
    </main>
  );
};

export default Index;