const images = [
  { src: "/img/newbornGallery/newborn-1.jpg", ratio: "portrait" },
  { src: "/img/newbornGallery/newborn-2.jpg", ratio: "square" },
  { src: "/img/newbornGallery/newborn-3.jpg", ratio: "landscape" },
  { src: "/img/newbornGallery/newborn-4.jpg", ratio: "square" },
  { src: "/img/newbornGallery/newborn-5.jpg", ratio: "portrait" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {images.map((img, i) => (
            <div
              key={i}
              className={`
                overflow-hidden rounded-2xl
                ${img.ratio === "portrait" ? "aspect-[3/4]" : ""}
                ${img.ratio === "landscape" ? "aspect-[4/3]" : ""}
                ${img.ratio === "square" ? "aspect-square" : ""}
              `}
            >
              <img
                src={img.src}
                alt="Newborn photography"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewbornGallery;
