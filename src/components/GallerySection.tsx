import { Link } from 'react-router-dom';

export const GallerySection = () => {
  const images = [
    {
      url: '/images/gallery/gallery1.jpg',
      alt: 'Calico cat lounging in sunlight'
    },
    {
      url: '/images/gallery/gallery2.jpg',
      alt: 'Cat playing with toy in cafe'
    },
    {
      url: '/images/gallery/gallery3.jpg',
      alt: 'Cozy cafe interior with cats'
    },
    {
      url: '/images/gallery/gallery4.jpg',
      alt: 'Coffee and cat paw prints'
    },
    {
      url: '/images/gallery/gallery5.jpg',
      alt: 'Cat sleeping near window'
    },
    {
      url: '/images/gallery/gallery6.jpg',
      alt: 'Tabby cat on cat tree'
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-warm-sand">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#3A3335] mb-3">
          Our Cafe & Art
        </h2>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          We are so proud of the community that helped us build this space! Take a peek inside our cafe and lounge to see the incredible artwork created by dozens of talented local volunteers. Each piece of art tells its own unique story and makes our space feel like home.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-64 object-cover" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link 
            to="/gallery" 
            className="inline-block bg-[#FFCAA7] text-[#3A3335] px-6 py-3 rounded-lg font-medium hover:bg-[#ffc093] transition-colors"
          >
            View Our Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};
