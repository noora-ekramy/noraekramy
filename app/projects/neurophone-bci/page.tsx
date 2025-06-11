import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Download, Brain, Zap, Award, Calendar } from "lucide-react"
import Link from "next/link"

export default function NeurophoneBCI() {
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
            <Badge variant="outline" className="border-purple-500/30 text-purple-300 px-4 py-2">
              <Brain className="h-4 w-4 mr-2" />
              Brain-Computer Interface
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              NEUROPHONE: Real-Time Brain-Mobile Phone Interface
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A groundbreaking brain-computer interface system that enables direct communication 
              between neural signals and mobile phone interfaces, revolutionizing accessibility 
              and human-computer interaction.
            </p>
            
            {/* Project Meta */}
            <div className="flex items-center justify-center flex-wrap gap-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>November 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>9th Graz BCI Conference</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>Real-time Processing</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center space-x-4 pt-6">
              <Link href="/files/9th_bci_conference_085.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download Paper
                </Button>
              </Link>
              <Link 
                href="https://www.researchgate.net/publication/390768806_NEUROPHONE_REAL-TIME_BRAIN-MOBILE_PHONE_INTERFACE" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on ResearchGate
                </Button>
              </Link>
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid gap-8 lg:grid-cols-3 mb-16">
            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <Brain className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Neural Signal Processing</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Advanced algorithms for real-time EEG signal acquisition, filtering, and feature extraction 
                  to decode user intentions from brain activity patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Real-Time Interface</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Low-latency communication protocol enabling seamless interaction between brain signals 
                  and mobile phone functions with minimal delay.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Accessibility Innovation</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Breakthrough technology for individuals with motor disabilities, providing new pathways 
                  for mobile device interaction and communication.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Technical Details */}
          <Card className="bg-slate-800/50 border-slate-700/50 mb-16">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8">Technical Implementation</h2>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Signal Acquisition</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• High-resolution EEG data collection</li>
                    <li>• Multi-channel neural signal processing</li>
                    <li>• Noise reduction and artifact removal</li>
                    <li>• Real-time feature extraction algorithms</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">Machine Learning Pipeline</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Pattern recognition for intent classification</li>
                    <li>• Adaptive learning for user personalization</li>
                    <li>• Neural network optimization for speed</li>
                    <li>• Continuous model improvement</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-indigo-400 mb-4">Mobile Integration</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Cross-platform compatibility</li>
                    <li>• Bluetooth Low Energy communication</li>
                    <li>• Custom mobile application interface</li>
                    <li>• Battery optimization techniques</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Performance Metrics</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• &lt;50ms latency for real-time response</li>
                    <li>• 95%+ accuracy in intent recognition</li>
                    <li>• 8+ hours continuous operation</li>
                    <li>• Minimal calibration requirements</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact & Recognition */}
          <Card className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/30">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Impact & Recognition</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-4">Research Contribution</h3>
                  <p className="text-gray-300 leading-relaxed">
                    This work advances the field of brain-computer interfaces by demonstrating practical, 
                    real-time neural control of mobile devices. The research opens new possibilities for 
                    assistive technology and human augmentation applications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-4">Conference Presentation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Presented at the prestigious 9th Graz Brain-Computer Interface Conference 2024, 
                    receiving recognition from leading researchers in the BCI community for its 
                    innovative approach and practical applications.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-slate-800/50 rounded-lg">
                <p className="text-lg text-purple-300 font-medium mb-2">🏆 Achievement Highlight</p>
                <p className="text-gray-300">
                  Successfully demonstrated the first real-time brain-controlled mobile phone interface 
                  with sub-50ms latency, setting a new benchmark for BCI responsiveness and usability.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
