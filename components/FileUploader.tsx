/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { convertFileToUrl } from '@/lib/utils'
import Image from 'next/image'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

type FileUploaderProps ={
    files : File[] | undefined,
    onChange: (files : File[] )=> void
}

export const  FileUploader = ({files, onChange}: FileUploaderProps) =>  {
    const onDrop = useCallback((acceptedFiles : File[]) => {
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
    return (
      <div {...getRootProps()} className="file-upload">


        <input {...getInputProps()} />

        {
          files && files?.length > 0 ? (
            <Image src={convertFileToUrl(files[0])}
             alt="uploaded image"
             height={1000}
             width={1000} 
             className="max-h-[400px] overflow-hidden object-cover"
             />
          ) : 
          ( <>
            <Image  src="/assets/icons/upload.svg" 
            alt="uplaod"  
            height={40} 
            width={40}
            />
            <div className="file-uplaod_label" >
                <p className="text-14-regular">
                    <span className="text-green-500">Click to upload</span> or drag and drop
                </p>
                <p className="text-12-regular">
                    SVG, PNG, JPG or GIF (max 800x400)
                </p>
            </div>
          </>
          )
        }
       
      </div>
    )
  }
