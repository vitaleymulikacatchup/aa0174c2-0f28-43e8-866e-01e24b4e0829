'use client'

import { X } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Menu</h3>
              <div className="space-y-3">
                <a href="#case-studies" className="block text-gray-600 hover:text-gray-900">
                  Case Studies
                </a>
                <a href="#blog" className="block text-gray-600 hover:text-gray-900">
                  Blog
                </a>
                <a href="#contacts" className="block text-gray-600 hover:text-gray-900">
                  Contacts
                </a>
                <a href="#about" className="block text-gray-600 hover:text-gray-900">
                  About Us
                </a>
                <a href="#faq" className="block text-gray-600 hover:text-gray-900">
                  FAQ
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
              <div className="space-y-3">
                <a href="#web-development" className="block text-gray-600 hover:text-gray-900">
                  Web Development
                </a>
                <a href="#mobile-development" className="block text-gray-600 hover:text-gray-900">
                  Mobile Development
                </a>
                <a href="#support" className="block text-gray-600 hover:text-gray-900">
                  Support and Maintenance
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📧</span>
                </div>
                <span className="text-sm text-gray-600">Feel free to drop us a note:</span>
              </div>
              <a href="mailto:contact@sargas.io" className="text-blue-600 font-medium">
                contact@sargas.io
              </a>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          
          <div className="mt-6 pt-6 border-t flex justify-between text-sm text-gray-500">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  )
}