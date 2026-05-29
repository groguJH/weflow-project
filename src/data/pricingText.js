export const PRODUCTION_PLANS = {
  sectionTitle: '제작 플랜',
  notice: '3중 택1 필수',
  plans: [
    {
      tier: 'BASIC',
      name: '랜딩 페이지 제작',
      originalPrice: '498,000원',
      price: '249,000원',
      unit: '/ 1회',
      checklist: [
        { ok: true, item: '3~4일 빠른 제작' },
        { ok: true, item: '문의 구조 설계' },
        { ok: true, item: '모바일 최적화' },
        { ok: true, item: '검색 노출 지원' },
      ],
    },
    {
      tier: 'PRO',
      name: '홈페이지 제작',
      originalPrice: '1,998,000원',
      price: '999,000원',
      unit: '/ 1회',
      checklist: [
        { ok: true, item: '7일 빠른 제작기간' },
        { ok: true, item: '업종 맞춤 구성' },
        { ok: true, item: '모바일 최적화' },
        { ok: true, item: '문의·예약 기능' },
        { ok: true, item: '검색 노출 지원' },
      ],
    },
    {
      tier: 'ALL-IN-ONE',
      name: '랜딩&홈페이지 제작',
      originalPrice: '2,198,000원',
      price: '1,099,000원',
      unit: '/ 1회',
      popular: true,
      checklist: [
        { ok: true, item: '10~11일 빠른 제작기간' },
        { ok: true, item: '업종 맞춤 구성' },
        { ok: true, item: '문의 구조 설계' },
        { ok: true, item: '모바일 최적화' },
        { ok: true, item: '검색 노출 지원' },
        { ok: true, item: '운영 · 관리 지원' },
      ],
    },
  ],
};

export const CARE_PLANS = {
  sectionTitle: 'WEFLOW 케어 플랜',
  sub: '만든 후가 진짜 시작입니다. 지속 성장을 위한 케어 플랜을 선택하세요.',
  notice: '3중 택1 필수',
  plans: [
    {
      tier: 'BASIC',
      name: 'WE CARE',
      subtitle: '기본 관리형',
      originalPrice: '월 178,000원',
      price: '월 89,000원',
      checklist: [
        { ok: true, item: '유지보수 : 월 1회' },
        { ok: true, item: '블로그 : 월 1개' },
        { ok: true, item: '인스타 : 월 4개' },
        { ok: true, item: 'SEO 상단등록' },
      ],
    },
    {
      tier: 'STANDARD',
      name: 'FLOW CARE',
      subtitle: '성장형',
      originalPrice: '월 378,000원',
      price: '월 189,000원',
      popular: true,
      checklist: [
        { ok: true, item: '유지보수 : 월 3회' },
        { ok: true, item: '블로그 : 월 2개' },
        { ok: true, item: '인스타 : 월 8개' },
        { ok: true, item: '네이버 키워드 세팅 할인 (149,000 → 79,000원)' },
        { ok: true, item: '당근 키워드 광고 세팅 50% 할인 (79,000 → 39,000원)' },
        { ok: true, item: '문의 개선' },
        { ok: true, item: 'SEO 상단등록' },
      ],
    },
    {
      tier: 'ALL-IN-ONE',
      name: 'WEFLOW CARE',
      subtitle: '프리미엄',
      originalPrice: '월 578,000원',
      price: '월 339,000원',
      isTop: true,
      checklist: [
        { ok: true, item: '유지보수 : 무제한' },
        { ok: true, item: '블로그 : 월 4개' },
        { ok: true, item: '인스타 : 월 12개' },
        { ok: true, item: '네이버 키워드/당근 플레이스 광고 세팅 무료' },
        { ok: true, item: '월 성과 체크' },
        { ok: true, item: '랜딩 개선' },
        { ok: true, item: '광고관리' },
        { ok: true, item: 'SEO 상단관리' },
      ],
    },
  ],
};

export const AD_PLANS = {
  sectionTitle: '광고 플랜',
  plans: [
    {
      name: '네이버 광고',
      price: '일 149,000원~',
      theme: 'green',
      desc: '네이버 검색 상위 노출로 더 많은\n잠재 고객을 유입시킵니다',
      tags: ['검색 광고 운영', '블로그 상위 노출', '키워드 최적화', '월간 성과 보고서'],
    },
    {
      name: '당근 플레이스 광고',
      price: '일 79,000원~',
      theme: 'orange',
      desc: '지역 고객에게 직접 도달하는\n당근마켓 지역 광고를 운영합니다',
      tags: ['지역 타겟 광고', '당근 플레이스 최적화', '동네 비즈니스 홍보', '소상공인 맞춤'],
    },
  ],
};

export const PRICING_NOTICE = '모든 가격은 부가세(VAT) 포함입니다';
