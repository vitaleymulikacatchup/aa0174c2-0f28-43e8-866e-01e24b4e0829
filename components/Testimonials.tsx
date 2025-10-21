import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Sargas delivered an exceptional web application that exceeded our expectations. Their AI-powered approach and attention to detail made all the difference.',
      rating: 5,
      avatar: '/images/avatar-1.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateCorp',
      content: 'The mobile app they built for us has been a game-changer. The 12-week timeline was met perfectly, and the quality is outstanding.',
      rating: 5,
      avatar: '/images/avatar-2.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, GrowthLab',
      content: 'Working with Sargas was a pleasure. Their modern tech stack and professional approach resulted in a product that our users love.',
      rating: 5,
      avatar: '/images/avatar-3.jpg'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card space-y-6">
              <div className="flex items-center space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-gray-300 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}