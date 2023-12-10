"use client";

import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  MIN_PASSWORD,
  PASSWORD_MATCH,
  REQUIRED_FIELD,
  TYPE_EMAIL,
} from "@/constants/messages";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Error, Success } from "@/types/response";
import { yup, yupResolver } from "@/lib/yup/client";
import { signUp } from "./_actions/sign-up";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type SignUpValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object({
  email: yup.string().email(TYPE_EMAIL).required(REQUIRED_FIELD),
  password: yup.string().min(6, MIN_PASSWORD).required(REQUIRED_FIELD),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], PASSWORD_MATCH)
    .required(REQUIRED_FIELD),
});

export default function RegisterPage() {
  const [success, setSuccess] = useState<Success | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const methods = useForm<SignUpValues>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (values: SignUpValues) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);

    const response = await signUp(formData);

    if (response?.error) setError(response?.error);
    if (response?.success) setSuccess(response?.success);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} {...methods}>
      <CardHeader>
        <div>
          <CardTitle className="text-2xl">Welcome!</CardTitle>
          <CardDescription>
            Enter your credentials to create your account.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {success && (
          <Alert variant="success">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>{success.type}</AlertTitle>
            <AlertDescription>{success.message}</AlertDescription>
          </Alert>
        )}
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
        <div className="space-y-2">
          <FormField
            control={control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
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
      </CardContent>
      <CardFooter>
        <Button className="w-full py-2" loading={isSubmitting}>
          Sign up
        </Button>
      </CardFooter>
      <div className="text-center">
        <span className="text-sm text-gray-500">Already have an account?</span>
        <Link
          className="text-sm text-blue-500 ml-1 hover:underline"
          href="/login"
        >
          Sign In
        </Link>
      </div>
    </Form>
  );
}
