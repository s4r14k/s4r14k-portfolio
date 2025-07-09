'use client';

import Header from '@/components/Header';
import Content from '@/components/Content';

export default function PrivacyPolicy() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <Content>
        <div className="max-w-4xl mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">
              This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website.
              We are committed to ensuring the privacy and security of your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal information such as name and email address when you contact us</li>
              <li>Usage data including IP address, browser type, and pages visited</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the collected information for various purposes including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Providing and maintaining our website</li>
              <li>Responding to your inquiries and requests</li>
              <li>Improving our website and user experience</li>
              <li>Analyzing usage patterns and trends</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites or services that are not owned or controlled by us.
              We have no control over and assume no responsibility for the content, privacy policies, or practices of
              any third-party websites or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us.
            </p>
          </section>
        </div>
      </Content>
    </>
  );
}