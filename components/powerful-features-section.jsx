'use client'

const features = [
  {
    icon: '/Icons/Custom-Camera.svg',
    title: 'Custom Camera',
    description: 'Tailored to your needs.',
  },
  {
    icon: '/Icons/Custom-Reports.svg',
    title: 'Custom Reports',
    description: 'Easy formatting.',
  },
  {
    icon: '/Icons/Scheduling.svg',
    title: 'Scheduling',
    description: 'Clear Communication.',
  },
  {
    icon: '/Icons/All-Digital.svg',
    title: 'All Digital',
    description: 'No paper to manage.',
  },
  {
    icon: '/Icons/Mobile-App.svg',
    title: 'Mobile App',
    description: 'All the power in your pocket.',
  },
  {
    icon: '/Icons/Permissions.svg',
    title: 'Permissions',
    description: 'Access for those who need it.',
  },
  {
    icon: '/Icons/Archive.svg',
    title: 'Archive',
    description: 'Everything is tracked for you.',
  },
  {
    icon: '/Icons/Customizable.svg',
    title: 'Customizable',
    description: 'Tweak accounts to your needs.',
  },
  {
    icon: '/Icons/Improving.svg',
    title: 'Improving',
    description: "We're always improving.",
  },
]

export default function PowerfulFeaturesSection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="w-[100%]">
        <div
          className="p-8 lg:p-12"
          style={{
            backgroundColor: "#1f0800",
            borderRadius: "40px",
          }}
        >
          {/* Heading */}
          <div className="mb-8 lg:mb-8">
            <h2 className="text-4xl font-normal text-gray-50 leading-snug">
              Powerful Features,{" "}
              <span className="text-orange-500 font-semibold">
                Built For Efficiency
              </span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl p-6 flex items-center space-x-4"
                style={{ backgroundColor: "#4b3a33" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#f0652e" }}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-400 text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
