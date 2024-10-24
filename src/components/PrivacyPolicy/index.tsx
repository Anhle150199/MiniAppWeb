const PrivacyPolicy = () => {
  return (
    <section
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
                <p className="mb-10 text-base leading-relaxed  ">
                </p>
                <div className="markdown prose w-full break-words dark:prose-invert light">

                  <p className="mb-10 text-base leading-relaxed  "><strong>Privacy Policy for MiniToolHub</strong></p>
                  <p className="mb-10 text-base leading-relaxed  ">At MiniToolHub, we value your privacy and are committed to protecting any personal information that you may provide while using our services. This Privacy Policy outlines the types of information we collect and how we use, store, and protect it.</p>
                  <h3 className="mb-2 text-base font-bold leading-relaxed">1. <strong>Information We Collect</strong></h3>
                  <p className="mb-10 text-base leading-relaxed  ">We do not collect any personally identifiable information (PII) unless explicitly provided by you. The tools on MiniToolHub do not require you to create an account or submit personal details. However, some technical data, such as your IP address, browser type, and operating system, may be collected automatically by our hosting provider or through analytics services (like Google Analytics) to help improve the user experience.</p>
                  <h3 className="mb-2 text-base font-bold leading-relaxed">2. <strong>Use of Information</strong></h3>
                  <p className="text-base leading-relaxed  ">The information we collect is primarily used to:</p>
                  <ul className="ps-3" style={{listStyle: "inside"}}>
                    <li>Improve the functionality and performance of the website.</li>
                    <li>Analyze usage trends and optimize our tools and content.</li>
                    <li>Ensure the website’s security and prevent misuse.</li>
                  </ul>
                  <p className="mb-10 text-base leading-relaxed  ">We do not sell, trade, or otherwise transfer your personal information to outside parties unless required by law.</p>
                  <h3 className="mb-2 text-base font-bold leading-relaxed">3. <strong>Cookies</strong></h3>
                  <p className="mb-10 text-base leading-relaxed  ">MiniToolHub may use cookies, which are small text files stored on your device, to enhance your browsing experience. These cookies help remember preferences or analyze website traffic. You can control the use of cookies through your browser settings, but disabling cookies may affect the functionality of the site.</p>
                  <h3 className="mb-2 text-base font-bold leading-relaxed">4. <strong>Third-Party Links</strong></h3>
                  <p className="mb-10 text-base leading-relaxed  ">MiniToolHub may include links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We recommend reviewing the privacy policies of any third-party sites you visit through our platform.</p>
                  <h3 className="mb-2 text-base font-bold leading-relaxed">5. <strong>Data Security</strong></h3>
                  <p className="mb-10 text-base leading-relaxed  ">We implement reasonable security measures to protect the data we collect from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                  <h3 className="mb-2 text-base font-bold leading-relaxed">6. <strong>Changes to this Privacy Policy</strong></h3><p className="mb-10 text-base leading-relaxed  ">We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with the revised date at the top.</p>
                  <h3 className="mb-2 text-base font-bold leading-relaxed">7. <strong>Contact Us</strong></h3>
                  <p className="mb-10 text-base leading-relaxed  ">{`If you have any questions or concerns regarding this Privacy Policy, feel free to contact us at ${process.env.NEXT_PUBLIC_EMAIL}`}</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
