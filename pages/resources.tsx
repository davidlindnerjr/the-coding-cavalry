import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

const resources = () => {
    return (
        <>
            <Container>
                <Row className={`py-5`}>
                    <Col md={8}>
                        <Link href="/" passHref>
                            <Button className="btn-light btn-link">
                                RETURN HOME
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <Row className={`text-center pb-5`}>
                    <Col md={12}>
                        <div>
                            <h1 className={`font-weight-bold display-3 ${styles.westernFont}`}>Rootin Tootin Resources For Coding in 2021</h1>
                        </div>
                        <h4 className={`text-muted pt-1 pb-4`}>June 27th, 2021</h4>
                    </Col>
                </Row>
                <Row className="pb-5">
                    <Col md={2}></Col>
                    <Col md={8}>
                        <h2 className="font-weight-bold">Table of Contents</h2>
                        <ul>
                            <li>
                                <a href="#coding-resources-for-all" className={`text-primary`}>
                                    <h4>Coding Resources For All</h4>
                                </a>
                            </li>
                            <li>
                                <a href="#html-css" className={`text-primary`}>
                                    <h4>HTML/CSS</h4>
                                </a>
                            </li>
                            <li>
                                <a href="#css-frameworks" className={`text-primary`}>
                                    <h4>CSS Frameworks</h4>
                                </a>
                            </li>
                            <li>
                                <a href="#git-github" className={`text-primary`}>
                                    <h4>Git/Github</h4>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}></Col>
                </Row>

                {/* Coding Resources For All */}

                <Row className="pb-5">
                    <Col md={2}></Col>
                    <Col md={8}>
                        <a id="coding-resources-for-all"></a>
                        <h1 className={`display-4 font-weight-bold ${styles.westernFont}`}>Coding Resources For All</h1>
                        <a href="http://www.youtube.com">
                            <h1 className={`py-2 text-primary font-weight-bold`}>YouTube</h1>
                        </a>
                        <p className='lead'>
                            By far YouTube is the BEST resource when learning to code. There are
                            resources for all topics of the programming spectrums. You can learn 
                            anything from automating with Python to Full Stack Web Development. If 
                            you want to learn it, YouTube has it. 
                        </p>
                        <p className='lead'>
                            With that being said there is a problem with YouTube have any and all 
                            resource for programming at your disposal; you can become overwhelmed 
                            by how much there is at your disposal. So where do you start? The first 
                            step I would recommend someone to do if they arent too sure about what 
                            specific programming they want to learn is to shop around. Search up some 
                            specific topics or languages and watch some crash courses, typically consisting
                            of about 1-2 hours of content, and get a feel for what you like. Once you find 
                            something you enoy then go from there. For example, personally I am really into 
                            Web Development so I started out with watching HTML/CSS videos; eventually diving 
                            into Javascript, frameworks, etc. 
                        </p>
                        <p className='lead'>
                            With all that being said, YouTube really is one of the best resources for learning 
                            programming. It is filled to the brim with material, and the best part is that it is 
                            100% FREE. Just know what it is that you are looking for.
                        </p>
                        <h3>Recommended Creators on YouTube</h3>
                        <ul>
                            <li>
                                <a href="https://www.youtube.com/user/TechGuyWeb" target="_blank" rel="noreferrer" className={`text-primary`}>
                                    <h4>Traversy Media</h4>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw" target="_blank" rel="noreferrer" className={`text-primary`}>
                                    <h4>Web Dev Simplified </h4>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCvmINlrza7JHB1zkIOuXEbw" target="_blank" rel="noreferrer" className={`text-primary`}>
                                    <h4>Mike Dane</h4>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/user/thenewboston" target="_blank" rel="noreferrer" className={`text-primary`}>
                                    <h4>The New Boston</h4>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q" target="_blank" rel="noreferrer" className={`text-primary`}>
                                    <h4>Dev Ed</h4>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UC4JX40jDee_tINbkjycV4Sg" target="_blank" rel="noreferrer" className={`text-primary`}>
                                    <h4>Tech w/ Tim</h4>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/user/DesignCourse" target="_blank" rel="noreferrer" className={`text-primary`}>
                                    <h4>Design Course</h4>
                                </a>
                            </li>
                        </ul>
                        <a href="http://www.udemy.com">
                            <h1 className={`py-2 text-primary font-weight-bold pt-4`}>Udemy</h1>
                        </a>
                        <p className='lead'>
                            If you are someone who needs a structured, step-by-step, learning experience then Udemy is going to be an ideal resource for you.
                            Udemy had thousands of courses for programming. There are courses for becoming a full stack web developer, cyber security, arifial
                            inteligence with Python, and so much more. Instructors on this site offer courses that can range from anywhere between an hour to over 
                            40 hours worth of content. Udemy does something cool where they offer sales on their courses multiple times during each month, so itll
                            be less expensive to go over and snag some knowledge. Some courses offer a certificate from the instructor after completing the course;
                            this can be really handy to add to your resume and LinkedIn profile in order to show future employers your knowledge and to show that
                            you can complete a task/ project. 
                        </p>
                        <a href="https://www.freecodecamp.org/">
                            <h1 className={`py-2 text-primary font-weight-bold pt-4`}>freeCodeCamp</h1>
                        </a>
                        <p className='lead'>
                            freeCodeCamp is actually where I got my start in web development. I learned the basics of HTML, CSS, and even a fair bit of Javascript.
                            If youre someone who enjoys learning by doing then this is for you. 
                        </p>
                        <p className='lead'>
                            There are multiple categories of programming to choose from. In each module
                            you start out with the the basics and gradually work your way up through a series of lectures that you can read through at your own pace. Each
                            lecture has multiple examples and information on everything to be learned in that particilar section. After each lecture there is an exercise where you
                            put yout newfound skills to the test. If you are unable to complete the exercise dont worry! The exercise offers answers and explanations if you find
                            yourself stuck. Also, just like the name implies, freeCodeCamp is 100% free!
                        </p>
                        <p className='lead'>
                            Just like Udemy, freeCodeCamp also offers certifications after completing one of their courses; you can never have too many!
                        </p>
                    </Col>
                    <Col md={2}></Col>
                </Row>

                {/* HTML/CSS */}

                <Row className="pb-5">
                    <Col md={2}></Col>
                    <Col md={8}>
                        <a id="html-css"></a>
                        <h1 className={`display-4 font-weight-bold ${styles.westernFont}`}>HTML/CSS</h1>
                        <ul>
                            <li>
                                <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer" className={`text-primary`}>
                                    <h4>w3schools</h4>
                                </a>
                                <h5>If you are writing HTML/CSS and you have no idea what something does, w3schools will! w3schools is full of documentation on whatever you may need.</h5>
                            </li>
                            <li>
                                <a href="https://codepen.io/" target="_blank" rel="noreferrer" className={`text-primary`}>
                                    <h4>Codepen</h4>
                                </a>
                                <h5>If you have a quick idea that just sprouted open up Codepen.io, a free web based sandbox text editor, and test out your code! Codepen is also full of creators and users sharing there own super cool code snippets. Its a great resource for learning and just overall getting inspiration from others.</h5>
                            </li>
                            <li>
                                <a href="https://css-tricks.com/" target="_blank" rel="noreferrer" className={`text-primary`}>
                                    <h4>CSS-TRICKS</h4>
                                </a>
                                <h5>CSS-Tricks is a great place to discover creative things regarding css code, gather inspiration for your own projects, and add a few more tricks up your sleeve.</h5>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}></Col>
                </Row>

                {/* CSS Frameworks */}

                <Row className="pb-5">
                    <Col md={2}></Col>
                        <Col md={8}>
                            <a id="css-frameworks"></a>
                            <h1 className={`display-4 font-weight-bold ${styles.westernFont}`}>CSS Frameworks</h1>
                            <p className='lead'>
                                CSS frameworks can help boost your productivity when creating the layout of a website. There are tons of these frameworks that provide already made components, styling, and layout options
                                that you can simply plug-in-play. If you have trouble with your own CSS then a framework will be a tremendous help.
                            </p>
                            <ul>
                                <li>
                                    <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer" className={`text-primary`}>
                                        <h4>Bootstrap</h4>
                                    </a>
                                    <h5>Bootstrap is one of, if not the most, popular CSS frameworks out there; allowing you to quickly design and customize your sites look.</h5>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className={`text-primary`}>
                                        <h4>tailwindcss</h4>
                                    </a>
                                    <h5>Tailwind is similar to Bootstrap but offeres more simple components and a bigger emphasis and customization.</h5>
                                </li>
                                <li>
                                    <a href="https://materializecss.com/" target="_blank" rel="noreferrer" className={`text-primary`}>
                                        <h4>Materrialize</h4>
                                    </a>
                                    <h5>Materialize is great in its ease of use, cross-bowser compatibilty, and is great at producing mobile friendly applications.</h5>
                                </li>
                                <li>
                                    <a href="https://getuikit.com/" target="_blank" rel="noreferrer" className={`text-primary`}>
                                        <h4>UIkit</h4>
                                    </a>
                                    <h5>If you are looking for something that is lightweight and eays to learn, UIkit is the place to be. UIkit also offers ready to go themes.</h5>
                                </li>
                            </ul>
                        </Col>
                    <Col md={2}></Col>
                </Row>

                {/* Git/Github */}

                <Row className="pb-5">
                    <Col md={2}></Col>
                    <Col md={8}>
                        <a id="git-github"></a>
                            <h1 className={`display-4 font-weight-bold ${styles.westernFont}`}>Git/GitHub</h1>
                        <p className='lead'>
                            GitHub is one of the most powerful tools at a developers disposal. Git offers so many helpful tools in the development space. Nearly if not all companies are using
                            version control; and most of those companies are using Git. But why are so many people using Git you may ask?
                        </p>
                        <p className='lead'> 
                            Git offers something called version control. Version control allows the user to add their code into a storage system, and when the user adds changes to that code they can now 
                            store that version of the code along with the previous version. So now say you have made a mistake somehwere, no problem, you can now go back to a previous version of your
                            project and before the mistake.
                        </p>
                        <p className='lead'>
                            Sharing your code is another reason why Git is so widely adopted. Before, if you were coding on a team you would have to send lines of code to eachother and cross your
                            fingers that at the end of the day that your code would compile. Git solves this problem. In GitHub you start off with a main project or reposioty. If you have code that you need
                            to add to the project then you create a branch which is a copy of the main code; meaning if you mess up then it will not affect the main code. Once you know you code works, you can merge 
                            your code with the main code; and now eveyone else can have your code. Git helps to make teamwork seamless.
                        </p>
                        <ul>
                            <li>
                                <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer" className={`text-primary`}>
                                   <h4>Check out GitHub</h4>
                                </a>
                            </li>
                            <li>
                                <a href="https://docs.github.com/en" target="_blank" rel="noreferrer" className={`text-primary`}>
                                   <h4>GitHub Documentation</h4>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.freecodecamp.org/news/the-beginners-guide-to-git-github/" target="_blank" rel="noreferrer" className={`text-primary`}>
                                   <h4>freeCodeCamp Beginners Guide to Git & GitHub</h4>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.atlassian.com/git/tutorials/what-is-version-control" target="_blank" rel="noreferrer" className={`text-primary`}>
                                   <h4>Learn Git Version Control</h4>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}></Col>
                </Row>

            </Container>
        </>
    )
}

export default resources;
