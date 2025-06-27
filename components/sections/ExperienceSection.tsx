import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Cloud, Zap, BookOpen, Cpu, Database, Sparkles } from "lucide-react"

export default function ExperienceSection() {
  const expertiseAreas = [
    {
      icon: Brain,
      title: "Language Models & NLP",
      company: "Building the Future of Communication",
      period: "Always Exploring",
      description: "I'm fascinated by how machines can understand and generate human language! From fine-tuning transformers to building chatbots that actually make sense, I love diving deep into the world of LLMs and making AI conversations feel natural.",
      skills: ["Transformers", "Fine-tuning", "Prompt Engineering", "NLP"],
      color: "from-purple-500/20 to-indigo-500/20",
      iconColor: "text-purple-400"
    },
    {
      icon: Cpu,
      title: "Machine Learning & Deep Learning",
      company: "Where Math Meets Magic",
      period: "Core Passion",
      description: "There's something magical about training a model and watching it learn patterns! I love experimenting with different architectures, optimizing performance, and turning complex data into intelligent solutions that actually work in the real world.",
      skills: ["PyTorch", "TensorFlow", "Model Optimization", "Neural Networks"],
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    },
    {
      icon: Sparkles,
      title: "Generative AI & Creative Tech",
      company: "Making AI Create Amazing Things",
      period: "Current Obsession",
      description: "Generative AI blows my mind every day! From creating art to generating code, I'm constantly amazed by what's possible. I love building applications that help people be more creative and productive with AI as their co-pilot.",
      skills: ["Stable Diffusion", "GPT Integration", "Creative AI", "Multimodal"],
      color: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-400"
    },
    {
      icon: Cloud,
      title: "Cloud & AI Deployment",
      company: "Bringing AI to the Real World",
      period: "Making It Happen",
      description: "Building cool AI models is one thing, but getting them to work reliably for real users? That's where the fun begins! I love the challenge of scaling AI solutions and making them fast, reliable, and accessible to everyone.",
      skills: ["AWS", "Docker", "MLOps", "API Development"],
      color: "from-indigo-500/20 to-cyan-500/20",
      iconColor: "text-indigo-400"
    },
    {
      icon: BookOpen,
      title: "AI Research & Innovation",
      company: "Always Learning, Always Growing",
      period: "Never Stops",
      description: "The AI field moves so fast, and I absolutely love it! I'm always reading papers, trying new techniques, and pushing boundaries. Every day brings new discoveries, and I'm here for all of it with endless curiosity.",
      skills: ["Research Papers", "Experimentation", "Innovation", "Problem Solving"],
      color: "from-orange-500/20 to-amber-500/20",
      iconColor: "text-orange-400"
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      company: "Finding Stories in Numbers",
      period: "Foundation Skills",
      description: "Before the AI magic happens, there's data to understand! I love exploring datasets, finding hidden patterns, and turning messy data into clean insights. It's like being a detective, but with Python and pandas!",
      skills: ["Data Analysis", "Visualization", "Statistics", "Feature Engineering"],
      color: "from-teal-500/20 to-cyan-500/20",
      iconColor: "text-teal-400"
    }
  ]

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-4 md:space-y-6 mb-16 md:mb-20 max-w-4xl mx-auto">
          <Badge variant="outline" className="w-fit mx-auto border-orange-500/30 text-orange-300 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
            <Zap className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
            My AI Journey
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">Skills & Expertise</h2>
          
          {/* Professional Summary */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-6 md:p-8 border border-slate-600/30 backdrop-blur-sm">
            <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-3 md:mb-4">
              An accomplished AI engineer and co-founder at <span className="text-orange-400 font-semibold">Youtive</span>, specializing in language models, machine learning, deep learning, and generative AI. With more than <span className="text-blue-400 font-semibold">30 satisfied clients</span> and a <span className="text-yellow-400 font-semibold">5-star rating</span> on every project, consistently delivers high-quality AI solutions that blend research and practical implementation.
            </p>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              Brings expertise in cloud technologies and deployment, ensuring scalable and reliable systems. Driven by curiosity and a passion for continuous learning, dedicated to transforming complex challenges into impactful AI solutions that inspire progress in the field.
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-[800px] mx-auto leading-relaxed pt-4 md:pt-6">
            Here's what gets me excited every day! From language models to cloud deployment, 
            I love exploring every corner of the AI universe with curiosity and passion.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-7xl mx-auto justify-items-center">
          {expertiseAreas.map((area, index) => (
            <Card
              key={index}
              className="w-full bg-slate-800/50 border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer group"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start space-x-4 md:space-x-6">
                  <div className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${area.color} rounded-xl md:rounded-2xl flex items-center justify-center hover:scale-110 transition-transform group-hover:rotate-3`}>
                    <area.icon className={`h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 ${area.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 md:mb-4 gap-2">
                      <div className="min-w-0">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white hover:text-orange-400 transition-colors group-hover:text-orange-300 leading-tight">
                          {area.title}
                        </h3>
                        <p className="text-blue-400 text-sm md:text-base lg:text-lg font-medium">{area.company}</p>
                      </div>
                      <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm whitespace-nowrap self-start">
                        {area.period}
                      </Badge>
                    </div>
                    <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {area.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 transition-colors text-xs md:text-sm"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fun Stats Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto justify-items-center">
            {[
              { number: "∞", label: "Curiosity Level", color: "text-purple-400" },
              { number: "24/7", label: "Learning Mode", color: "text-blue-400" },
              { number: "100%", label: "AI Enthusiasm", color: "text-indigo-400" },
              { number: "🚀", label: "Innovation Drive", color: "text-orange-400" }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform">
                <div className={`text-3xl md:text-4xl lg:text-5xl font-bold ${stat.color} mb-2 group-hover:animate-pulse`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs md:text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
