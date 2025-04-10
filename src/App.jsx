import React, { useState } from 'react'
import Card from './components/Card'

import AppCss from './css/App.module.css'
import Button from './components/Button'

import scissors from './assets/scissors.png'
import rock from './assets/rock.png'
import paper from './assets/paper.png'
import question from './assets/questionmark.png'

const App = () => {
  const [rsp, setRsp] = useState("")
  const [compRsp, setCompRsp] = useState("")
  const [result, setResult] = useState("")
  const [isPlaying, setIsPlaying] = useState(false);

  const rspImageMap = {
    가위: scissors,
    바위: rock,
    보: paper,
    "": question
  }

  const CompRdRsp = () => {
    const resKey = ["가위","바위","보"];
    const index = Math.floor(Math.random() * resKey.length);
    return resKey[index]
  }

  const handleUserChoice = (userChoice) => {
    if (isPlaying) return;
    setIsPlaying(true);
    setRsp(userChoice);   
    setTimeout(() => {
      const compChoice = CompRdRsp();
      setCompRsp(compChoice);
      const result = winOrLose(userChoice, compChoice); 
      setResult(result);
      setIsPlaying(false);
    }, 1000);          
  };

  const winOrLose = (user, comp) => {
    if(user === comp) return "무승부"
    if((user === "가위" && comp === "보") ||
    (user === "바위" && comp === "가위") ||
    (user === "보" && comp === "바위")) return "이겼다"
    return "졌다"
  }

  const restart = () =>{
    setRsp("");
    setCompRsp("");
    setResult("");
  }


  return (
    <>
      <div className={AppCss.Header}>
        <h1>가위바위보 게임</h1>
      </div>

      <div className={AppCss.middle}>
        <Card Name="당신" GameText={rsp} Class="user" Image={rspImageMap[rsp]} result={result}/>
        <Button setRsp={handleUserChoice} result={result} isPlaying={isPlaying} restart={restart}/>
        <Card Name="컴퓨터" GameText={compRsp} Class="Computer" Image={rspImageMap[compRsp]} result={result}/>
      </div>

      <p>버튼을 클릭하여 가위, 바위, 보 중 하나를 선택하세요.</p>
      <p>컴퓨터는 랜덤으로 선택합니다.</p>
    </>
  )
}

export default App