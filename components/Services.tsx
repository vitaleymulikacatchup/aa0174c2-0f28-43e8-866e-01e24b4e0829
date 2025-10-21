import { Code, Smartphone, Headphones } from 'lucide-react'

export default function Services() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore our services
          </h2>
        </div>
        
        <div className="space-y-24">
          {/* Web Development */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3">
                <Code className="w-8 h-8 text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-900">Web Development</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Custom web applications built with modern technologies. From simple websites to complex enterprise solutions, we deliver scalable and performant web experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Node.js</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 shadow-lg">
                <div className="absolute inset-4 bg-white rounded-xl shadow-sm">
                  <div className="p-4 space-y-3">
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-3 bg-primary-200 rounded w-2/3"></div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="h-16 bg-gray-100 rounded"></div>
                      <div className="h-16 bg-primary-100 rounded"></div>
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-4 -left-3 w-4 h-4 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
          
          {/* Mobile Development */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <div className="inline-flex items-center space-x-3">
                <Smartphone className="w-8 h-8 text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-900">Mobile Development</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Native and cross-platform mobile applications that provide exceptional user experiences. We build apps that work seamlessly across iOS and Android platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-tag">React Native</span>
                <span className="tech-tag">Flutter</span>
                <span className="tech-tag">iOS</span>
                <span className="tech-tag">Android</span>
              </div>
            </div>
            <div className="lg:order-1 flex justify-center">
              <div className="relative">
                <div className="w-48 h-80 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="bg-primary-500 h-20 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="grid grid-cols-2 gap-2 mt-6">
                        <div className="h-12 bg-primary-100 rounded"></div>
                        <div className="h-12 bg-gray-100 rounded"></div>
                        <div className="h-12 bg-gray-100 rounded"></div>
                        <div className="h-12 bg-primary-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating notification */}
                <div className="absolute -top-4 -right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  New!
                </div>
              </div>
            </div>
          </div>
          
          {/* Support Section */}
          <div className="text-center py-16">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Headphones className="w-8 h-8 text-primary-600" />
              <h3 className="text-2xl font-bold text-gray-900">24/7 Support & Maintenance</h3>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get the same high-quality service for a smaller task. Our dedicated support team ensures your applications run smoothly with regular updates and maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}