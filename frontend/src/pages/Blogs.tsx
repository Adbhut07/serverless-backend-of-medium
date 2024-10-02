import { BlogCard } from '../components/BlogCard'
import { AppBar } from '../components/AppBar'
import { useBlogs } from '../hooks'

function Blogs() {
  const {loading, blogs} = useBlogs();

  if (loading || !blogs) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-1/3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
            <div className="h-48 bg-gray-300"></div>
            <div className="px-6 py-4">
              <div className="h-6 bg-gray-300 mb-2"></div>
              <div className="h-4 bg-gray-300 w-2/3"></div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-300 w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
        <AppBar />
    <div className='flex justify-center'>
        <div>
          {blogs.map(blog => <BlogCard id={blog.id} authorName={blog.author.name || "Adbhut Satsangi"} title={blog.title} content={blog.content} publishedDate={'2nd Feb 2024'}/>)}
            
        </div>
    </div>-
    </div>
  )
}

export default Blogs