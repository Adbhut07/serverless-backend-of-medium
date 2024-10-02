import axios from "axios";
import { AppBar } from "../components/AppBar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = ()=> {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>
      <AppBar />
      <div className="flex justify-center w-full pt-8">
        <div className="max-w-screen-lg w-full">
          <input
          onChange={(e) => {
            setTitle(e.target.value)
          }}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Title"
          />
          <TextEditor onChange={(e)=> {
            setDescription(e.target.value)
          }} />
          <button
            onClick={async () => {
              const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content: description
              },{
                headers: {
                  Authorization: localStorage.getItem("token")
                }
              });
              navigate(`/blog/${response.data.id}`)
            }}
            type="submit"
            className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
    
}

function TextEditor({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
  return <div className="mt-2">
     <div className="w-full mb-4">
     <div className="flex items-center justify-between border">
         <div className="my-2 bg-white rounded-b-lg w-full">
             <label className="sr-only">Publish post</label>
             <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none block pl-2 w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0" placeholder="Write an article..." required ></textarea>
         </div>   
     </div>
     
     </div>
  </div>
  
}