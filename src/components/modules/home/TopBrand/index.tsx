import { Button } from "@/components/ui/button";
import NMContainer from "@/components/ui/core/NMContainer";
import Image from "next/image";
import Link from "next/link";

const TopBrand = async () => {
    const brands = [
        {
            id: 1,
            image: "/assets/husqvarna-brand-logo-1.png",
        },
        {
            id: 2,
            image: "/assets/zara-brand-logo-2.png",
        },
        {
            id: 3,
            image: "/assets/cara-brand-logo-3.png",
        },
        {
            id: 4,
            image: "/assets/lufthansa-brand-logo-4.png",
        },
        {
            id: 5,
            image: "/assets/necx-brand-logo-5.png",
        },
        {
            id: 6,
            image: "/assets/barbie-brand-logo-6.png",
        },
        {
            id: 7,
            image: "/assets/amazon-brand-logo-7.png",
        },
        {
            id: 8,
            image: "/assets/puma-brand-logo-8.png",
        },
    ];

    return (
        <div className="bg-white bg-opacity-50 py-10">
            <NMContainer>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Top Brand</h2>
                    <Link href="/products">
                        <Button variant="outline" className="rounded-full">
                            All Collection
                        </Button>
                    </Link>
                </div>
                <div className="grid grid-cols-4 gap-5 my-5">
                    {brands.map((brand) => (
                        <div
                            key={brand.id}
                            className="p-4 bg-white rounded-2xl flex justify-center items-center"
                        >
                            <div className="bg-[#0F0E0E0D] w-full flex justify-center rounded-2xl p-4">
                                <Image
                                    src={brand.image}
                                    width={180}
                                    height={72}
                                    alt="image"
                                    className="w-full p-4 h-[72px] max-w-[180px]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </NMContainer>
        </div>
    );
};

export default TopBrand;
