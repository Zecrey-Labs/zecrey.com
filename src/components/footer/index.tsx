import {useEffect, useRef, useState} from 'react'
import styled from "styled-components";

const StyleFooter = styled.div`
 position: fixed;
 left: 0;
 bottom: 0;
 width: 100%;
 height: .8rem;
 z-index: 2;
 background: var(--background-1);

 .parent {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
 }

 .parent::-webkit-scrollbar {
  display: none;
 }

 .child {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
 }

 .child {
  img {
   background: transparent;
   margin: 0 .05rem;
   width: 2.04rem;
   height: .66rem;
  }
 }

 @media (max-width: 1080px){
  height: .38rem;
  .child {
   img {
    width: .96rem;
    height: .31rem;
    margin: 0px 0.025rem;
   }
  }
 }
`

let context = [
  "static/partner/Group1466.png",
  "static/partner/Group1354.png",
  "static/partner/Group1355.png",
  "static/partner/Group1356.png",
  "static/partner/Group1465.png",
  "static/partner/Group1362.png",
  "static/partner/Group1361.png",
  "static/partner/Group1360.png",
  "static/partner/Group1359.png",
  "static/partner/Group1358.png",
  "static/partner/Group1363.png",
  "static/partner/Group1364.png",
  "static/partner/Group1365.png",
  "static/partner/Group1366.png",
  "static/partner/Group1367.png",
  "static/partner/Group1372.png",
  "static/partner/Group1371.png",
  "static/partner/Group1370.png",
  "static/partner/Group1369.png",
  "static/partner/Group1368.png",
  "static/partner/Group1373.png",
  "static/partner/Group1374.png",
  "static/partner/Group1375.png",
  "static/partner/Group1376.png",
  "static/partner/Group1377.png",
  "static/partner/Group1378.png",
]
let contextMobile = [
  "static/partner/Group1466.png",
  "static/partner/Group1354.png",
  "static/partner/Group1465.png",
  "static/partner/Group1355.png",
  "static/partner/Group1356.png",
  "static/partner/Group1362.png",
  "static/partner/Group1361.png",
  "static/partner/Group1360.png",
  "static/partner/Group1359.png",
  "static/partner/Group1358.png",
  "static/partner/Group1363.png",
  "static/partner/Group1364.png",
  "static/partner/Group1365.png",
  "static/partner/Group1366.png",
  "static/partner/Group1367.png",
  "static/partner/Group1372.png",
  "static/partner/Group1371.png",
  "static/partner/Group1370.png",
  "static/partner/Group1369.png",
  "static/partner/Group1368.png",
  "static/partner/Group1373.png",
  "static/partner/Group1374.png",
  "static/partner/Group1375.png",
  "static/partner/Group1376.png",
  "static/partner/Group1377.png",
  "static/partner/Group1378.png",
]





export function Footer() {
  const [isScrolle, setIsScrolle] = useState(true)
  const [backers, setBackers] = useState<string[]>([])
  const speed = 25
  const warper: any = useRef()
  const childDomInit: any = useRef()
  const childDomCopy: any = useRef()

  useEffect(() => {
    if (document.documentElement.clientWidth < 1180){
      setBackers(contextMobile)
    } else {
      setBackers(context)
    }
    setTimeout(() => {
      childDomCopy.current.innerHTML = childDomInit.current.innerHTML
    }, 1000)
  }, [])

  useEffect(() => {
    let timer: any
    if (isScrolle) {
      timer = setInterval(() => {
        warper.current.scrollLeft >= childDomInit.current.scrollWidth
          ? (warper.current.scrollLeft = 0)
          : warper.current.scrollLeft++
      }, speed)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [isScrolle])

  const hoverHandler = (flag: any) => setIsScrolle(flag)

  return (
    <StyleFooter>
      <div className="parent" ref={warper} >
        <div className="child com" ref={childDomInit}>
          {backers.map((item: any, index) => (
            <img
              key={index}
              onMouseOver={() => hoverHandler(false)}
              onMouseLeave={() => hoverHandler(true)}
              src={item}
            />
          ))}
        </div>
        <div className="child" ref={childDomCopy}></div>
      </div>
    </StyleFooter>
  )
}

