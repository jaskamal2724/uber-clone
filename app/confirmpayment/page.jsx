"use client"
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [bounce, setBounce] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  
  useEffect(() => {
    // Start the bounce animation after component mounts
    setTimeout(() => setBounce(true), 100);
    
    // Create a repeating bounce effect when receipt is not shown
    const interval = setInterval(() => {
      if (!showReceipt) {
        setBounce(false);
        setTimeout(() => setBounce(true), 100);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [showReceipt]);

  const toggleReceipt = () => {
    setShowReceipt(!showReceipt);
  };

  const receiptData = {
    id: 'TRX-28971',
    date: 'April 24, 2025',
    time: '14:32',
    service: 'Standard Ride',
    from: '123 Main Street',
    to: '456 Oak Avenue',
    distance: '7.2 miles',
    duration: '18 mins',
    subtotal: '$18.75',
    tax: '$1.25',
    total: '$20.00',
    paymentMethod: 'Visa •••• 4242'
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <div 
        className={`bg-white rounded-xl shadow-2xl p-8 max-w-md w-full transform transition-all duration-700 ease-out 
          ${bounce && !showReceipt ? 'translate-y-0 scale-100' : 'translate-y-0 scale-100'}`}
      >
        {!showReceipt ? (
          <div className="flex flex-col items-center text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Payment Complete!</h2>
            
            {/* Message */}
            <p className="text-xl text-gray-600 mb-6">Enjoy your ride</p>
            
            {/* Divider */}
            <div className="w-full border-t border-gray-200 my-4"></div>
            
            {/* Additional Details */}
            <div className="w-full flex justify-between mb-6">
              <span className="text-gray-500">Transaction ID</span>
              <span className="font-medium text-gray-800">#{receiptData.id}</span>
            </div>
            
            {/* Button */}
            <button 
              onClick={toggleReceipt}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
            >
              View Receipt
            </button>
            
            {/* Help Text */}
            <p className="text-sm text-gray-500 mt-6">
              Need help? Contact our <span className="text-blue-600 cursor-pointer">support team</span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col">
            {/* Receipt Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Receipt</h2>
              <button 
                onClick={toggleReceipt}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            {/* Company Logo */}
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 text-blue-600 font-bold text-xl py-2 px-4 rounded-lg">
                RIDE CO.
              </div>
            </div>
            
            {/* Transaction Details */}
            <div className="border-t border-b border-gray-200 py-4 mb-4">
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Transaction ID:</span>
                <span className="font-medium">#{receiptData.id}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Date:</span>
                <span>{receiptData.date}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Time:</span>
                <span>{receiptData.time}</span>
              </div>
            </div>
            
            {/* Journey Details */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Journey Details</h3>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Service:</span>
                <span>{receiptData.service}</span>
              </div>
              <div className="flex flex-col py-1">
                <span className="text-gray-500">From:</span>
                <span className="text-right">{receiptData.from}</span>
              </div>
              <div className="flex flex-col py-1">
                <span className="text-gray-500">To:</span>
                <span className="text-right">{receiptData.to}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Distance:</span>
                <span>{receiptData.distance}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Duration:</span>
                <span>{receiptData.duration}</span>
              </div>
            </div>
            
            {/* Payment Details */}
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Subtotal:</span>
                <span>{receiptData.subtotal}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Tax:</span>
                <span>{receiptData.tax}</span>
              </div>
              <div className="flex justify-between py-1 font-bold text-lg">
                <span>Total:</span>
                <span>{receiptData.total}</span>
              </div>
              <div className="flex justify-between py-1 mt-2">
                <span className="text-gray-500">Payment Method:</span>
                <span>{receiptData.paymentMethod}</span>
              </div>
            </div>
            
            {/* Thank You Message */}
            <div className="text-center mb-4">
              <p className="text-gray-600">Thank you for riding with us!</p>
            </div>
            
            {/* Back Button */}
            <button 
              onClick={toggleReceipt}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
            >
              Back to Confirmation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;