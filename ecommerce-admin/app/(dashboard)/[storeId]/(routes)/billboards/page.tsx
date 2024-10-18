import {format} from "date-fns";

import prismadb from "@/lib/prismadb";
import { BillboardClient } from "./components/client";
import { BillboardColumn } from "./components/columns";

const BillboardsPage = async ({
    params
}: {
    params: {storeId: string}
}) =>{

    const billboards = await prismadb.billboard.findMany({
        where: {
            storeId: params.storeId
        },
        orderBy: {
            createdAt: 'desc'
        }
    }) ;

    const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
        id: item.id,
        label: item.label, 
        createdAt: format(item.createdAt, "MMMM do, yyyy")
    }));


    return  (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex-col ">
        <div className="pt-6 p-8 ">
          <div className="bg-white p-8 rounded-lg shadow-md w-full ">
      
            <div className="space-y-4">
                <BillboardClient  data={formattedBillboards}/>
            </div>
            </div>
            </div>
        </div>
    )
}

export default BillboardsPage;