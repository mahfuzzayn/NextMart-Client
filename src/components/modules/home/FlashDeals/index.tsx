import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductCard";
import { getAllProducts } from "@/services/Product";
import { IProduct } from "@/types";
import Link from "next/link";
import React from "react";
import Countdown from "./Countdown";
import NMContainer from "@/components/ui/core/NMContainer";

const FlashDeals = async () => {
    const { data: products } = await getAllProducts();

    return (
        <NMContainer className="my-20">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold">Flash Deals Now</h2>
                    <Countdown />
                </div>
                <Link href="/products">
                    <Button variant="outline" className="rounded-full">
                        View All
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-3 gap-8 my-5">
                {Array(3)
                    .fill(products?.[1])
                    .map((product: IProduct, idx: number) => (
                        <ProductCard key={idx} product={product} />
                    ))}
            </div>
        </NMContainer>
    );
};

export default FlashDeals;
