import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Bot, Workflow, Zap, Settings, Calendar, Star, Users } from "lucide-react"
import Link from "next/link"

export default function SmartAutomation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Nora Ekramy
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 md:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Project Header */}
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="border-indigo-500/30 text-indigo-300 px-4 py-2">
              <Bot className="h-4 w-4 mr-2" />
              AI Automation
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Smart LinkedIn Content Automation
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              An intelligent automation system that leverages AI to create, schedule, and optimize 
              LinkedIn content, driving engagement and building professional networks through 
              data-driven content strategies and automated workflows.
            </p>
            
            {/* Project Meta */}
            <div className="flex items-center justify-center flex-wrap gap-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Mar 2024 - May 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>5.0 Client Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Multi-User Platform</span>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-6 max-w-3xl mx-auto mt-8">
              <p className="text-indigo-300 font-medium mb-2">⭐ Client Feedback</p>
              <p className="text-gray-300 italic">
                "Highly competent and demonstrates clear expertise in her work!"
              </p>
              <p className="text-gray-400 text-sm mt-2">- Verified Upwork Client</p>
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid gap-8 lg:grid-cols-3 mb-16">
            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                    <Bot className="h-6 w-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">AI Content Generation</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Advanced AI algorithms that create engaging, personalized LinkedIn posts based on 
                  industry trends, user preferences, and audience engagement patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <Workflow className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Automated Workflows</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Intelligent scheduling and posting system with optimal timing analysis, 
                  audience targeting, and automated engagement tracking for maximum reach.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Performance Analytics</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Comprehensive analytics dashboard with engagement metrics, audience insights, 
                  and AI-powered recommendations for content optimization.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Technical Implementation */}
          <Card className="bg-slate-800/50 border-slate-700/50 mb-16">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8">System Architecture</h2>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-400 mb-4">AI Content Engine</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• GPT-4 integration for content generation</li>
                    <li>• Natural language processing for tone analysis</li>
                    <li>• Industry-specific content templates</li>
                    <li>• Personalization based on user profile</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Automation Pipeline</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• LinkedIn API integration for posting</li>
                    <li>• Intelligent scheduling algorithms</li>
                    <li>• Queue management and content approval</li>
                    <li>• Error handling and retry mechanisms</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">Analytics & Insights</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Real-time engagement tracking</li>
                    <li>• Audience behavior analysis</li>
                    <li>• Content performance metrics</li>
                    <li>• A/B testing for optimization</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Platform Features</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Multi-user dashboard interface</li>
                    <li>• Role-based access control</li>
                    <li>• Content calendar visualization</li>
                    <li>• Mobile-responsive design</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div className="grid gap-8 md:grid-cols-2 mb-16">
            <Card className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Smart Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-indigo-300">Intelligent Scheduling</h4>
                      <p className="text-gray-300 text-sm">AI-powered optimal posting times based on audience activity</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-purple-300">Content Personalization</h4>
                      <p className="text-gray-300 text-sm">Tailored content based on industry and professional goals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-blue-300">Engagement Automation</h4>
                      <p className="text-gray-300 text-sm">Automated responses and interaction management</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Business Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-purple-300">Time Efficiency</h4>
                      <p className="text-gray-300 text-sm">90% reduction in manual content creation time</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-blue-300">Increased Engagement</h4>
                      <p className="text-gray-300 text-sm">3x improvement in post engagement rates</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-cyan-300">Professional Growth</h4>
                      <p className="text-gray-300 text-sm">Enhanced personal branding and network expansion</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technology Stack */}
          <Card className="bg-slate-800/50 border-slate-700/50 mb-16">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8">Technology Stack</h2>
              
              <div className="grid gap-6 md:grid-cols-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-indigo-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Backend</h4>
                  <p className="text-gray-300 text-sm">Python, FastAPI, PostgreSQL</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Bot className="h-8 w-8 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">AI/ML</h4>
                  <p className="text-gray-300 text-sm">OpenAI GPT-4, Transformers</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Workflow className="h-8 w-8 text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Frontend</h4>
                  <p className="text-gray-300 text-sm">React, TypeScript, Tailwind</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Infrastructure</h4>
                  <p className="text-gray-300 text-sm">AWS, Docker, Redis</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Results */}
          <Card className="bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/30">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Project Impact</h2>
              <div className="grid gap-6 md:grid-cols-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-400 mb-2">90%</div>
                  <div className="text-gray-300">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">3x</div>
                  <div className="text-gray-300">Engagement Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">14 Months</div>
                  <div className="text-gray-300">Project Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">5.0⭐</div>
                  <div className="text-gray-300">Client Rating</div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-slate-800/50 rounded-lg">
                <p className="text-lg text-indigo-300 font-medium mb-2">🚀 Success Story</p>
                <p className="text-gray-300">
                  Transformed the client's LinkedIn presence with an intelligent automation system 
                  that not only saves time but significantly improves content quality and engagement. 
                  The platform now serves multiple users and continues to evolve with new AI capabilities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
