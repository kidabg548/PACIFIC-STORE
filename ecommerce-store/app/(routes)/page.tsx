import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  
  return (
    <div className="bg-gradient-to-r from-orange-100 via-blue-100 to-gray-300 bg-blend-overlay">
  <Container>
    <div className="space-y-10 pb-10">
      <Billboard/>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </div>
  </Container>
</div>
  )
};

export default HomePage;
