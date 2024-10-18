"use client";

import * as z from "zod";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {toast} from "react-hot-toast";
import axios from "axios";
import { StoreIcon } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(1),
});


export const StoreModal = () => {

    const StoreModal = useStoreModal();

    const [Loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = async (values: z.infer< typeof formSchema>)=>{
        try{
          setLoading(true);

          const response=await axios.post('/api/stores', values);
          
          window.location.assign(`/${response.data.id}`)

        } catch(error){
           toast.error("something went wrong");
        }finally {
            setLoading(false);
        }
    }

    return (
        <Modal 
        title="Create store"
        description="Add a new store to manage products and categories"
        isOpen = {StoreModal.isOpen}
        onClose={StoreModal.onClose}
        
        >
            <div>
            <div className="space-y-4 py-2 pb-4">
               <Form {...form}>
                   <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField 
                    control={form.control}
                    name="name"
                    render ={({field})=> (
                        <FormItem>
                            <div className="mb-2">
                            <FormLabel className="flex">
                                 Name
                                 <StoreIcon className="ml-2 h-5 w-5" />
                            </FormLabel>
                            </div>
                            <FormControl>
                                <Input
                                disabled ={Loading}
                                placeholder="Pant, Shirt ..." {...field}
                                />
                                
                            </FormControl>
                            <FormMessage   
                            />
                        </FormItem>
                    )}                  
                  />
                     <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                      <Button 
                      disabled ={Loading}
                      variant="outline" onClick={StoreModal.onClose}>
                        Cancel
                      </Button>
                      <Button 
                      disabled ={Loading}
                      type="submit">
                        Continue 
                      </Button>
                     </div>

                   </form>
               </Form>
            </div>
            </div>

        </Modal>
    )
}