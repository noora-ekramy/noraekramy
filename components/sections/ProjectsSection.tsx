import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Code, Github, ExternalLink, TrendingUp, Bot, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-6 mb-20">
          <Badge variant="outline" className="w-fit mx-auto border-blue-500/30 text-blue-300 px-4 py-2">
            <Code className="w-4 h-4 mr-2" />
            Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Featured AI Projects</h2>
          <p className="text-xl text-gray-300 max-w-[800px] mx-auto leading-relaxed">
            Innovative AI solutions that demonstrate technical expertise and real-world impact.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* NEUROPHONE BCI Project */}
          <Link href="/projects/neurophone-bci">
            <Card className="bg-slate-800/50 border-slate-700/50 group hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden">
              <CardHeader>
                <div className="w-full h-56 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <Brain className="h-16 w-16 text-purple-400 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardTitle className="text-white text-xl group-hover:text-purple-400 transition-colors">
                  NEUROPHONE: Brain-Mobile Interface
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">
                  Groundbreaking brain-computer interface enabling real-time neural control of mobile devices with sub-50ms latency.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors"
                  >
                    EEG Processing
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors"
                  >
                    Real-time ML
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors"
                  >
                    BCI Research
                  </Badge>
                </div>
                <div className="flex justify-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 w-full justify-center"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* AI Price Predictor Project */}
          <Link href="/projects/ai-price-predictor">
            <Card className="bg-slate-800/50 border-slate-700/50 group hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden">
              <CardHeader>
                <div className="w-full h-56 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp className="h-16 w-16 text-blue-400 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">
                  AI-Powered Price Prediction System
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">
                  Advanced ML system achieving 95%+ accuracy in market price predictions using ensemble methods and real-time data processing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors"
                  >
                    Machine Learning
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors"
                  >
                    Time Series
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors"
                  >
                    Ensemble Models
                  </Badge>
                </div>
                <div className="flex justify-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 w-full justify-center"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Smart Automation Project */}
          <Link href="/projects/smart-automation">
            <Card className="bg-slate-800/50 border-slate-700/50 group hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden">
              <CardHeader>
                <div className="w-full h-56 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <Bot className="h-16 w-16 text-indigo-400 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardTitle className="text-white text-xl group-hover:text-indigo-400 transition-colors">
                  Smart LinkedIn Content Automation
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">
                  Intelligent automation system leveraging AI for content creation, scheduling, and optimization with 90% time savings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="secondary"
                    className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors"
                  >
                    AI Automation
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors"
                  >
                    NLP
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors"
                  >
                    Content AI
                  </Badge>
                </div>
                <div className="flex justify-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 w-full justify-center"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
} 