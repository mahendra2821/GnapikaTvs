import React from "react";

const blogs = [
  {
    id: 1,
    title: "Why Regular Bike Servicing is Essential?",
    excerpt: "Keeping your TVS two-wheeler in top condition ensures better performance, safety, and longevity. Learn why routine maintenance is a must!",
    image: "/assets/WhyServiceingEssentials.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "How Gnapika TVS Ensures Top-Quality Repairs?",
    excerpt: "From skilled technicians to genuine spare parts, discover how we maintain the highest standards in two-wheeler servicing.",
    image: "/assets/GnapikaTVSTopQualityRepairs.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "7-Day Service Support: Convenience at Its Best",
    excerpt: "Our TVS Service Center operates 7 days a week, ensuring you get the service you need, when you need it!",
    image: "/assets/Tvs7daysService.jpg",
    link: "#",
  },
  {
    id: 1,
    title: "Why Regular Bike Servicing is Essential?",
    excerpt: "Keeping your TVS two-wheeler in top condition ensures better performance, safety, and longevity. Learn why routine maintenance is a must!",
    image: "/assets/WhyServiceingEssentials.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "How Gnapika TVS Ensures Top-Quality Repairs?",
    excerpt: "From skilled technicians to genuine spare parts, discover how we maintain the highest standards in two-wheeler servicing.",
    image: "/assets/GnapikaTVSTopQualityRepairs.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "7-Day Service Support: Convenience at Its Best",
    excerpt: "Our TVS Service Center operates 7 days a week, ensuring you get the service you need, when you need it!",
    image: "/assets/Tvs7daysService.jpg",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-700">Latest from Our Blog</h2>
        <p className="text-gray-600 mt-2">Stay updated with tips, insights, and service updates.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.excerpt}</p>
              <a
                href={blog.link}
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-bold"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
