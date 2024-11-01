// app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center bg-gray-100">
      {/* Hero Section */}
      <section className="w-full bg-white text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Discover, Love, and{" "}
            <span className="text-blue-600">Rescue a Cat</span> with Us
          </h1>
          <p className="text-gray-500 mb-6">
            Find your new feline friend and give them a forever home.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            View Cats
          </button>
        </div>
        <div className="mt-10">
          <Image
            src="/path-to-hero-cat-image.png"
            alt="Cat"
            width={500}
            height={300}
          />
        </div>
      </section>

      {/* Partner Organizations Section */}
      <section className="py-10 flex justify-center gap-10 bg-white border-t border-b border-gray-200">
        {/* Repeat logo images of partner organizations */}
        <Image
          src="/path-to-logo1.png"
          alt="Partner 1"
          width={60}
          height={30}
        />
        <Image
          src="/path-to-logo2.png"
          alt="Partner 2"
          width={60}
          height={30}
        />
        {/* Add other logos */}
      </section>

      {/* Adoption Steps Section */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-8">
          Adopt a Cat in 3 Easy Steps
        </h2>
        <div className="flex justify-around max-w-4xl mx-auto">
          <div>
            <Image
              src="/path-to-icon1.png"
              alt="Find a Cat"
              width={50}
              height={50}
            />
            <h3 className="font-bold mt-4">Find a Cat</h3>
            <p>Explore our database to find the perfect cat for you.</p>
          </div>
          <div>
            <Image
              src="/path-to-icon2.png"
              alt="Apply for Adoption"
              width={50}
              height={50}
            />
            <h3 className="font-bold mt-4">Apply for Adoption</h3>
            <p>Submit your application and our team will reach out.</p>
          </div>
          <div>
            <Image
              src="/path-to-icon3.png"
              alt="Bring Home"
              width={50}
              height={50}
            />
            <h3 className="font-bold mt-4">Bring Them Home</h3>
            <p>Complete the process and welcome your new friend!</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto flex flex-wrap gap-6">
        <div className="w-full md:w-1/2">
          <Image
            src="/path-to-cat-group-image.png"
            alt="Group of Cats"
            width={400}
            height={300}
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-6">Why Adopt from Us</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to help cats find loving homes.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <Image
                src="/path-to-icon1.png"
                alt="Experienced Team"
                width={30}
                height={30}
              />
              <div>
                <h3 className="font-bold">Experienced Team</h3>
                <p>
                  Our team is passionate and knowledgeable about cat welfare.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Image
                src="/path-to-icon2.png"
                alt="Safe Adoption"
                width={30}
                height={30}
              />
              <div>
                <h3 className="font-bold">Safe & Secure Adoption</h3>
                <p>
                  We ensure each adoption is safe and in the best interest of
                  the cat.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Image
                src="/path-to-icon3.png"
                alt="24/7 Support"
                width={30}
                height={30}
              />
              <div>
                <h3 className="font-bold">24/7 Support</h3>
                <p>
                  We’re here for you if you have any questions post-adoption.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-8">
          Happy Tails from Our Community
        </h2>
        <div className="flex justify-center gap-10">
          {/* Repeat for each testimonial */}
          <div className="w-80 p-4 bg-gray-100 rounded-lg shadow-md">
            <p>
              &quot;Adopting from here was the best decision. My cat is my best
              friend!&quot;
            </p>
            <p className="mt-4 font-bold">Jane Doe</p>
            <p className="text-sm text-gray-500">Proud Cat Mom</p>
          </div>
        </div>
      </section>

      {/* Featured Cats Section */}
      <section className="py-16 px-4 text-center bg-gray-50">
        <h2 className="text-2xl font-semibold mb-8">
          Meet Our Cats Ready for Adoption
        </h2>
        <div className="flex justify-around flex-wrap max-w-5xl mx-auto gap-6">
          {/* Repeat for each cat */}
          <div className="w-64 p-4 bg-white rounded-lg shadow-md">
            <Image
              src="/path-to-cat-image1.png"
              alt="Cat"
              width={150}
              height={80}
            />
            <h3 className="mt-4 font-bold">Whiskers</h3>
            <p className="text-gray-500">2 years old • Friendly & Playful</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Adopt
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-8">
        <div className="max-w-5xl mx-auto px-4 flex justify-between">
          <div>
            <h3 className="font-bold">Cat Rescue</h3>
            <p>Subscribe to our newsletter</p>
            <input
              type="email"
              placeholder="Email address"
              className="mt-2 p-2 rounded bg-gray-700"
            />
          </div>
          <div>
            <p>Quick Links</p>
            {/* Add footer links */}
          </div>
        </div>
      </footer>
    </main>
  );
}
