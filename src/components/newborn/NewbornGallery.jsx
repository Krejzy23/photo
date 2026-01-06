export const newbornImages = [
  "/img/newbornGallery/newbornGallery-01.webp",
  "/img/newbornGallery/newbornGallery-02.webp",
  "/img/newbornGallery/newbornGallery-03.webp",
  "/img/newbornGallery/newbornGallery-04.webp",
  "/img/newbornGallery/newbornGallery-05.webp",
  "/img/newbornGallery/newbornGallery-06.webp",
];

const NewbornGallery = () => {
  return (
    <section className="bg-white py-28 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Intro */}
        <div className="mb-20 max-w-xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#888]">
            Gallery
          </p>
          <h2 className="text-3xl md:text-4xl leading-snug">
            Soft, calm and full of emotion
          </h2>
        </div>

        {/* Images */}
        <div className="mx-auto max-w-9xl">
          <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
            {newbornImages.map((src, i) => (
              <div key={i} className="overflow-hidden mb-4 rounded-2xl">
                <img
                  src={src}
                  alt="Newborn photography"
                  className="w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewbornGallery;
