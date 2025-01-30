import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function CollaborationSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
      }
    };
    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  const logos = [
    { src: '/netflix2.webp', alt: 'Netflix' },
    { src: '/amazon.webp', alt: 'Amazon' },
    { src: '/spotify.webp', alt: 'Spotify' },
    { src: '/all.webp', alt: 'All' },
    { src: '/nike.webp', alt: 'Nike' },
    { src: '/fiveguys.webp', alt: 'Five Guys' },
    { src: '/chanel.webp', alt: 'Chanel' },
  ];

  return (
    <div className="overflow-hidden w-full bg-white py-10">
      <h2 className="text-2xl font-medium text-gray-900 mb-4 ml-14">
        PixelPulse bénéficie de la confiance de plus de 100 000 entreprises dans le monde entier.
      </h2>
      <div className="relative w-full flex items-center">
        <div
          ref={scrollRef}
          className="flex gap-8 whitespace-nowrap w-max transition-transform ease-linear"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8">
              {logos.map((logo, index) => (
                <div key={index} className="w-[150px] h-[91px] relative flex items-center justify-center">
                  <Image
                    src={logo.src}
                    fill
                    className="object-contain"
                    alt={logo.alt}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
