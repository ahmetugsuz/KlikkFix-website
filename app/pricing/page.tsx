import Image from 'next/image';
import pricingImg from '../../public/extensionScreenshots/Pricing.png';
import FadeSection from "../../components/FadeSection";  

export default function PricingPage() {
  return (
    <FadeSection>
    <main id='pricing'  className="pt-12 h-screen snap-start">
      <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white text-center">
        <h1 className="text-4xl font-bold mt-8">Pricing</h1>
        <p className="text-purple-300">Check out our pricing plans.</p>
        <Image
          width={600}
          src={pricingImg}
          alt="pricing img"
          className="mx-auto max-w-2xl"
        />
      </div>
    </main>
  </FadeSection>

  );
}
