import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
  content: string;
  title: string;
  id: number;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/getblog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
           .then(response => {
            console.log(response.data);
            setBlog(response.data.blog);
            setLoading(false);
           })
    }, []);

    return {
        loading,
        blog
    }
}

export const useBlogs = () =>{
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
           .then(response => {
            setBlogs(response.data.blogs);
            setLoading(false);
           })
    }, []);

    return {
        loading,
        blogs
    }
}