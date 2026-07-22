import React from 'react'
// importing the editior from the tinymce / tinymvcereact

import {Editor} from '@tinymce/tinymce-react'
// lets import the controller from react hook form 
import {Controller} from 'react-hook-form'




export default function RTE({name, control, label, defaultValue = ""}) {
    // now we write the name, control lable in the parameter in destruct way jo ki hamre control ko form me pass karega 
  return (

    <div className='w-full'>

        {label && <label className='inline-block mb-1 pl-1'>
                {label}
            </label>
        }

        {/* now we take the self cloasing controller jo ki yaha se sari chize pass karega kahi aur */}
        {/* isme jo hamra control hai woh aaya hai parent se jo ki ham as it is control me pass kar denge */}
        <Controller
            name = {name || 'content'}
            control = {control}
            // so ab ham ky kya render karwana chahate hai woh likhenge .. aur un sabhi ko hi ham field bol denge aur we can write ki field pe kon sa action hone pe ham render karwana chate hai aur call banck ke ander body me ham likhnge ki kya ham render karwana chahte hai 
            render = {( {field : {onChange}})=> (
                <Editor
                    // we have to write some property along with it 
                    initialValue={defaultValue}
                    init={
                        {   
                            initialValue:defaultValue, 
                            branding: false,
                            height: 500,
                            menubar: true,
                            // we can write the plugings that we want to give 
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | blocks| image | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help ',
                            content_style: 'body { font-family:Helvetica, Arial, sans-serif; font-size: 14px}'

                        }
                    }
                    onEditorChange= {onChange}
                />
            )}

        />

    </div>
  )
}

 