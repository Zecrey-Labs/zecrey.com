"use client";
import {Header} from "../../components/header/index";
import {Footer} from "../../components/footer/index";
import {useEffect, useState} from "react";
import {load} from "../preload";
import {Authentication} from "../../components/authentication/index";
import {PopUpWaring} from "../../components/authentication/PopUpWaring";
import {PopUpError} from "../../components/authentication/PopUpError";
import {IPattern} from "../../pattern";

export default function AuthenticationIndex() {
  const [isReady, setIsReady] = useState(false);
  const [text, setText] = useState<string>('')
  const [showTask, setShowTask] = useState<boolean>(false)
  const [match, setMatch] = useState<IPattern | false>(false)


  useEffect(() => {
    (() => {
      load();
      setIsReady(true)
    })();

  }, []);

  if (!isReady) return null
  return (
    <div>
      <Header/>
      <Authentication
        text={text}
        setText={setText}
        setShowTask={setShowTask}
        setMatch={setMatch}
      />
      {
        showTask && match &&
        <PopUpWaring text={text} match={match} setWarnShow={setShowTask} />
      }
      {
        showTask && !match &&
        <PopUpError text={text} match={match} setErrorShow={setShowTask} />
      }
      <Footer />
    </div>
  )
}
