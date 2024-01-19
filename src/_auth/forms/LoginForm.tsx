import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Navigate } from "react-router-dom"
import { useState } from "react"


const formSchema = z.object({
  email: z.string().email(),
  password :z.string().min(3,{message:"Too short"})

})
const LoginForm = (setIsAuthenticated:any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const [navigateToHome, setNavigateToHome] = useState(false);

 
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.email === "user@gmail.com" && values.password === "password@123") {
      setNavigateToHome(true);
      setIsAuthenticated(true);
    }
    
  }

  if (navigateToHome) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="flex flex-start flex-col bg-gray-900 rounded-lg sm:h-[500px] md:h-[600px] sm:w-fit md:w-full  text-white p-10 space-y-16">
    <Form {...form}>
      <div className="flex justify-center flex-col text-center relative sm:space-y-3 md:space-y-4 w-full ">
          <h1 className="h1-bold sm:h3-semibold">Welcome Back</h1>
          <p className="sm:text-sm">Sign in to continue to Aiworksquad</p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="sm:space-y-2  space-y-4 md:w-[280px] sm:w-[230px]">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder= "✉ Email" {...field} className=" bg-transparent"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder= " Password" {...field} className=" bg-transparent"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-1 justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="sm:text-xs text-sm font-medium leading-none peer-disabled:opacity-70"
            >Remember me</label>
          </div>
          <a href="#" className="text-sm font-medium opacity-70 sm:text-xs">Forgot Password?</a>
        </div>
        <Button type="submit" className="shad-button_primary w-full translate-y-6">Login</Button>
      </form>
    </Form>
    <p className="sm:text-xs opacity-5">Email: user@gmail.com , Password: password@123</p>
    </div>

  )
}

export default LoginForm