"use client";
import { FaCog } from 'react-icons/fa';

import { Store } from "@prisma/client";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { AlertModal } from "@/components/modals/alert-modal";
import { ApiAlert } from "@/components/ui/api-alert";
import { useOrigin } from "@/hooks/use-origin";

interface SettingsFormProps {
  initialData: Store;
}

const formSchema = z.object({
  name: z.string().min(1),
});

type SettingsFormValues = z.infer<typeof formSchema>;

export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  
  const params =useParams();
  const router = useRouter();
  const origin = useOrigin();
  
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  

  const onSubmit = async (data: SettingsFormValues) => {
    try{

      setLoading(true);
      await axios.patch(`/api/stores/${params.storeId}`, data);
      router.refresh();
      toast.success ("Store updated.");

    }catch (error){
      toast.error("something went wrong");

    }finally{
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete (`/api/stores/${params.storeId}`)
      router.refresh();
      router.push("/");
      toast.success("Store deleted");

    }catch (error) {
      toast.error ("Make sure you removed all products and categories first.")
    }
    finally{
      setLoading(false);
      setOpen(false);
    }
  }

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex items-center space-x-2"> 
        <FaCog className="h-7 w-7 mr-4 text-black "/>

        <Heading
          title="Settings"
          description="Manage the store in the settings"
        />

        </div>
        <Button
          disabled={loading}
          variant="destructive"
          size="sm"
          onClick={() => setOpen(true)}
          className="bg-red-500 hover:bg-red-600 text-white rounded-md p-2"
        >
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      <Separator />
  
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Store name"
                      {...field}
                      className="border-gray-300 focus:border-indigo-500 rounded-md p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={loading}
            className="ml-auto bg-indigo-500 hover:bg-indigo-600 text-white rounded-md p-2"
            type="submit"
          >
            save changes
          </Button>
        </form>
      </Form>
  
      <Separator />
      <ApiAlert
        title="NEXT_PUBLIC_API_URL"
        description={`${origin}/api/${params.storeId}`}
        variant="public"
      />
    </>
  );
  
};
