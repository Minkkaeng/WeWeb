export const Footer = () => {
  return (
    <footer className="bg-[#2D3748] text-white/50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1 md:col-span-2 text-white">
           <h4 className="text-2xl font-black mb-6">KAREUM</h4>
           <p className="text-white/60 font-light text-sm max-w-sm mb-6">
             우리가 잘 몰랐던 제주의 작은 마을들에서 시작되는 특별한 여행 이야기. 제주 마을에서 깊은 숨을 쉬면서 머무는 여행이 바로 카름스테이입니다.
           </p>
           <div className="flex gap-4">
             <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">IN</a>
             <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">IG</a>
             <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">FB</a>
           </div>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">카름 정보</h5>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">카름스테이 소개</a></li>
            <li><a href="#" className="hover:text-white transition-colors">카름마을</a></li>
            <li><a href="#" className="hover:text-white transition-colors">호스트 신청</a></li>
            <li><a href="#" className="hover:text-white transition-colors">고객센터</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">연락처</h5>
          <ul className="space-y-3 text-sm">
             <li className="flex flex-col">
               <span className="text-white/40 text-xs mb-1">문의</span>
               <a href="mailto:contact@kareumstay.test" className="hover:text-white transition-colors text-white/80">contact@kareumstay.test</a>
             </li>
             <li className="flex flex-col mt-4">
               <span className="text-white/40 text-xs mb-1">제주관광공사</span>
               <span className="text-white/80">제주특별자치도 제주시 선덕로 23</span>
             </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>COPYRIGHT © JEJU TOURISM ORGANIZATION. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">이용약관</a>
          <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
        </div>
      </div>
    </footer>
  );
};
