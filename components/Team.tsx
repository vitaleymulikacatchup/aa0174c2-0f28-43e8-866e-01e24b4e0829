export default function Team() {
  const teamMembers = [
    {
      name: 'Alex Thompson',
      role: 'Lead Developer',
      expertise: 'Full-stack Development',
      avatar: '/images/team-1.jpg'
    },
    {
      name: 'Maria Garcia',
      role: 'UI/UX Designer',
      expertise: 'Product Design',
      avatar: '/images/team-2.jpg'
    },
    {
      name: 'David Kim',
      role: 'Mobile Developer',
      expertise: 'React Native & Flutter',
      avatar: '/images/team-3.jpg'
    },
    {
      name: 'Sophie Wilson',
      role: 'Project Manager',
      expertise: 'Agile & Scrum',
      avatar: '/images/team-4.jpg'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sargas Team
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet the talented professionals behind our success. Our diverse team brings together expertise from various domains to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="relative mx-auto w-32 h-32">
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n.charAt(0)).join('')}
                  </span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}