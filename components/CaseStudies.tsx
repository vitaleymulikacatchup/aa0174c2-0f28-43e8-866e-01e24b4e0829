export default function CaseStudies() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
        </div>
        
        {/* Featured Case Study */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 text-white space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Dios</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  A comprehensive digital platform that revolutionized how businesses manage their operations. Built with cutting-edge technology and designed for scalability.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold">$2,500</div>
                  <div className="text-blue-200">Starting Price</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-blue-200">Weeks Timeline</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">MongoDB</span>
                <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">AWS</span>
              </div>
            </div>
            
            <div className="bg-white p-8 lg:p-12 flex items-center justify-center">
              <div className="w-full max-w-sm">
                <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-4 bg-primary-200 rounded w-1/4"></div>
                    </div>
                    <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="h-8 bg-blue-500 rounded flex-1"></div>
                      <div className="h-8 bg-gray-200 rounded w-16"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}