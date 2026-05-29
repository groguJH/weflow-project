'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import {
  CalendarDays,
  Clock,
  User,
  Phone,
  Briefcase,
  FileText,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { RESERVATION_PAGE } from '@/data/reservationText';

const DAY_NAMES = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = dynamic(() => import('./CalendarPicker'), {
  ssr: false,
  loading: () => <div className="min-h-[340px]" />,
});

function StepBadge({ number }) {
  return (
    <div className="w-7 h-7 rounded-full bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
      <span className="text-xs font-black text-cyan-400">{number}</span>
    </div>
  );
}

export default function ReservationFormSection() {
  "use no memo";
  const { form, timeSlots } = RESERVATION_PAGE;

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '', phone: '', type: '', industry: '', request: '', agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleDateSelect(date) {
    setSelectedDate(date);
    setSelectedTime('');
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return alert('날짜와 시간을 선택해주세요.');
    if (!formData.agree) return alert('개인정보 수집 및 상담 동의에 체크해 주세요.');
    setSubmitted(true);
  }

  const scheduleLabel = selectedDate
    ? `${selectedDate.getFullYear()}년 ${selectedDate.getMonth() + 1}월 ${selectedDate.getDate()}일 (${DAY_NAMES[selectedDate.getDay()]})${selectedTime ? ' ' + selectedTime : ''}`
    : null;

  if (submitted) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/6 rounded-full blur-3xl pointer-events-none" />
        <div className="relative text-center max-w-md bg-slate-900/70 backdrop-blur-sm border border-white/[0.07] rounded-3xl p-12">
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-cyan-400" size={32} />
          </div>
          <h2 className="text-2xl font-black text-white mb-3">예약이 완료되었습니다!</h2>
          <p className="text-slate-400 text-sm mb-4">빠른 시간 내에 연락드리겠습니다.</p>
          {scheduleLabel && (
            <div className="px-4 py-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-sm text-cyan-300">
              {scheduleLabel}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-cyan-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-48 bg-blue-700/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto">

        <div className="mb-10 flex flex-col items-center text-center">
          <span className="px-4 py-1.5 rounded-full border border-cyan-800/50 bg-cyan-900/20 text-cyan-400 text-xs font-semibold mb-5">
            무료 상담 예약 &nbsp;·&nbsp; 24시간 내 연락 &nbsp;·&nbsp; 맞춤 견적 제공
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 text-white">
            {RESERVATION_PAGE.title}
          </h1>
          <p className="text-slate-400 text-xs mb-3">{RESERVATION_PAGE.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <Zap size={14} className="text-yellow-400" />
              평균 24시간 내 연락
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-cyan-400" />
              무료 진단 포함
            </span>
            <span className="flex items-center gap-1.5">
              <Star size={14} className="text-amber-400" />
              케어 플랜 상담 가능
            </span>
          </div>
        </div>

        <div className="space-y-5">

          {/* Step 1: 날짜 선택 */}
          <div className="bg-slate-900/70 backdrop-blur-sm border border-white/[0.07] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <StepBadge number="1" />
              <CalendarDays size={18} className="text-cyan-400" />
              <h2 className="text-base font-bold text-white">날짜 선택</h2>
            </div>
            <Calendar selectedDate={selectedDate} onSelect={handleDateSelect} />
          </div>

          {/* Step 2: 시간 선택 */}
          <div className={`bg-slate-900/70 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 ${
            selectedDate ? 'border-white/[0.07]' : 'border-white/[0.04] opacity-50'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <StepBadge number="2" />
              <Clock size={18} className={selectedDate ? 'text-cyan-400' : 'text-slate-600'} />
              <h2 className={`text-base font-bold ${selectedDate ? 'text-white' : 'text-slate-600'}`}>
                시간 선택
              </h2>
            </div>

            {!selectedDate ? (
              <div className="py-8 text-center">
                <CalendarDays size={28} className="text-slate-700 mx-auto mb-3" />
                <p className="text-sm text-slate-600">먼저 날짜를 선택해 주세요</p>
              </div>
            ) : (
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                      selectedTime === time
                        ? 'bg-cyan-500/20 border border-cyan-500/60 text-cyan-300 shadow-sm shadow-cyan-500/20'
                        : 'bg-slate-800/60 border border-white/[0.06] text-slate-300 hover:border-cyan-500/30 hover:text-cyan-300 hover:bg-cyan-500/5'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 선택된 일정 요약 */}
          {selectedDate && (
            <div className={`flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-300 ${
              selectedTime
                ? 'bg-cyan-500/10 border-cyan-500/30'
                : 'bg-slate-900/50 border-white/[0.06]'
            }`}>
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                selectedTime ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'
              }`} />
              <div>
                <p className="text-xs text-slate-500 mb-0.5">선택된 일정</p>
                <p className={`text-sm font-semibold ${selectedTime ? 'text-cyan-300' : 'text-slate-400'}`}>
                  {scheduleLabel}
                  {!selectedTime && <span className="text-slate-600"> — 시간을 선택해 주세요</span>}
                </p>
              </div>
            </div>
          )}

          {/* Step 3: 상담 신청 폼 */}
          <div className="bg-slate-900/70 backdrop-blur-sm border border-white/[0.07] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <StepBadge number="3" />
              <FileText size={18} className="text-cyan-400" />
              <h2 className="text-base font-bold text-white">상담 신청 정보</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="flex items-center gap-1.5 text-xs text-slate-400 mb-1.5 font-medium">
                  <User size={12} className="text-cyan-500/70" />
                  {form.name.label}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={form.name.placeholder}
                  required
                  className="w-full bg-slate-800/60 border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs text-slate-400 mb-1.5 font-medium">
                  <Phone size={12} className="text-cyan-500/70" />
                  {form.phone.label}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={form.phone.placeholder}
                  required
                  className="w-full bg-slate-800/60 border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs text-slate-400 mb-1.5 font-medium">
                  <Briefcase size={12} className="text-cyan-500/70" />
                  {form.type.label}
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/60 border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white transition-colors"
                >
                  <option value="">선택해주세요</option>
                  {form.type.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs text-slate-400 mb-1.5 font-medium">
                  <Briefcase size={12} className="text-cyan-500/70" />
                  {form.industry.label}
                </label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder={form.industry.placeholder}
                  required
                  className="w-full bg-slate-800/60 border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs text-slate-400 mb-1.5 font-medium">
                  <FileText size={12} className="text-cyan-500/70" />
                  {form.request.label}
                </label>
                <textarea
                  name="request"
                  value={formData.request}
                  onChange={handleChange}
                  placeholder={form.request.placeholder}
                  rows={4}
                  className="w-full bg-slate-800/60 border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors resize-none"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mt-0.5 accent-cyan-500 w-4 h-4 flex-shrink-0"
                />
                <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                  {form.agree}
                </span>
              </label>

              <button
                type="submit"
                className="w-full gradient-blue text-white font-black py-4 rounded-xl text-sm tracking-wide mt-2"
              >
                {form.submit}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

