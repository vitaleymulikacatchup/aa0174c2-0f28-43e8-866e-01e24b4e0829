import { Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">AI-powered</span>
                <br />
                <span className="text-gray-900">web and mobile</span>
                <br />
                <span className="text-gradient">in 12 weeks</span>
              </h1>
              
              <div className="flex items-center space-x-3">
                <span className="text-gray-600 font-medium">Powered by</span>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-300 rounded-full"></div>
                  </div>
                  <span className="font-bold text-gray-900">n8n</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Start Discovery
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Portfolio Showcase</span>
              </button>
            </div>
            
            {/* Tech Stack */}
            <div className="pt-8">
              <p className="text-gray-600 mb-4">We use only modern technologies</p>
              <div className="flex flex-wrap gap-3">
                <span className="tech-tag">
                  <span className="w-4 h-4 bg-blue-500 rounded"></span>
                  #react
                </span>
                <span className="tech-tag">
                  <span className="w-4 h-4 bg-green-500 rounded"></span>
                  #nodejs
                </span>
                <span className="tech-tag">
                  <span className="w-4 h-4 bg-purple-500 rounded"></span>
                  #nextjs
                </span>
                <span className="tech-tag">
                  <span className="w-4 h-4 bg-blue-600 rounded"></span>
                  #mysql
                </span>
                <span className="tech-tag">
                  <span className="w-4 h-4 bg-green-600 rounded"></span>
                  #mongodb
                </span>
                <span className="tech-tag">
                  <span className="w-4 h-4 bg-green-700 rounded"></span>
                  #nginx
                </span>
                <span className="tech-tag">
                  <span className="w-4 h-4 bg-red-600 rounded"></span>
                  #redis
                </span>
                <span className="tech-tag">
                  <span className="w-4 h-4 bg-blue-700 rounded"></span>
                  #typescript
                </span>
                <span className="tech-tag">
                  <span className="w-4 h-4 bg-yellow-500 rounded"></span>
                  #javascript
                </span>
              </div>
            </div>
          </div>
          
          {/* Right Content - 3D Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute inset-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute inset-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute inset-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full opacity-70"></div>
              
              {/* Central 3D-like element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-2xl rotate-12 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="absolute inset-2 bg-gradient-to-br from-white to-gray-100 rounded-xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}