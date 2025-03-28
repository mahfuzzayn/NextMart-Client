/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { NMTable } from "@/components/ui/core/NMTable";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Trash } from "lucide-react";
import DeleteConfirmationModal from "@/components/ui/core/NMModal/DeleteConfirmationModal";
import { toast } from "sonner";
import CreateBrandModal from "./CreateBrandModal";
import { IBrand } from "@/types/brand";
import { deleteBrand } from "@/services/Brand";

type TBrandsProps = {
    brands: IBrand[];
};

const ManageBrands = ({ brands }: TBrandsProps) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleDelete = async (data: IBrand) => {
        console.log(data);
        setSelectedId(data?._id);
        setSelectedItem(data?.name);
        setModalOpen(true);
    };

    const handleDeleteConfirm = async () => {
        try {
            if (selectedId) {
                const res = await deleteBrand(selectedId);
                console.log(res);
                if (res.success) {
                    toast.success(res.message);
                } else {
                    toast.error(res.message);
                }
            }
        } catch (error: any) {
            console.log(error?.message);
        }
    };

    const columns: ColumnDef<IBrand>[] = [
        {
            accessorKey: "name",
            header: () => <div>Brand Name</div>,
            cell: ({ row }) => (
                <div className="flex items-center space-x-3">
                    <Image
                        src={row.original.logo}
                        alt={row.original.name}
                        width={40}
                        height={40}
                        className="w-8 h-8 rounded-full"
                    />
                    <span className="truncate">{row.original.name}</span>
                </div>
            ),
        },
        {
            accessorKey: "action",
            header: () => <div>Action</div>,
            cell: ({ row }) => (
                <button
                    className="text-red-500"
                    title="Delete"
                    onClick={() => handleDelete(row.original)}
                >
                    <Trash className="w-5 h-5" />
                </button>
            ),
        },
    ];

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Manage Brands</h1>
                <CreateBrandModal />
            </div>
            <div className="mt-5">
                <NMTable data={brands} columns={columns} />
                <DeleteConfirmationModal
                    name={selectedItem}
                    isOpen={isModalOpen}
                    onOpenChange={setModalOpen}
                    onConfirm={handleDeleteConfirm}
                />
            </div>
        </div>
    );
};

export default ManageBrands;
