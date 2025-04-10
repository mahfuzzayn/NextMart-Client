import { Button } from "@/components/ui/button";
import NMContainer from "@/components/ui/core/NMContainer";
import { getAllBrands } from "@/services/Brand";
import { IBrand } from "@/types";
import Image from "next/image";
import Link from "next/link";

const TopBrand = async () => {
    const { data: brands } = await getAllBrands();

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
                    {brands?.slice(0, 4)?.map((brand: IBrand) => (
                        <div
                            key={brand._id}
                            className="p-4 bg-white rounded-2xl flex justify-center items-center"
                        >
                            <div className="bg-[#0F0E0E0D] w-full flex justify-center rounded-2xl p-4">
                                <Image
                                    src={brand.logo}
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
