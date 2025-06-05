'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const email = watch('email');
  const password = watch('password');

  const isDisabled = !email || password.length < 6;

  const onSubmit = (data: LoginForm) => {
    console.log('Login data:', data);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-2xl">
        <h1 className="text-2xl font-bold text-center text-black mb-6">Bankify</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Input
              type="email"
              placeholder="Enter your email"
              {...register('email')}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <Input
              type="password"
              placeholder="Enter your password"
              {...register('password')}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <Button type="submit" className="w-full" disabled={isDisabled}>
            Submit
          </Button>
        </form>
        <div className='text-center mt-4'>Don't have and account?<Link href="/register" className='hover:underline font-medium'>Register</Link></div>
      </div>
    </div>
  );
}
