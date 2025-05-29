import React from 'react';
export const GallerySection = () => {
  const images = [{
    url: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    alt: 'Calico cat lounging in sunlight'
  }, {
    url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    alt: 'Cat playing with toy in cafe'
  }, {
    url: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    alt: 'Cozy cafe interior with cats'
  }, {
    url: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    alt: 'Coffee and cat paw prints'
  }, {
    url: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    alt: 'Cat sleeping near window'
  }, {
    url: 'https://images.unsplash.com/photo-1482066490729-6f26115b60dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    alt: 'Tabby cat on cat tree'
  }];
  return <section id="gallery" className="py-16 bg-warm-sand">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#3A3335] mb-3">
          Our Cafe & Cats
        </h2>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          Take a peek at our cozy cafe and meet some of our adorable feline
          residents. Each cat has their own unique personality and story.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]">
              <img src={image.url} alt={image.alt} className="w-full h-64 object-cover" />
            </div>)}
        </div>
        <div className="text-center mt-10">
          <a href="#" className="inline-block bg-[#FFCAA7] text-[#3A3335] px-6 py-3 rounded-lg font-medium hover:bg-[#ffc093] transition-colors">
            View Our Full Gallery
          </a>
        </div>
      </div>
    </section>;
};