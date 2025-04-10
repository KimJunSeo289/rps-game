import React from 'react'
import ButtonCss from '../css/Button.module.css'
import scissors from '../assets/scissors.png';
import rock from '../assets/rock.png';
import paper from '../assets/paper.png';

const Button = ({setRsp, result, isPlaying, restart}) => {

  return (
    <div className={ButtonCss.mainBox}>
        <button className={ButtonCss.box} disabled={isPlaying} onClick={() => setRsp("가위")}>
            <img src={scissors} alt='가위'></img>
            <p>가위</p>
        </button>
        <button className={ButtonCss.box} disabled={isPlaying} onClick={() => setRsp("바위")}>
            <img src={rock} alt='바위'></img>
            <p>바위</p>
        </button>
        <button className={ButtonCss.box} disabled={isPlaying} onClick={() => setRsp("보")}>
            <img src={paper} alt='보'></img>
            <p>보</p>
        </button>
        <div className={ButtonCss.resultBox}>
            <p>{result ? result : "승부결과" }</p>
        </div>
        <button className={ButtonCss.restartBox} disabled={isPlaying} onClick={() => restart()}>
            <p>다시하기</p>
        </button>
    </div>
  )
}

export default Button