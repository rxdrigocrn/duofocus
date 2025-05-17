'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '@/components/shared/TextInput'
import AuthTemplate from '@/components/templates/AuthTemplate'
import AuthHeader from '@/components/templates/AuthHeader'

const LoginPage = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log('Register data:', data)
  }

  return (
    <AuthTemplate title="Cadastro">
      <AuthHeader title="Welcome Back!" subtitle="Please enter your details" />
      <form className="space-y-6 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name="email"
          label="E-mail"
          type="email"
          placeholder="Digite seu e-mail"
          register={register}
        />
        <TextInput
          name="password"
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
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
          className="w-full bg-red-400 text-white py-3 rounded-lg hover:bg-red-500 transition cursor-pointer"
        >
          Login
        </button>

      </form>

      <div className="flex flex-col items-center justify-center">
        <button
          type="submit"
          className="w-full bg-transparent outline outline-1 outline-cyan-600 text-cyan-600 py-3 rounded-lg hover:bg-cyan-700 hover:text-white transition cursor-pointer"
        >
          Criar Conta
        </button>
      </div>
    </AuthTemplate>
  )
}

export default LoginPage

