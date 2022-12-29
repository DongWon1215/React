import React, {useState} from 'react';
import Headers from "./Headers";
import Aside from "./Aside";
import Footer from "./Footer";
import Nav from "./Nav";
import Session from "./Session";

function Container(props) {
    const [session, setSession ]= useState("HTML5는 HTML의 완전한 5번째 버전으로 월드 와이드 웹 (World Wide Web)의 핵심 마크업 언어이다. 2004년 7월 Web Hypertext Application Technology Working Group(WHATWG)에서 웹 애플리케이션 1.0이라는 이름으로 세부 명세 작업을 시작하였다.\n\n HTML5는 HTML 4.01, XHTML 1.0, DOM 레벨 2 HTML에 대한 차기 표준 제안이다. 비디오, 오디오 등 다양한 부가기능과 최신 멀티미디어 콘텐츠를 액티브X 없이 브라우저에서 쉽게 볼 수 있게 하는 것을 목적으로 한다.\n\nW3C는 2014년 10월 28일 HTML5 표준안을 확정했다고 발표했다.\n\n이후 2016년 11월 1일 HTML5의 마이너 업데이트 버전인 HTML5.1 표준안을 확정, 2017년 12월 14일 HTML5.2 표준안을 확정했다. HTML5.3 표준안은 현재 작업 초안 단계로 진행 중이다.");

    const [navContent,setNavContent] = useState(['HTML','CSS3','JavaScript']);

    const [category, setCategory] = useState(['data1','data2','data3','data4','data5']);

    const [recently, setRecently] = useState(['data1','data2','data3','data4']);

    return (
        <div>
            <Headers title={"test용"}></Headers>

            <Aside category={category} recently={recently}></Aside>

            <Nav list={navContent}></Nav>

            <Session content={session} title={"HTML5 개요와 활용"}></Session>
            <Session content={session} title={"HTML5 개요와 활용"}></Session>

            <Footer></Footer>

        </div>
    );
}

export default Container;