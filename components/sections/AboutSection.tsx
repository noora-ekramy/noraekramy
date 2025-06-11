import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Network, Database, Zap, Target } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-slate-900/50 to-purple-900/20 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-6 mb-20">
          <Badge variant="outline" className="w-fit mx-auto border-purple-500/30 text-purple-300 px-4 py-2">
            <Target className="w-4 h-4 mr-2" />
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Expertise & Specializations</h2>
          <p className="text-xl text-gray-300 max-w-[800px] mx-auto leading-relaxed">
            Combining theoretical knowledge with practical implementation to solve complex AI challenges.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Brain,
              title: "Machine Learning",
              desc: "Advanced ML algorithms, model optimization, and deployment strategies for scalable solutions.",
              color: "blue",
            },
            {
              icon: Network,
              title: "Deep Learning",
              desc: "Neural networks, computer vision, NLP, and transformer architectures for complex AI tasks.",
              color: "purple",
            },
            {
              icon: Database,
              title: "Data Science",
              desc: "Statistical analysis, data mining, and predictive modeling for data-driven insights.",
              color: "cyan",
            },
            {
              icon: Zap,
              title: "AI Research",
              desc: "Cutting-edge research in AI ethics, explainable AI, and novel algorithmic approaches.",
              color: "indigo",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700/50 text-center group hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
            >
              <CardHeader>
                <div
                  className={`mx-auto h-16 w-16 rounded-2xl bg-${item.color}-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className={`h-8 w-8 text-${item.color}-400`} />
                </div>
                <CardTitle className="text-white text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 