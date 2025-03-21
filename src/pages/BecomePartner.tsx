
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  organization: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const BecomePartner = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    
    // In a real application, you would send this data to your backend
    // For now, we'll just show a success toast
    toast({
      title: "Partnership request submitted",
      description: "Thank you for your interest! We'll contact you soon.",
    });
    
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-slate-50">
        {/* Hero Section with Image */}
        <div className="relative bg-leaf-500 py-20 px-4">
          <div className="absolute inset-0 z-0 opacity-30">
            <img 
              src="/hero/forest-canopy.jpg" 
              alt="Forest canopy" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Become Our Partner
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Join us in our mission to restore Kenya's forests and combat climate change through sustainable partnerships.
            </p>
          </div>
        </div>
        
        {/* Form Section */}
        <div className="container mx-auto max-w-3xl px-4 py-16">
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl">Partnership Inquiry</CardTitle>
              <CardDescription>
                Fill out the form below to express your interest in partnering with us.
                Our team will reach out to discuss collaboration opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+254 XXX XXX XXX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization/Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your organization name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Information (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Tell us about your interest in partnering with us" 
                            {...field} 
                            className="min-h-[100px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full md:w-auto bg-leaf-500 hover:bg-leaf-600">
                    Submit Partnership Request
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BecomePartner;
