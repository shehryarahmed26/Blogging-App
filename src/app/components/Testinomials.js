import React from 'react'

const Testinomials = () => {
  return (
    <section className="py-8">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Testimonials</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "John Doe", text: "Amazing quality products!" },
              { name: "Jane Smith", text: "Quick delivery, loved it!" },
              { name: "Alex Lee", text: "Best shopping experience ever!" },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg"
              >
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <h3 className="mt-4 text-lg font-medium text-gray-800">
                  - {testimonial.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Testinomials