import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 mb-52 ">
              <div className="mb-96 lg:mb-0">
                {/* <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Brilliant Toolkit to Build Next.js SaaS Websites.
                </h2> */}
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                {`Welcome to MiniToolHub, a platform offering a variety of free and easy-to-use tools for everyone. As a full-stack developer with expertise in both front-end and back-end development, I created this site not only to share useful utilities with the community but also as a way to continuously improve my programming skills. My goal is to make everyday tasks more convenient and accessible, and best of all, all the tools here are completely free to use.`}
                </p>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                {`If you have any ideas for a tool you'd like to see, feel free to share them with me—I’ll make it happen!`}                
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
