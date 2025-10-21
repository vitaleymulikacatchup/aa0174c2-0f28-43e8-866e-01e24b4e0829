export default function Stats() {
  const stats = [
    { value: '92%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Projects Completed' },
    { value: '30k+', label: 'Lines of Code' },
    { value: '100%', label: 'On-Time Delivery' },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}