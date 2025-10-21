import { Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How can we help? Let's talk
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Get in touch with us and let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a 
              href="mailto:contact@sargas.io" 
              className="flex items-center space-x-3 bg-primary-600 hover:bg-primary-700 px-8 py-4 rounded-lg font-medium transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>contact@sargas.io</span>
            </a>
            
            <a 
              href="#" 
              className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-medium transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
          
          <div className="pt-12">
            <div className="inline-flex items-center space-x-4 bg-white bg-opacity-10 px-6 py-3 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">📧</span>
              </div>
              <span className="text-gray-300">Feel free to drop us a note:</span>
              <span className="text-white font-medium">contact@sargas.io</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}