/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { Dispatch, SetStateAction } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { addFlashSale } from "@/services/FlashSale";
import { toast } from "sonner";

type TModalProps = {
    selectedIds: string[];
    setSelectedIds: Dispatch<SetStateAction<[] | string[]>>;
};

const DiscountModal = ({ selectedIds, setSelectedIds }: TModalProps) => {
    const form = useForm();

    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const modifiedData = {
            products: [...selectedIds],
            discountPercentage: parseFloat(data?.discountPercentage),
        };

        try {
            const res = await addFlashSale(modifiedData);

            if (res.success) {
                toast.success(res.message);
                setSelectedIds([]);
            } else {
                toast.error(res.message);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button disabled={!selectedIds?.length}>Add Flash Sale</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Flash Sale</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex items-center gap-4"
                    >
                        <FormField
                            control={form.control}
                            name="discountPercentage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            {...field}
                                            value={field.value || ""}
                                            className="rounded-sm w-56"
                                            placeholder="Discount Percentage"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">
                            {isSubmitting ? "Adding..." : "Add"}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default DiscountModal;
