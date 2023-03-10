import React, { useEffect } from 'react'
import MainLogo from '../components/common/MainLogo'
import '../assets/text-style.css'
import Button from '../components/common/Button'
import CopiedLink from '../components/common/CopiedLink'
import { useNavigate } from 'react-router-dom'
import background from '../assets/Frame67.svg'
export default function Start() {
  useEffect(() => {
    const wrap = document.getElementsByClassName('wrap')[0]
    wrap.animate(
      [
        {
          opacity: 0,
        },
        {
          background: `url(${background})`,
          backgroundSize: 'cover',
          opacity: 1,
        },
      ],
      {
        duration: 1000,
        fill: 'forwards',
      }
    )
  })
  const navigate = useNavigate()
  const nextPage = () => {
    const wrap = document.getElementsByClassName('wrap')[0]
    wrap.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      1000
    )
    setTimeout(() => {
      navigate('/select')
    }, 1000)
  }

  return (
    <section className='w-4/5'>
      <div className='h-1/6 flex items-end justify-end relative left-20'>
        <CopiedLink></CopiedLink>
      </div>
      <div className='h-4/6 w-4/5 mx-auto flex flex-col items-center justify-center relative'>
        <div className='absolute top-[60px] right-[100px] bg-white w-5 h-5 rounded-full animate-[twinkle_12s_infinite]'></div>
        <div className='absolute top-[200px] right-[50px] bg-white w-5 h-5 rounded-full animate-[twinkle3_11s_infinite]'></div>
        <div className='absolute bottom-[180px] left-[130px] bg-white w-5 h-5 rounded-full animate-[twinkle_12s_infinite]'></div>
        <div className='absolute bottom-[220px] left-[100px] bg-white w-5 h-5 rounded-full animate-[twinkle3_11s_infinite]'></div>
        <MainLogo
          value={{
            width: 342,
            height: 163,
          }}
          css={'h-1/4'}
        ></MainLogo>
        <p className='Pretendard-M-25 md:p-3'>오늘 당신이 보아야 할 영화는?</p>
        <p className='Pretendard-R-23 text-center md:p-3'>
          세 장의 카드를 골라,
          <br /> 오늘 시청할 영화를 추천 받으세요.
        </p>
        <Button
          css={
            'Btn-Poppins-M-30 bg-white text-black rounded-[48px] w-56 h-20 mt-10 py-5 px-20 hover:bg-[#E2E0FF] focus:bg-[#B4B0DE] focus:text-white'
          }
          content={'Start'}
          onClick={nextPage}
        ></Button>
      </div>
    </section>
  )
}
