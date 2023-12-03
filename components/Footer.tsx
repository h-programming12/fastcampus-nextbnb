export default function Footer() {
  return (
    <footer className="bg-gray-50 py-2">
      <div className="max-w-screen-xl w-full mx-auto p-4 md:flex md:items-center md:justify-between border-b-gray-200 border-b">
        <div className="text-sm text-gray-800 sm:text-center">
          {' '}
          © 2024 <span className="hover:underline">
            Fastcampus Nextbnb.
          </span>{' '}
          All Rights Reserved.
        </div>
        <ul className="flex flex-wrap gap-4 md:gap-6 items-center text-sm text-gray-800 mt-2 sm:mt-0">
          <li>
            <a href="#" className="hover:underline">
              개인정보 처리방침
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              이용약관
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              공지사항
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              회사 세부정보
            </a>
          </li>
        </ul>
      </div>
      <div className="text-[10px] text-gray-400 mx-auto p-4 max-w-screen-xl">
        웹사이트 제공자: Fastcampus NextBnb | 이사: Fastcampus NextBnb | 사업자
        등록 번호: 없음 | 연락처: test@nextbnb.com, 웹사이트 | 호스팅 서비스
        제공업체: vercel | nextbnb는 통신판매 중개자로 nextbnb 플랫폼을 통하여
        게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. nextbnb
        플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은
        해당 서비스를 제공하는 호스트에게 있습니다.
      </div>
    </footer>
  )
}
