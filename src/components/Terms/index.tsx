const Terms = () => {
  return (
    <section
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 mb-10 ">
              <div className="mb-10 lg:mb-0">
                <div className="markdown prose w-full break-words dark:prose-invert light">
                  <h2 className="mb-5 text-base font-bold leading-relaxed  ">Terms of Service for MiniToolHub</h2>
                  <p className="mb-10 text-base leading-relaxed  ">Welcome to MiniToolHub! By accessing and using our website, you agree to comply with and be bound by the following Terms of Service. Please review these terms carefully before using our site or any of the tools provided. If you do not agree with any part of these terms, you are prohibited from using this website.</p>

                  <h3 className="mb-2 text-base font-bold leading-relaxed">1. Use of Services</h3>
                  <p className=" text-base leading-relaxed  ">MiniToolHub provides free tools for public use. By accessing or using the tools on this website, you agree that you will not:</p>
                  <ul className="ps-3" style={{ listStyle: "inside" }}>
                    <li>Misuse the tools for illegal or harmful activities.</li>
                    <li>Attempt to gain unauthorized access to the website, server, or any related infrastructure.</li>
                    <li>Use automated systems (such as bots or scrapers) to access or collect data from the website.</li>
                    <li>Repurpose or redistribute the tools without explicit permission.</li>
                  </ul>
                  <p className="mb-10 text-base leading-relaxed  ">We reserve the right to terminate access to any user found in violation of these terms without prior notice.</p>

                  <h3 className="mb-2 text-base font-bold leading-relaxed">2. Intellectual Property</h3>
                  <p className="mb-10 text-base leading-relaxed  ">All content and tools on MiniToolHub, including but not limited to text, images, graphics, and software, are the intellectual property of MiniToolHub or its content providers and are protected by applicable copyright laws.
                    You may use the tools and content for personal, non-commercial purposes only. Unauthorized reproduction, modification, or distribution is strictly prohibited.</p>

                  <h3 className="mb-2 text-base font-bold leading-relaxed">3. Disclaimer of Warranties</h3>
                  <p className="mb-10 text-base leading-relaxed  ">{`The tools and content on MiniToolHub are provided "as is" and without warranties of any kind, either express or implied. We do not guarantee the accuracy, reliability, or suitability of any tool for a specific purpose.
                    Use of the website and its tools is at your own risk.`}</p>
                  <p className="mb-10 text-base leading-relaxed  ">MiniToolHub makes no warranties that the tools will be available at all times or free from errors, interruptions, or security vulnerabilities.</p>

                  <h3 className="mb-2 text-base font-bold leading-relaxed">4. Limitation of Liability</h3>
                  <p className="mb-10 text-base leading-relaxed  ">Under no circumstances shall MiniToolHub, its developers, or partners be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use or inability to use the website and its tools, even if we have
                    been advised of the possibility of such damages. This includes but is not limited to damages related to data loss, business interruption, or any other commercial damages.</p>

                  <h3 className="mb-2 text-base font-bold leading-relaxed">5. <strong>Third-Party Links</strong></h3>
                  <p className="mb-10 text-base leading-relaxed  ">MiniToolHub may contain links to third-party websites. We do not endorse, control, or assume responsibility for the content or practices of any third-party websites.
                    You access any third-party sites at your own risk and are subject to their respective terms and policies.</p>

                  <h3 className="mb-2 text-base font-bold leading-relaxed">6. Modifications to Terms</h3>
                  <p className="mb-10 text-base leading-relaxed  ">We reserve the right to modify these Terms of Service at any time without prior notice. Any changes will be posted on this page with the revised date.
                    Your continued use of the site after any modifications constitutes your acceptance of the updated terms.</p>

                  <h3 className="mb-2 text-base font-bold leading-relaxed">7. <strong>Governing Law</strong></h3>
                  <p className="mb-10 text-base leading-relaxed  ">These Terms of Service shall be governed by applicable laws. Any disputes arising out of or related to the use of MiniToolHub shall be resolved through appropriate legal channels.</p>

                  <h3 className="mb-2 text-base font-bold leading-relaxed">8. <strong>Contact Us</strong></h3>
                  <p className="mb-10 text-base leading-relaxed  ">If you have any questions regarding these Terms of Service, please contact us at {process.env.NEXT_PUBLIC_EMAIL}.</p>
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

export default Terms;
