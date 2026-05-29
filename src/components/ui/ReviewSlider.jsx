import { REVIEWS } from '@/data/commonText';

function StarRating({ count }) {
  return (
    <span className="text-yellow-400 text-sm">{'★'.repeat(count)}</span>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="flex-shrink-0 w-72 bg-slate-900/60 backdrop-blur-sm border border-white/[0.07] rounded-xl p-5 mx-3 hover:border-blue-500/25 transition-all duration-300">
      <StarRating count={review.stars} />
      <p className="mt-2 text-sm text-slate-300 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
    </div>
  );
}

export default function ReviewSlider() {
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-marquee">
        {doubled.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}
