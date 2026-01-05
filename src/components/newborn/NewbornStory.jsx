const NewbornStory = () => {
  return (
    <section className="bg-[#F7F6F4] py-24 px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2 items-center">
        {/* Text */}
        <div className="text-[#2E2E2E]">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#777]">
            My approach
          </p>

          <h2 className="mb-6 text-3xl md:text-4xl leading-snug">
            Every newborn has their own rhythm.
          </h2>

          <div className="space-y-4 text-[#555] leading-relaxed">
            <p>
              Newborn photography is not about poses or perfection. It’s about
              patience, warmth and trust.
            </p>

            <p>
              I work slowly, calmly and always with respect to your baby’s
              needs. Every session is different – and that’s exactly how it
              should be.
            </p>

            <p>
              My studio is warm, quiet and fully prepared for newborn sessions.
              Your baby’s comfort and safety always come first.
            </p>

            <p>
              These first days pass quickly. My goal is to capture them exactly
              as they feel – soft, real and full of love.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <img
            src="/img/newbornGallery/newbornStory.jpg"
            alt="Newborn photography studio"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default NewbornStory;
