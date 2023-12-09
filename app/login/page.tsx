"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import { signIn } from "./_actions/sign-in";
import { useForm } from "react-hook-form";
import { yup, yupResolver } from "@/utils/utils";
import { MIN_PASSWORD, REQUIRED_FIELD, TYPE_EMAIL } from "@/constants/messages";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Error } from "@/types/response";

type SignInValues = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string().email(TYPE_EMAIL).required(REQUIRED_FIELD),
  password: yup.string().min(6, MIN_PASSWORD).required(REQUIRED_FIELD),
});

export default function Login() {
  const [error, setError] = useState<Error | null>(null);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignInValues>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: SignInValues) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);

    const response = await signIn(formData);

    if (response?.error) setError(response?.error);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="mx-auto w-full max-w-md p-8 space-y-2 shadow-lg rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader>
            <div className="flex justify-center mb-6">
              <Logo />
            </div>
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
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email")}
                className="transition duration-300 ease-in-out"
                id="email"
                placeholder="name@example.com"
                required
                type="email"
              />
              {errors["email"]?.message && (
                <Label htmlFor="email" type="error">
                  {errors["email"]?.message}
                </Label>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                {...register("password")}
                className="transition duration-300 ease-in-out"
                id="password"
                required
                type="password"
              />
              {errors["password"]?.message && (
                <Label htmlFor="password" type="error">
                  {errors["password"]?.message}
                </Label>
              )}
            </div>
            <Link
              className="text-sm text-right block hover:text-blue-500"
              href="#"
            >
              Forgot Password?
            </Link>
          </CardContent>
          <CardFooter>
            <Button className="w-full py-2" loading={isSubmitting}>
              Sign in
            </Button>
          </CardFooter>
          <div className="text-center">
            <span className="text-sm text-gray-500">New to our platform?</span>
            <Link
              className="text-sm text-blue-500 ml-1 hover:underline"
              href="#"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
