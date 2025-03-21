
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { User, Mail, Building, FileText, Award } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  nomineeName: z.string().min(2, {
    message: "Nominee name must be at least 2 characters.",
  }),
  nomineeEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  organization: z.string().min(2, {
    message: "Organization name must be at least 2 characters.",
  }),
  category: z.string({
    required_error: "Please select an award category.",
  }),
  projectName: z.string().min(2, {
    message: "Project name must be at least 2 characters.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }).max(1000, {
    message: "Description must not exceed 1000 characters."
  }),
  contactName: z.string().min(2, {
    message: "Your name must be at least 2 characters.",
  }),
  contactEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  termsAccepted: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const NominationForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomineeName: "",
      nomineeEmail: "",
      organization: "",
      projectName: "",
      description: "",
      contactName: "",
      contactEmail: "",
      termsAccepted: false,
    },
  });

  function onSubmit(data: FormValues) {
    toast({
      title: "Nomination submitted!",
      description: "Thank you for your nomination. We will review it shortly.",
    });
    
    console.log(data);
    form.reset();
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <Award className="h-6 w-6 text-leaf-500" />
        <h2 className="text-2xl font-bold text-gray-800">Nominate a Champion</h2>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Nominee Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="nomineeName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nominee's Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input className="pl-10" placeholder="John Doe" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="nomineeEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nominee's Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input className="pl-10" placeholder="john.doe@example.com" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="organization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input className="pl-10" placeholder="Organization name" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Award Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="most_trees_grown">Most Trees Grown</SelectItem>
                        <SelectItem value="innovative_method">Most Innovative Tree Growing Method</SelectItem>
                        <SelectItem value="young_champion">Young Tree Champion</SelectItem>
                        <SelectItem value="community_champion">Community Tree Champion</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name of the tree planting project" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why do they deserve this award?</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Textarea 
                        className="pl-10 min-h-[120px]" 
                        placeholder="Describe the nominee's achievements, impact, and why they deserve recognition..."
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Please provide specific examples of their work and impact (max 1000 characters).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="space-y-4 pt-4 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700">Your Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input className="pl-10" placeholder="Your name" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input className="pl-10" placeholder="your.email@example.com" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="termsAccepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I agree to the terms and conditions and confirm all information provided is accurate.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
          
          <div className="pt-4">
            <Button type="submit" className="w-full md:w-auto bg-leaf-500 hover:bg-leaf-600">
              Submit Nomination
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NominationForm;
