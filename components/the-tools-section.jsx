'use client'

export default function TheToolsSection() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ width: '80%' }}>
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
           <h2 className="text-4xl font-normal text-gray-900 leading-snug">
          The Tools Behind <span className="text-orange-500 font-semibold">The Magic</span>
        </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontSize: '15px' }}
          >
            What sets us apart is our unique content system combined with intelligent, automated report generation.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Report Compile Card */}
          <div className="bg-white rounded-2xl p-8 lg:p-10">
           <h4 className="text-2xl mb-3 text-orange-500">
      <span className="font-normal text-gray-900">Report </span>
      <span className="font-bold">Compile </span>
    </h4>
            <p
              className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6"
              style={{ fontSize: '15px' }}
            >
              ClaimCore's Report Generator simplifies and speeds up the entire reporting process — helping adjusters create structured, professional reports in less time, with zero formatting stress.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span style={{ fontSize: '15px' }}>
                  Input from the field is automatically organized into sections that fit perfectly into customizable templates.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span style={{ fontSize: '15px' }}>
                  Generate polished PDF reports ready to be shared with clients, carriers, and other third-party systems.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span style={{ fontSize: '15px' }}>
                  Guided workflows reduce human error and cut reporting time by up to 50%.
                </span>
              </li>
            </ul>
          </div>

          {/* RT Image */}
          <div
            className="rounded-2xl p-8 lg:p-10 flex items-center justify-center"
            style={{ backgroundColor: '#fbfaf8', border: '5px solid white' }}
          >
            <div className="relative w-full max-w-md">
              <img
                src="/rt.png"
                alt="Report Template Interface"
                width={400}
                height={500}
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Capture Image */}
          <div
            className="rounded-2xl p-8 lg:p-10 flex items-center justify-center"
            style={{ backgroundColor: '#fbfaf8', border: '5px solid white' }}
          >
            <div className="relative w-full max-w-md">
              <img
                src="/capture.png"
                alt="Mobile Capture Interface"
                width={400}
                height={500}
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Claim Images & Attachments Card */}
          <div className="bg-white rounded-2xl p-8 lg:p-10">
            <h4 className="text-2xl mb-3 text-orange-500">
      <span className="font-normal text-gray-900">Claim Images & </span>
      <span className="font-bold">Attachments </span>
    </h4>
            <p
              className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6"
              style={{ fontSize: '15px' }}
            >
              ClaimCore's Report Generator simplifies and speeds up the entire reporting process — helping adjusters create structured, professional reports in less time, with zero formatting stress.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span style={{ fontSize: '15px' }}>
                  Capture, organize, and access all claim visuals and documents in one place.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span style={{ fontSize: '15px' }}>
                  Smart tagging and categorization — labelled and instantly attached to the right claim.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span style={{ fontSize: '15px' }}>
                  AI files — images, PDFs, notes — are securely synced and neatly categorized for quick review.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
