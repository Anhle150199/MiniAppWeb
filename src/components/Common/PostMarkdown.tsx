import React from 'react'

const PostMarkdown = ({ content }: { content: string }) => {
  return (
    <>
      <section className="bg-gray-1 pb-8  dark:bg-dark-2 lg:pb-[70px] lg:pt-[20px]">
        <div className="container">
          <hr />
          <div className="wow fadeInUp pt-2" data-wow-delay=".2s">
              <div className="flex flex-wrap items-start mb-10 blog-details">
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PostMarkdown