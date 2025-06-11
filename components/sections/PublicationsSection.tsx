import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, ExternalLink, Award, Download } from "lucide-react"
import Link from "next/link"

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-32 bg-gradient-to-br from-purple-900/20 to-slate-900/50 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-6 mb-20">
          <Badge variant="outline" className="w-fit mx-auto border-purple-500/30 text-purple-300 px-4 py-2">
            <BookOpen className="w-4 h-4 mr-2" />
            Publications
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Research & Publications</h2>
          <p className="text-xl text-gray-300 max-w-[800px] mx-auto leading-relaxed">
            Contributing to the advancement of AI through peer-reviewed research and publications.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {/* NEUROPHONE Paper */}
          <Card className="bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform">
                    <BookOpen className="h-8 w-8 text-purple-400" />
                  </div>
                <div className="flex-1">
                                      <h3 className="text-2xl font-semibold text-white mb-3 hover:text-purple-400 transition-colors">
                    NEUROPHONE: REAL-TIME BRAIN-MOBILE PHONE INTERFACE
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    A groundbreaking research on real-time brain-computer interface technology enabling direct communication 
                    between neural signals and mobile phone interfaces. This work explores innovative approaches to 
                    brain-mobile phone integration for enhanced accessibility and user interaction.
                  </p>
                  <div className="flex items-center flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <span>9th Graz Brain-Computer Interface Conference 2024</span>
                    <span>•</span>
                    <span>November 2024</span>
                    <span>•</span>
                    <span>Graz, Austria</span>
                    <span>•</span>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                      <Award className="w-3 h-3 mr-1" />
                      Conference Paper
                    </Badge>
                  </div>
                  <div className="text-xs text-gray-500 mb-4">
                    DOI: 10.3217/978-3-99161-014-4-085
                  </div>
                  <div className="flex items-center space-x-3">
                    <Link
                      href="/files/9th_bci_conference_085.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </Link>
                    <Link
                      href="https://www.researchgate.net/publication/390768806_NEUROPHONE_REAL-TIME_BRAIN-MOBILE_PHONE_INTERFACE"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-500/50 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View on ResearchGate
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Placeholder for future publications */}
          <div className="text-center py-12 border-2 border-dashed border-slate-700/50 rounded-xl">
            <BookOpen className="h-12 w-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">More Publications Coming Soon</h3>
            <p className="text-gray-500">
              Stay tuned for more research papers and publications in AI and Brain-Computer Interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 