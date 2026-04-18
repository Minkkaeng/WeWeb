import React, { useEffect, useRef } from 'react';

const noticeDataMap: Record<number, any> = {
  1: { id: 1, title: '2026년 장애인 일자리 사업 참여자 모집 공고', author: '운영지원팀', createdAt: '2026-04-15', views: 124, content: '<p>2026년 장애인 일자리 사업 참여자를 다음과 같이 모집하오니 많은 참여 바랍니다.</p><p>1. 모집분야: 행정도우미, 환경정비 등</p><p>2. 모집기간: 2026년 4월 15일 ~ 4월 30일</p><p>3. 신청방법: 방문 접수 또는 이메일 접수</p>' },
  // ... more if needed
};

export default function NoticeDetail({ id, onBack }: { id: number, onBack: () => void }) {
  const detailRef = useRef<any>(null);

  useEffect(() => {
    if (detailRef.current) {
      const post = noticeDataMap[id] || { 
        id, 
        title: '2026년 장애인 일자리 사업 참여자 모집 공고', 
        author: '운영지원팀', 
        createdAt: '2026-04-15', 
        views: 124, 
        content: '<div class="space-y-4"><p>본 공고는 장애인의 사회 참여 확대와 소득 보장을 위해 추진되는 사업입니다.</p><h4 class="font-bold text-lg mt-6">사업 개요</h4><ul class="list-disc pl-5 space-y-2"><li>사업기간: 2026년 1월 ~ 12월</li><li>근무시간: 주 20시간 (일 4시간)</li><li>보수: 월 1,100,000원 (4대보험 가입)</li></ul><h4 class="font-bold text-lg mt-6">신청 자격</h4><p>만 18세 이상 등록 장애인 (미취업자 한함)</p></div>' 
      };
      detailRef.current.post = post;
      
      const handleBack = () => onBack();
      detailRef.current.addEventListener('fw-back', handleBack);
      
      return () => {
        if (detailRef.current) {
          detailRef.current.removeEventListener('fw-back', handleBack);
        }
      };
    }
  }, [id, onBack]);

  return (
    <div className="eg-section-padding pt-32 min-h-screen bg-gray-50">
      <div className="eg-container">
        <div className="bg-white rounded-3xl p-12 shadow-sm">
           {/* @ts-ignore */}
           <fw-board-detail 
            ref={detailRef} 
            show-back="true"
          ></fw-board-detail>
        </div>
      </div>
    </div>
  );
}
