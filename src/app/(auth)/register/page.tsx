import Link from 'next/link';

import RegisterForm from '@/app/(auth)/register/components/register-form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
export default function Page() {
  return (
    <div className="pt-10">
      <Card className="mx-auto max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>Register to access the system</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter className="flex flex-col items-start text-sm">
          <Link href={'/register/factory-owner'} className="w-full">
            <Button className="w-full" variant={'outline'}>
              Register as a factory owner
            </Button>
          </Link>
          <Separator className="my-4" />
          <div className="flex items-center">
            <span className="mr-2 text-sm text-muted-foreground">
              Already have an account?{' '}
            </span>
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
