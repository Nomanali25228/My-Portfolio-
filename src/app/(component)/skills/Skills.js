"use client"
import React, { useEffect } from 'react'

function Skills() {
    useEffect(() => {
        const circles = document.querySelectorAll('.circle');
        circles.forEach(elem => {
          var dots = elem.getAttribute("data-dots");
          var marked = elem.getAttribute("data-percent");
          var percent = Math.floor(dots * marked / 100);
          var points = "";
          var rotate = 360 / dots;
    
          for (let i = 0; i < dots; i++) {
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
          }
          elem.innerHTML = points;
    
          const pointsMarked = elem.querySelectorAll('.points');
          for (let i = 0; i < percent; i++) {
            pointsMarked[i].classList.add('marked');
          }
        });
      }, []);
    
  return (
    <div>
      
    <section class="skills" id="skills">
        <div class="main-text">
            <span>technical and perfessional</span>
            <h2>My Skills</h2>
        </div>

        <div class="skill-main">
            <div class="skill-left">
                <h3>technical Skills</h3>
                <div class="skill-bar">
                    <div class="info">
                        <p>HTML</p>
                        <p>89%</p>
                    </div>
                    <div class="bar">
                        <span class="html"></span>
                    </div>
                </div>

                <div class="skill-bar">
                    <div class="info">
                        <p>Figma</p>
                        <p>70%</p>
                    </div>
                    <div class="bar">
                        <span class="figma"></span>
                    </div>
                </div>

                <div class="skill-bar">
                    <div class="info">
                        <p>Javascript</p>
                        <p>78%</p>
                    </div>
                    <div class="bar">
                        <span class="javascript"></span>
                    </div>
                </div>

                <div class="skill-bar">
                    <div class="info">
                        <p>CSS</p>
                        <p>82%</p>
                    </div>
                    <div class="bar">
                        <span class="css"></span>
                    </div>
                </div>
            </div>
            <div class="skill-right">
                <h3>Professional Skills</h3>
                <div class="porfessional">
                    <div class="box">
                        <div class="circle" data-dots="60" data-percent="90"></div>
                        <div class="text">
                            <big>90%</big>
                            <small>Team Work</small>
                        </div>
                    </div>

                    <div class="box">
                        <div class="circle" data-dots="60" data-percent="65"></div>

                        <div class="text">
                            <big>65%</big>
                            <small>Project Mangement</small>
                        </div>
                    </div>

                    <div class="box">
                        <div class="circle" data-dots="60" data-percent="85"></div>

                        <div class="text">
                            <big>85%</big>
                            <small>Creativity</small>
                        </div>
                    </div>

                    <div class="box">
                        <div class="circle" data-dots="60" data-percent="70"></div>

                        <div class="text">
                            <big>70%</big>
                            <small>Comiunication</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Skills
