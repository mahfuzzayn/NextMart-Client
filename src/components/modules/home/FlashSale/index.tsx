import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductCard";
import { IProduct } from "@/types";
import Link from "next/link";
import React from "react";
import Countdown from "./Countdown";
import NMContainer from "@/components/ui/core/NMContainer";
import { getFlashSaleProducts } from "@/services/FlashSale";

const FlashSale = async () => {
    const { data: products } = await getFlashSaleProducts();

    return (
        <NMContainer className="my-20">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold">Flash Sales</h2>
                    <Countdown />
                </div>
                <Link href="/products">
                    <Button variant="outline" className="rounded-full">
                        All Collection
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-4 gap-8 my-5">
                {products?.slice(0, 4).map((product: IProduct, idx: number) => (
                    <ProductCard key={idx} product={product} />
                ))}
            </div>
        </NMContainer>
    );
};

export default FlashSale;
