import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faJava, faGithub, faGit } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Spring MVC",
    "Spring Boot",
    "Spring Security",
    "Spring Data JPA",
    "QueryDsl",
    "jsp",
    "Javascript",
    "Jquery",
    "SQL",
    "MariaDB",
    "Oracle",
    "Postman"
];

const labelsSecond = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS"
];

const labelsThird = [
    "Git",
    "GitHub Actions",
    "Docker",
    "kubernetes",
    "Jenkins"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Java</h3>
                    <p>Spring Boot, Spring MVC, Spring Security 등 다양한 프레임워크를 활용해 
                       확장 가능하고 보안성이 뛰어난 백엔드 시스템을 구축할 수 있습니다.
                       멀티스레딩, JPA를 이용한 DB 연동, 그리고 설계 패턴 적용에 능숙하며,
                       비즈니스 요구사항을 안정적으로 충족하는 솔루션을 구현할 수 있습니다.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p> React를 활용하여 다양한 웹 애플리케이션을 처음부터 구축해본 경험이 있습니다.
                        SDLC 전 과정을 이해하고 있으며, 백엔드뿐만 아니라 프론트엔드 개발에도 능력을 발휘할 수 있습니다.
                        <br/>
                        <br/>
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps</h3>
                    <p>애플리케이션 구축 후에는 DevOps 환경을 설정하고, CI/CD 파이프라인 및 
                    자동 배포 프로세스를 구축하여 안정적인 운영과 효율적인 배포를 지원할 수 있습니다.                   
                    <br/>
                    <br/>
                    <br/>
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    );
}

export default Expertise;