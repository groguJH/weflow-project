import ReservationFormSection from '@/features/reservation_page/sections/ReservationFormSection';

export const metadata = {
  title: 'WEFLOW 예약 — 무료 진단 상담 예약',
  description: '원하시는 날짜와 시간대를 선택해 무료 상담을 예약하세요.',
};

export default function ReservationPage() {
  return (
    <div>
      <ReservationFormSection />
    </div>
  );
}
