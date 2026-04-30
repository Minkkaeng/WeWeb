import React, { useEffect, useRef } from 'react';

const noticeData = [
  { id: 1, title: '2026년 장애인 일자리 사업 참여자 모집 공고', author: '운영지원팀', createdAt: '2026-04-15', views: 124 },
  { id: 2, title: '[안내] 5월 가정의 달 기념 행사 일정 안내', author: '지역복지팀', createdAt: '2026-04-12', views: 89 },
  { id: 3, title: '심리 상담 센터 휴관 및 대체 운영 안내', author: '상담실', createdAt: '2026-04-10', views: 56 },
  { id: 4, title: '2026년 상반기 자원봉사자 보수 교육 실시', author: '운영지원팀', createdAt: '2026-04-08', views: 72 },
  { id: 5, title: '지역사회 연계 돌봄 서비스 대상자 확대 안내', author: '사례관리팀', createdAt: '2026-04-05', views: 110 },
];

export default function NoticeSection({ onNoticeClick }: { onNoticeClick: () => void }) {
  const boardRef = useRef<any>(null);

  useEffect(() => {
    if (boardRef.current) {
      boardRef.current.posts = noticeData;
      
      const handlePostClick = (e: any) => {
        console.log('Post clicked:', e.detail);
        onNoticeClick();
      };
      
      boardRef.current.addEventListener('fw-post-click', handlePostClick);
      return () => {
        if (boardRef.current) {
          boardRef.current.removeEventListener('fw-post-click', handlePostClick);
        }
      };
    }
  }, [onNoticeClick]);

  return (
    <section className="eg-section-padding bg-white">
      <div className="eg-container">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">공지사항 / 소식</h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          </div>
          <button 
            onClick={onNoticeClick}
            className="text-sm font-bold text-blue-600 hover:underline flex items-center gap-1"
          >
            전체보기 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
          </button>
        </div>

        <div className="border border-gray-100 rounded-2xl p-8 bg-gray-50/50">
          {/* @ts-ignore */}
          <fw-board-list 
            ref={boardRef} 
            show-write-button="false"
          ></fw-board-list>
        </div>
      </div>
    </section>
  );
}
