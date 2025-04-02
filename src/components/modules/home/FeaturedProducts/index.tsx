import { Button } from "@/components/ui/button";
import NMContainer from "@/components/ui/core/NMContainer";
import ProductCard from "@/components/ui/core/ProductCard";
import { getAllProducts } from "@/services/Product";
import { IProduct } from "@/types";
import Link from "next/link";

const FeaturedProducts = async () => {
    const { data: products } = await getAllProducts();

    return (
        <div className="bg-white bg-opacity-50 py-10">
            <NMContainer>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Featured Products</h2>
                    <Link href="/products">
                        <Button variant="outline" className="rounded-full">
                            All Collection
                        </Button>
                    </Link>
                </div>
                <div className="grid grid-cols-5 gap-4 my-5">
                    {Array(3)
                        .fill(products?.[1])
                        .map((product: IProduct, idx: number) => (
                            <ProductCard key={idx} product={product} />
                        ))}
                    {Array(2)
                        .fill(products?.[0])
                        .map((product: IProduct, idx: number) => (
                            <ProductCard key={idx} product={product} />
                        ))}
                </div>
            </NMContainer>
        </div>
    );
};

export default FeaturedProducts;
