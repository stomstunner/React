import React from 'react'
// importing the editior from the tinymce / tinymvcereact

import {Editor} from '@tinymce/tinymce-react'


export default function RTE() {
  return (
    <Editor
        // we have to write some property along with it 
        initialValue='default value'
        init={
            {branding: false,
                height: 500,
                menubar: true,
                // we can write the plugings that we want to give 
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | bold italic backcolor | \ alignleft aligncenter alignright alignjustify | \ bullist numlist outdent indent | removeformat | help '
            }
        }
    />
  )
}

 