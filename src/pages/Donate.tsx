
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CreditCard, Building, User, Mail, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  accountName: z.string().min(2, { message: 'Please enter account holder name' }),
  bankName: z.string().min(2, { message: 'Please enter your bank name' }),
  accountNumber: z
    .string()
    .min(8, { message: 'Account number must be at least a minimum of 8 digits' })
    .regex(/^\d+$/, { message: 'Account number must contain only digits' }),
  routingNumber: z
    .string()
    .min(9, { message: 'Routing number must be 9 digits' })
    .max(9, { message: 'Routing number must be 9 digits' })
    .regex(/^\d+$/, { message: 'Routing number must contain only digits' }),
  amount: z
    .string()
    .min(1, { message: 'Please enter donation amount' })
    .regex(/^\d+(\.\d{1,2})?$/, { message: 'Please enter a valid amount' }),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Donate = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      accountName: '',
      bankName: '',
      accountNumber: '',
      routingNumber: '',
      amount: '',
      notes: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    toast({
      title: "Donation initiated",
      description: "Thank you for your contribution. We'll process your donation shortly.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-20 md:py-24 bg-gradient-to-b from-white to-leaf-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-medium mb-4">Make a Donation</h1>
              <p className="text-foreground/70 text-lg">
                Your contribution helps us plant more trees and recognize environmental champions around the world.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-leaf-100">
              <Alert className="mb-6 bg-leaf-50 border-leaf-200">
                <AlertCircle className="h-4 w-4 text-leaf-600" />
                <AlertDescription>
                  All donations are tax-deductible. You'll receive a receipt via email after your donation is processed.
                </AlertDescription>
              </Alert>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input placeholder="John Doe" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input placeholder="john@example.com" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-leaf-700 border-b border-leaf-100 pb-2">Bank Details</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="accountName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Account Holder Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="John Doe" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="bankName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bank Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="Bank of America" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="accountNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Account Number</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="12345678" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="routingNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Routing Number</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="123456789" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Donation Amount ($)</FormLabel>
                          <FormControl>
                            <Input placeholder="100.00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Any specific instructions or information about your donation" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-2">
                    <Button type="submit" className="w-full bg-leaf-500 hover:bg-leaf-600 text-white">
                      Complete Donation
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Donate;
