import React, { useEffect, useRef } from 'react';

const noticeData = [
  { id: 1, title: '2026년 장애인 일자리 사업 참여자 모집 공고', author: '운영지원팀', createdAt: '2026-04-15', views: 124 },
  { id: 2, title: '[안내] 5월 가정의 달 기념 행사 일정 안내', author: '지역복지팀', createdAt: '2026-04-12', views: 89 },
  { id: 3, title: '심리 상담 센터 휴관 및 대체 운영 안내', author: '상담실', createdAt: '2026-04-10', views: 56 },
  { id: 4, title: '2026년 상반기 자원봉사자 보수 교육 실시', author: '운영지원팀', createdAt: '2026-04-08', views: 72 },
  { id: 5, title: '지역사회 연계 돌봄 서비스 대상자 확대 안내', author: '사례관리팀', createdAt: '2026-04-05', views: 110 },
  { id: 6, title: '노인 맞춤 돌봄 서비스 생활지원사 역량 강화 교육', author: '노인복지팀', createdAt: '2026-04-03', views: 45 },
  { id: 7, title: '찾아가는 복지 상담실 운영 안내 (5월)', author: '현장지원팀', createdAt: '2026-04-01', views: 231 },
];

export default function NoticeList({ onDetail }: { onDetail: (id: number) => void }) {
  const boardRef = useRef<any>(null);

  useEffect(() => {
    if (boardRef.current) {
      boardRef.current.posts = noticeData;
      
      const handlePostClick = (e: any) => {
        onDetail(e.detail.id);
      };
      
      boardRef.current.addEventListener('fw-post-click', handlePostClick);
      return () => {
        if (boardRef.current) {
          boardRef.current.removeEventListener('fw-post-click', handlePostClick);
        }
      };
    }
  }, [onDetail]);

  return (
    <div className="eg-section-padding pt-32 min-h-screen bg-gray-50">
      <div className="eg-container">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">공지사항</h2>
          <p className="text-gray-500">에버복지포털의 새로운 소식과 유용한 정보를 전해드립니다.</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
           {/* @ts-ignore */}
           <fw-board-list 
            ref={boardRef} 
            show-write-button="false"
          ></fw-board-list>
        </div>
      </div>
    </div>
  );
}
