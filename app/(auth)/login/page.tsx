'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { LoadingButton } from '@/components/ui/button';
import {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { signIn } from './_actions/sign-in';
import { MIN_PASSWORD, REQUIRED_FIELD, TYPE_EMAIL } from '@/constants/messages';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Error } from '@/types/response';
import { yup, yupResolver } from '@/lib/yup/client';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

type SignInValues = {
    email: string;
    password: string;
};

const schema = yup.object({
    email: yup.string().email(TYPE_EMAIL).required(REQUIRED_FIELD),
    password: yup.string().required(REQUIRED_FIELD).min(6, MIN_PASSWORD),
});

export default function LoginPage() {
    const [error, setError] = useState<Error | null>(null);
    const methods = useForm<SignInValues>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = async (values: SignInValues) => {
        const formData = new FormData();
        formData.append('email', values.email);
        formData.append('password', values.password);

        const response = await signIn(formData);

        if (response?.error) setError(response?.error);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} {...methods}>
            <CardHeader>
                <div>
                    <CardTitle className="text-2xl">Welcome Back!</CardTitle>
                    <CardDescription>
                        Enter your credentials to access your account.
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                {error && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>{error.type}</AlertTitle>
                        <AlertDescription>{error.message}</AlertDescription>
                    </Alert>
                )}
                <div className="space-y-2">
                    <FormField
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        className="transition duration-300 ease-in-out"
                                        placeholder="name@example.com"
                                        required
                                        type="email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="space-y-2">
                    <FormField
                        control={control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        className="transition duration-300 ease-in-out"
                                        required
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Link
                    className="text-sm text-right block hover:text-blue-500"
                    href="/forgot-password">
                    Forgot Password?
                </Link>
            </CardContent>
            <CardFooter className="pt-4">
                <LoadingButton className="w-full py-2" loading={isSubmitting}>
                    Sign in
                </LoadingButton>
            </CardFooter>
            <div className="text-center">
                <span className="text-sm text-gray-500">
                    New to our platform?
                </span>
                <Link
                    className="text-sm text-blue-500 ml-1 hover:underline"
                    href="/register">
                    Sign Up
                </Link>
            </div>
        </Form>
    );
}
