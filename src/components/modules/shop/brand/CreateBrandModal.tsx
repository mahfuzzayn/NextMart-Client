/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import { toast } from "sonner";
import { createBrand } from "@/services/Brand";

const CreateBrandModal = () => {
    const [imageFiles, setImageFiles] = useState<File[] | []>([]);
    const [imagePreview, setImagePreview] = useState<string[] | []>([]);

    const form = useForm();

    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const formData = new FormData();

            formData.append("data", JSON.stringify(data));
            formData.append("logo", imageFiles[0] as File);

            const res = await createBrand(formData);

            if (res?.success) {
                toast.success(res.message);
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
                <Button>Create Brand</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Product Brand</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex items-center justify-center">
                            {imagePreview.length > 0 ? (
                                <ImagePreviewer
                                    setImageFiles={setImageFiles}
                                    imagePreview={imagePreview}
                                    setImagePreview={setImagePreview}
                                    className="mt-8"
                                />
                            ) : (
                                <div className="mt-8">
                                    <NMImageUploader
                                        setImageFiles={setImageFiles}
                                        setImagePreview={setImagePreview}
                                        label="Upload Icon"
                                    />
                                </div>
                            )}
                        </div>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            {...field}
                                            value={field.value || ""}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full mt-5">
                            {isSubmitting ? "Creating..." : "Create"}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateBrandModal;
