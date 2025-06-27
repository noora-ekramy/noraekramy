import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function ClientReviewsSection() {
  const reviews = [
    {
      title: "Build an ML price prediction model",
      rating: "5.0",
      date: "Aug 1, 2024 - Jan 18, 2025",
      review: "Great work and great person very happy to work with her always."
    },
    {
      title: "Python Developer for LinkedIn Content Automation",
      rating: "5.0",
      date: "Mar 4, 2024 - May 4, 2025",
      review: "Highly competent and demonstrates clear expertise in her work!" 
    },
    {
      title: "AI / Machine learning and IoT task",
      rating: "5.0",
      date: "Jan 9, 2024 - May 4, 2025",
      review: "Exceptional and clearly knows what she's doing!"
    },
    {
      title: "Transformation of points and mapping coordinates - Python",
      rating: "5.0",
      date: "Nov 19, 2024 - Dec 18, 2024",
      review: "There's no question about it — truly a master at delivering exceptional work!"
    },
    {
      title: "Founder",
      rating: "5.0",
      date: "Feb 29, 2024 - Jul 25, 2024",
      review: "An outstanding AI engineer with exceptional technical skills and a deep understanding of AI and machine learning. Consistently delivers high-quality work, solving complex problems with efficiency and creativity. A great team player with excellent communication skills, always willing to share knowledge and mentor others."
    },
    {
      title: "Machine Learning Expert for Educational Project",
      rating: "5.0",
      date: "Feb 14, 2024 - Feb 16, 2024",
      review: "Working with her was an absolute delight! She delivered exceptional results with professionalism and expertise. Highly recommended!"
    },
    {
      title: "Random forest classification, CV and Neural network classification",
      rating: "5.0",
      date: "Nov 24, 2023 - Dec 15, 2023",
      review: "Throughout the project, brilliantly supported and helpful based on the requirements clarification and changes in the code. Would recommend without a doubt for any projects."
    },
    {
      title: "Gestures recognition",
      rating: "5.0",
      date: "Dec 6, 2023 - Dec 11, 2023",
      review: "Demonstrated remarkable competence by successfully completing the task assigned. Proficiency, diligence, and commitment to delivering high-quality results."
    },
    {
      title: "Ridge Regression in Numpy and multi-class Classification",
      rating: "5.0",
      date: "Oct 30, 2023 - Oct 30, 2023",
      review: "The work completed was complex, but it was finished within an hour because of expertise in AI/ML."
    }
  ]

  return (
    <section id="reviews" className="py-20 md:py-32 bg-gradient-to-br from-indigo-900/20 to-purple-900/30 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-4 md:space-y-6 mb-16 md:mb-20 max-w-4xl mx-auto">
          <Badge variant="outline" className="w-fit mx-auto border-yellow-500/30 text-yellow-300 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
            <Star className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
            Client Reviews
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">What Clients Say</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-[800px] mx-auto leading-relaxed">
            Real feedback from real clients who trusted me with their AI projects. 
            Every project delivered with 5-star quality and passion!
          </p>

          {/* Stats Summary */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8 pt-4 md:pt-6">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-bold text-yellow-400">5.0</p>
              <p className="text-xs md:text-sm text-gray-400">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-blue-400">30+</p>
              <p className="text-xs md:text-sm text-gray-400">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-indigo-400">100%</p>
              <p className="text-xs md:text-sm text-gray-400">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto justify-items-center">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="w-full bg-slate-800/50 border-slate-700/50 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group"
            >
              <CardContent className="p-5 md:p-6">
                <div className="space-y-3 md:space-y-4">
                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-yellow-400 font-semibold ml-2 text-sm md:text-base">{review.rating}</span>
                    </div>
                    <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 text-xs">
                      Top Rated
                    </Badge>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors line-clamp-2">
                    {review.title}
                  </h3>

                  {/* Date */}
                  <div className="flex items-center text-xs md:text-sm text-gray-400">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                    {review.date}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-gray-300 leading-relaxed text-sm italic border-l-2 border-yellow-500/30 pl-3 md:pl-4">
                    "{review.review}"
                  </blockquote>

                  {/* Client Badge */}
                  <div className="flex items-center text-xs text-gray-400">
                    <User className="w-3 h-3 mr-1" />
                    Verified Upwork Client
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA to Upwork Profile */}
        <div className="text-center mt-12 md:mt-16">
          <Link 
            href="https://www.upwork.com/freelancers/~018ce771972a601739" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center justify-center">
                View Full Upwork Profile
                <ExternalLink className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </span>
            </Button>
          </Link>
          <p className="text-gray-400 text-sm mt-4">
            See all my projects and client feedback on Upwork
          </p>
        </div>
      </div>
    </section>
  )
} 