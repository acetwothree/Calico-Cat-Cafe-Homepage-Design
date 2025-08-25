export const GalleryPage = () => {
  // Array of all gallery image filenames
  const imageFilenames = [
    'IMG_3599.jpg', 'IMG_3601.jpg', 'IMG_3602.jpg', 'IMG_3603.jpg', 'IMG_3604.jpg',
    'IMG_3606.jpg', 'IMG_3607.jpg', 'IMG_3608.jpg', 'IMG_3609.jpg', 'IMG_3610.jpg',
    'IMG_3611.jpg', 'IMG_3612.jpg', 'IMG_3613.jpg', 'IMG_3614.jpg', 'IMG_3616.jpg',
    'IMG_3617.jpg', 'IMG_3618.jpg', 'IMG_3619.jpg', 'IMG_3622.jpg', 'IMG_3623.jpg',
    'IMG_3624.jpg', 'IMG_3625.jpg', 'IMG_3626.jpg', 'IMG_3627.jpg', 'IMG_3628.jpg',
    'IMG_3629.jpg', 'IMG_3630.jpg', 'IMG_3631.jpg', 'IMG_3632.jpg', 'IMG_3634.jpg'
  ];

  // Function to determine if an image is likely landscape or portrait based on filename
  // This is a simple heuristic - we can adjust based on actual image dimensions if needed
  const getImageOrientation = (filename: string) => {
    // Some filenames that are known to be landscape can be added here
    const landscapeImages = ['IMG_3601.jpg', 'IMG_3603.jpg', 'IMG_3607.jpg'];
    return landscapeImages.includes(filename) ? 'landscape' : 'portrait';
  };

  // Create image objects with all necessary properties
  const galleryImages = imageFilenames.map(filename => ({
    id: filename.split('.')[0],
    url: `/dist/assets/gallery/${filename}`,
    orientation: getImageOrientation(filename),
    alt: `Artwork ${filename.split('.')[0]}`,
    artist: 'Artist Name' // Placeholder for artist name
  }));

  return (
    <div className="bg-soft-cream min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#3A3335] mb-4">
          Our Gallery
        </h1>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Explore the beautiful artwork that adorns our cafe and lounge, all created by talented local artists from our community.
        </p>
        
        {/* Gallery Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative inline-block">
              <div className="rounded-lg shadow-lg overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  className="block max-h-[70vh] w-auto"
                />
                <div className="bg-black bg-opacity-70 text-white p-2 text-center">
                  <p className="font-medium">{image.artist}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
