'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { SiNaver } from 'react-icons/si'
import toast from 'react-hot-toast'

export default function SignInPage() {
  const router = useRouter()
  const { status } = useSession()

  console.log(status)

  const handleClickGoogle = () => {
    try {
      signIn('google', { callbackUrl: '/' })
    } catch (e) {
      console.log(e)
      toast.error('다시 시도해주세요')
    }
  }

  const handleClickNaver = () => {
    try {
      signIn('naver', { callbackUrl: '/' })
    } catch (e) {
      console.log(e)
      toast.error('다시 시도해주세요')
    }
  }

  useEffect(() => {
    if (status === 'authenticated') {
      toast.error('접근할 수 없습니다.')
      router.replace('/')
    }
  }, [router, status])

  return (
    <div className="max-w-xl mx-auto pt-10 pb-24">
      <div className="flex flex-col gap-6">
        <h1 className="text-lg font-semibold text-center">
          로그인 또는 회원가입
        </h1>
        <hr className="border-b-gray-300" />
        <div className="text-xl md:text-2xl font-semibold">
          Fastcampus Nextbnb에 오신 것을 환영합니다.
        </div>
      </div>
      <div className="text-sm text-gray-500 mt-2">
        SNS 계정을 이용해서 로그인 또는 회원가입을 해주세요.
      </div>
      <div className="flex flex-col gap-5 mt-16">
        <button
          type="button"
          onClick={handleClickGoogle}
          className="relative border border-gray-700 rounded-md py-3 text-sm hover:bg-black/5 text-center font-semibold"
        >
          <FcGoogle className="absolute left-5 text-xl my-auto inset-y-0" />
          구글로 로그인하기
        </button>
        <button
          type="button"
          onClick={handleClickNaver}
          className="relative border border-gray-700 rounded-md py-3 text-sm hover:bg-black/5 text-center font-semibold"
        >
          <SiNaver className="absolute left-6 text-green-400 my-auto inset-y-0" />
          네이버로 로그인하기
        </button>
      </div>
    </div>
  )
}
