import React from "react";
import ilhajob from '../assets/images/일하잡.png';
import market from '../assets/images/마켓백엔드 erd.png';
import auth from '../assets/images/springboot-jwt.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/doki0804/final-project-team1-ilhajob" target="_blank" rel="noreferrer"><img src={ilhajob} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/doki0804/final-project-team1-ilhajob" target="_blank" rel="noreferrer"><h2>일하잡(구인구직 서비스)</h2></a>
                <p>구인구직 사이트 프로젝트로서 개인회원, 기업회원을 구분하여 각 회원에 맞는 기능을 제공하는 프로젝트</p>
            </div>
            <div className="project">
                <a href="https://github.com/doki0804/market-system" target="_blank" rel="noreferrer"><img src={market} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/doki0804/market-system" target="_blank" rel="noreferrer"><h2>마켓 백엔드 시스템</h2></a>
                <p>장바구니 관리, 주문 처리, 결제 관리와 같은 기본적인 전자상거래 기능을 처리하기 위해 설계된 백엔드 서비스</p>
            </div>
            <div className="project">
                <a href="https://github.com/doki0804/auth-service" target="_blank" rel="noreferrer"><img src={auth} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/doki0804/auth-service" target="_blank" rel="noreferrer"><h2>JWT 인증인가 서비스</h2></a>
                <p>회원가입, 로그인, OAuth2등을 이용한 인증 인가 기능을 처리하기 위해 설계된 백엔드 서비스</p>
            </div>
        </div>
    </div>
    );
}

export default Project;