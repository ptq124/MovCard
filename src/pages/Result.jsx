import React, { useEffect, useState } from 'react'
import CopiedLink from '../components/common/CopiedLink'
import Refresh from '../components/common/Refresh'
import MainLogo from '../components/common/MainLogo'
import LiveTv from '../components/common/LiveTv'
import Netflix from '../components/common/Netflix'
import Watcha from '../components/common/Watcha'
import Youtube from '../components/common/Youtube'
import Wavve from '../components/common/Wavve'
import Tving from '../components/common/Tving'
import Disneyplus from '../components/common/Disneyplus'
import { gsap } from 'gsap'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ArrowUp from '../components/common/ArrowUp'
import ArrowDown from '../components/common/ArrowDown'

export default function Result() {
  const { key } = useParams()
  const [data, setData] = useState([])
  const [background, setBg] = useState([])
  const [count, setCount] = useState(0)
  useEffect(() => {
    ;(async () => {
      const res = await axios.get(`/data/${key}.json`)
      setData([...res.data])
      setBg([...res.data.map((d) => d.image[0].background)])
    })()
  }, [key])

  useEffect(() => {
    const wrap = document.getElementsByClassName('wrap')[0]
    wrap.animate(
      [
        {
          opacity: 0.9,
        },
        {
          background: `#111220 url(/img/background/${background[count]})`,
          backgroundSize: 'cover',
          opacity: 1,
        },
      ],
      {
        duration: 300,
        fill: 'forwards',
      }
    )
  }, [data, background, count])
  useEffect(() => {
    let mcard = document.querySelectorAll('.mcard')
    mcard.forEach((item, i) => {
      item.style.zIndex = mcard.length - i
      gsap.fromTo(
        item,
        { x: -30, y: 0, rotation: 0 },
        {
          x: i * 30,
          y: i * 10,
          rotation: i * 5,
          ease: 'power1.out',
          duration: 1,
        }
      )
    })
  })
  const go = () => {
    if (count + 1 >= data.length) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
    data.push(data.shift())
    setData([...data])
  }
  const back = () => {
    if (count <= 0) {
      setCount(data.length - 1)
    } else {
      setCount(count - 1)
    }
    data.unshift(data.pop())
    setData([...data])
  }

  return (
    <section className='w-4/5 mx-auto'>
      <div className='h-1/6 flex items-end relative'>
        <Refresh css={' hover:bg-backspace absolute -left-32 '} />
        <MainLogo
          value={{
            width: 123.41,
            height: 54,
          }}
          css={'mx-auto mb-3'}
        ></MainLogo>
        <div className='flex items-end justify-end absolute -right-24'>
          <CopiedLink></CopiedLink>
        </div>
      </div>
      <article className='h-5/6 flex justify-between items-center'>
        <div className='relative w-11/12 h-full flex'>
          {data.map((items, index) => (
            <div key={index} className=''>
              <img
                className='mcard w-2/4 top-36'
                src={`/img/poster/${items.image[0].poster}`}
                alt={items.title}
              />
              {index === 0 && (
                <div className='w-2/4 h-[34rem] absolute top-32 right-12 flex flex-col justify-between'>
                  <div className='p-5'>
                    <div className='p-3'>
                      <span className='Pretendard-B-20 bg-[#595A64] h-[2.1rem] w-[2.1rem] p-2 rounded-full text-center whitespace-nowrap'>
                        {items.movie_rate}
                      </span>
                    </div>
                    <div className='p-3 Pretendard-M-25'>{items.title}</div>
                    <div className='p-3 Pretendard-H1-R-17'>
                      <span className='tracking-[0.13em]'>
                        {items.runnig_time}
                      </span>
                      <span className='mx-5'>|</span>
                      <span className='tracking-[0.13em]'>
                        {items.movie_genre}
                      </span>
                      <span className='mx-5'>|</span>
                      <span className='tracking-[0.03em]'>
                        {items.open_date}
                      </span>
                    </div>
                    <div className='p-3 Pretendard-H1-R-16'>{items.plot}</div>
                  </div>
                  <div className='p-5'>
                    <div className='p-3 flex items-center'>
                      <LiveTv></LiveTv>
                      <span className='Poppins-M-20 ml-2'>Platform</span>
                    </div>
                    <div className='p-3 flex'>
                      {items.platform.map((item) => (
                        <div key={item} className='mr-5'>
                          {item === '넷플릭스' && <Netflix />}
                          {item === '왓챠' && <Watcha />}
                          {item === '유튜브' && <Youtube />}
                          {item === '웨이브' && <Wavve />}
                          {item === '티빙' && <Tving />}
                          {item === '디즈니플러스' && <Disneyplus />}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='flex flex-col items-center w-[5.8rem] h-56 justify-between'>
          <ArrowUp go={go}></ArrowUp>
          <ArrowDown back={back}></ArrowDown>
        </div>
      </article>
    </section>
  )
}
