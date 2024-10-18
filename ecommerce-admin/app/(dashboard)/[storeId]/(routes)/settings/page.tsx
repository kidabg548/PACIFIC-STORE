import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { SettingsForm } from "./components/settings-form";

interface SettingsPageProps{
    params: {
        storeId: string;
    }
};

const SettingsPage: React.FC<SettingsPageProps> = async ({
     params
})=> {

    const{userId} =auth();
    if(!userId){
        redirect('/sign-in');
    }

    const store =await prismadb.store.findFirst({
         where: {
            id: params.storeId,
            userId
         }
    });

    if(!store) {
        redirect('/');
    }
   
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex-col ">
        <div className="pt-6 p-8 ">
          <div className="bg-white p-8 rounded-lg shadow-md w-full ">
      
            <div className="space-y-4">
      
              <SettingsForm initialData={store} />
      
            </div>
          </div>
          </div>
        </div>
      );
      
}
 
export default SettingsPage