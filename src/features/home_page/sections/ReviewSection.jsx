import Link from 'next/link';
import ReviewSlider from '@/components/ui/ReviewSlider';

export default function ReviewSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-transparent to-blue-950/10 pointer-events-none" />
      <div className="relative px-4 sm:px-6 lg:px-8 mb-8 flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-black text-white">고객 후기</h2>
        <Link href="/reservation" className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
          후기 더보기 →
        </Link>
      </div>
      <ReviewSlider />
    </section>
  );
}

