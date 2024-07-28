"use client"

import Image from "next/image";
import { ChangeEvent, useState } from "react"
import ReactCrop, { Crop, makeAspectCrop } from "react-image-crop";
// import 'react-image-crop/src/ReactCrop.scss'


export default function Page() {

    const [image, setImage] = useState<string>('');
    const [crop, setCrop] = useState<Crop>({
        unit: '%',
        x: 25,
        y: 25,
        width: 50,
        height: 50,
    });

    const fileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || ''
        if (!file) return console.log('file not found')

        const reader = new FileReader()
        reader.addEventListener('load', () => {
            const imageUrl = reader.result?.toString() as string || ""
            console.log('file loaded', imageUrl)
            setImage(imageUrl)
        })

        reader.readAsDataURL(file)
    }
    const min_width = 150
    const aspectRatio = 1

    const OnImageLoad = (e: HTMLImageElement) => {
        const { width, height } = e
        const crop = makeAspectCrop(
            {
                unit: 'px',
                width: min_width
            },
            aspectRatio,
            width,
            height
        )
        setCrop(crop)
    }

    return (
        <div className=" container mx-auto py-10">
            <input onChange={fileUpload} type="file" className=" text-sm font-medium file:rounded-full file:px-3 file:py-1 file:bg-sky-700 file:cursor-pointer file:text-white file:border-none file:mr-3" />


            {/* show image and cropper */}
            {
                image &&
                <ReactCrop
                    crop={crop}
                    circularCrop
                    keepSelection
                    aspect={1}
                    minWidth={150}
                    onChange={(c) => setCrop(c)}
                >
                    <img src={image} className=" max-h-[100vh] my-3 w-full" alt=""
                    />
                    onl
                </ReactCrop>
            }
        </div>
    )
}
