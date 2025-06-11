import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, Users, ArrowRight, TrendingUp, MessageCircle, Sparkles } from "lucide-react"
import Link from "next/link"

export default function BlogSection() {
  return (
    <section id="blog" className="py-32 bg-gradient-to-br from-slate-900/50 to-blue-900/20 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-6 mb-20 max-w-4xl mx-auto">
          <Badge variant="outline" className="w-fit mx-auto border-cyan-500/30 text-cyan-300 px-4 py-2">
            <BookOpen className="w-4 h-4 mr-2" />
            Blog
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Latest Insights</h2>
          <p className="text-xl text-gray-300 max-w-[800px] mx-auto leading-relaxed">
            Sharing knowledge, insights, and thoughts on the latest developments in AI and machine learning.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto justify-items-center">
          {/* AI Trends 2024 */}
          <Link href="/blog/ai-trends-2024">
            <Card className="bg-slate-800/50 border-slate-700/50 group hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden">
              <CardHeader>
                <div className="w-full h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 xl:h-20 xl:w-20 text-purple-400 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>Dec 15, 2024</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>8 min read</span>
                  </div>
                </div>
                <CardTitle className="text-white group-hover:text-purple-400 transition-colors text-xl">
                  The AI Revolution: Top Trends Shaping 2024
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">
                  From multimodal AI to edge computing, explore the groundbreaking trends that are transforming the artificial intelligence landscape this year.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 w-full justify-center"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Building Chatbots */}
          <Link href="/blog/building-chatbots">
            <Card className="bg-slate-800/50 border-slate-700/50 group hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden">
              <CardHeader>
                <div className="w-full h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <MessageCircle className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 xl:h-20 xl:w-20 text-blue-400 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>Nov 28, 2024</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>12 min read</span>
                  </div>
                </div>
                <CardTitle className="text-white group-hover:text-blue-400 transition-colors text-xl">
                  Building Intelligent Chatbots: From Concept to Conversation
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">
                  A comprehensive guide to creating chatbots that actually understand and engage users, based on real-world experience building conversational AI systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 w-full justify-center"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Future of AI */}
          <Link href="/blog/future-of-ai">
            <Card className="bg-slate-800/50 border-slate-700/50 group hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden">
              <CardHeader>
                <div className="w-full h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 xl:h-20 xl:w-20 text-indigo-400 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>Jan 5, 2025</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>15 min read</span>
                  </div>
                </div>
                <CardTitle className="text-white group-hover:text-indigo-400 transition-colors text-xl">
                  The Future of AI: Beyond the Hype, Into Reality
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">
                  Looking beyond today's headlines to explore where artificial intelligence is truly heading and what it means for humanity's next chapter.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 w-full justify-center"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
} 