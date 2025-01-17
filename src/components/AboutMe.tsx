import React from "react";
import '../assets/styles/AboutMe.scss';

function AboutMe() {
    return(
    <div className="about-container" id="aboutMe">
        <h1>About Me</h1>
        <div className="about-grid">
            <div>
            <h3>안녕하세요, 협업을 통해 성장하고 도전을 즐기는 개발자 이원호입니다.</h3>
            </div>
            <div>
                <h4>저는 혼자 일하기보다는 팀과 함께 일하며 더 큰 성취감을 느낍니다. 협업 속에서 서로의 역량을 키워가고, 함께 성장하는 과정은 제게 큰 동기부여가 됩니다.
                새로운 기술에 대한 호기심이 많아 빠르게 습득하고 이를 실제 프로젝트에 적용하는 것을 즐깁니다. 나아가, 제가 배운 지식을 동료들과 공유하며 함께 성장하는 데 큰 보람을 느낍니다.
                기존 코드를 분석하고 원리를 이해하는 데 강점을 가지고 있으며, 에러와 문제 상황을 두려워하지 않습니다. 트러블슈팅 과정을 통해 문제를 해결하고 더 나은 결과를 만들어내는 것이
                제 일의 중요한 동력입니다.</h4>
            </div>
        </div>
    </div>
    );
}

export default AboutMe;