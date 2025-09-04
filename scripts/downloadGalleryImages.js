import { createWriteStream, existsSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const images = [
  {
    url: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    filename: 'gallery1.jpg',
    alt: 'Calico cat lounging in sunlight'
  },
  {
    url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    filename: 'gallery2.jpg',
    alt: 'Cat playing with toy in cafe'
  },
  {
    url: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    filename: 'gallery3.jpg',
    alt: 'Cozy cafe interior with cats'
  },
  {
    url: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    filename: 'gallery4.jpg',
    alt: 'Coffee and cat paw prints'
  },
  {
    url: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    filename: 'gallery5.jpg',
    alt: 'Cat sleeping near window'
  },
  {
    url: 'https://images.unsplash.com/photo-1482066490729-6f26115b60dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    filename: 'gallery6.jpg',
    alt: 'Tabby cat on cat tree'
  }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        reject(new Error(`Failed to download image: ${url}`));
      }
    });
  });
};

const downloadAllImages = async () => {
  const galleryDir = join(__dirname, '../public/images/gallery');
  
  // Create gallery directory if it doesn't exist
  if (!existsSync(galleryDir)) {
    mkdirSync(galleryDir, { recursive: true });
  }

  console.log('Downloading gallery images...');
  
  for (const [index, image] of images.entries()) {
    const filepath = join(galleryDir, image.filename);
    try {
      await downloadImage(image.url, filepath);
      console.log(`Downloaded ${index + 1}/${images.length}: ${image.filename}`);
    } catch (error) {
      console.error(`Error downloading ${image.filename}:`, error.message);
    }
  }
  
  console.log('All images downloaded!');
  
  // Update GallerySection.tsx with local image paths
  updateGallerySection(images);
};

const updateGallerySection = (images) => {
  const gallerySectionPath = join(__dirname, '../src/components/GallerySection.tsx');
  const newContent = `import { Link } from 'react-router-dom';

export const GallerySection = () => {
  const images = [
    ${images.map(img => `{
      url: '/images/gallery/${img.filename}',
      alt: '${img.alt.replace(/'/g, "\\'")}'
    }`).join(',\n    ')}
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
`;

  writeFileSync(gallerySectionPath, newContent);
  console.log('Updated GallerySection.tsx with local image paths');
};

downloadAllImages().catch(console.error);
