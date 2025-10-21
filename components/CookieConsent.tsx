'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleDeny = () => {
    localStorage.setItem('cookie-consent', 'denied')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-semibold text-gray-900 text-lg">This site uses cookies</h3>
          <button 
            onClick={handleDeny}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          We and selected third parties use cookies (or similar technologies) for technical purposes, to enhance and analyze site usage, to support our marketing efforts, and for other purposes described below.
        </p>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          By clicking "Accept all", you agree to the storing of cookies on your device for these purposes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={handleDeny}
            className="btn-outline flex-1"
          >
            Deny
          </button>
          <button 
            onClick={handleAccept}
            className="btn-secondary flex-1"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}