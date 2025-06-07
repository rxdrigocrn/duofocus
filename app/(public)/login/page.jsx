'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '@/components/shared/TextInput'
import AuthTemplate from '@/components/templates/AuthTemplate'
import AuthHeader from '@/components/templates/AuthHeader'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { API_BASE_URL } from '@/lib/axios/api'

const LoginPage = () => {
  const { register, handleSubmit } = useForm()
  const router = useRouter()

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, data, {
        headers: { 'Content-Type': 'application/json' },
      });

      sessionStorage.setItem('token', res.data.token); // salva o token
      router.push('/home');
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <AuthTemplate title="Cadastro">
      <AuthHeader title="Welcome Back!" subtitle="Please enter your details" />
      <form className="space-y-6 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name="email"
          label="E-mail"
          type="email"
          placeholder="Enter your email"
          register={register}
        />
        <TextInput
          name="senha"
          label="Password"
          type="password"
          placeholder="******"
          register={register}
        />


        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <input type="checkbox" id="remember-me" name="remember-me" className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <p className='text-sm text-cyan-600 cursor-pointer  hover:underline'>Forgot your password?</p>
        </div>

        <button
          type="submit"
          className="w-full bg-[#FF6666] text-white py-3 rounded-lg hover:bg-[#FF4444] transition cursor-pointer"
        >
          Login
        </button>

      </form>

      <div className="flex flex-col items-center justify-center">
        <button
          type="submit"
          onClick={() => redirect('/registro')}
          className="w-full bg-transparent outline outline-1 outline-[#6699FF] text-[#6699FF] py-3 rounded-lg hover:bg-[#6699FF] hover:text-white transition cursor-pointer"
        >
          Sign Up
        </button>
      </div>
    </AuthTemplate>
  )
}

export default LoginPage

