import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, BarChart3, Cpu, Target, Calendar, Star } from "lucide-react"
import Link from "next/link"

export default function AIPricePredictor() {
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
            <Badge variant="outline" className="border-blue-500/30 text-blue-300 px-4 py-2">
              <TrendingUp className="h-4 w-4 mr-2" />
              Machine Learning
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              AI-Powered Price Prediction System
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              An advanced machine learning system that accurately predicts market prices using 
              ensemble methods, feature engineering, and real-time data processing to deliver 
              actionable insights for business decision-making.
            </p>
            
            {/* Project Meta */}
            <div className="flex items-center justify-center flex-wrap gap-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Aug 2024 - Jan 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>5.0 Client Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-4 w-4" />
                <span>95%+ Accuracy</span>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 max-w-3xl mx-auto mt-8">
              <p className="text-blue-300 font-medium mb-2">⭐ Client Feedback</p>
              <p className="text-gray-300 italic">
                "Great work and great person very happy to work with her always."
              </p>
              <p className="text-gray-400 text-sm mt-2">- Verified Upwork Client</p>
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid gap-8 lg:grid-cols-3 mb-16">
            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Data Analysis</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Comprehensive analysis of historical price data, market trends, and external factors 
                  to identify key patterns and predictive features.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <Cpu className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">ML Pipeline</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Robust machine learning pipeline with feature engineering, model selection, 
                  hyperparameter tuning, and ensemble methods for optimal performance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Real-Time Predictions</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Live prediction system with automated data ingestion, model inference, 
                  and confidence intervals for reliable business insights.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Technical Implementation */}
          <Card className="bg-slate-800/50 border-slate-700/50 mb-16">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8">Technical Architecture</h2>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">Data Processing</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Multi-source data integration and cleaning</li>
                    <li>• Time series feature engineering</li>
                    <li>• Outlier detection and handling</li>
                    <li>• Automated data validation pipelines</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Model Development</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Random Forest and XGBoost ensemble</li>
                    <li>• LSTM networks for temporal patterns</li>
                    <li>• Cross-validation and backtesting</li>
                    <li>• Hyperparameter optimization with Optuna</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-indigo-400 mb-4">Deployment & Monitoring</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Docker containerization for scalability</li>
                    <li>• REST API for real-time predictions</li>
                    <li>• Model performance monitoring</li>
                    <li>• Automated retraining workflows</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Performance Metrics</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• 95%+ prediction accuracy achieved</li>
                    <li>• &lt;100ms response time for predictions</li>
                    <li>• 99.9% system uptime maintained</li>
                    <li>• Continuous model improvement</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div className="grid gap-8 md:grid-cols-2 mb-16">
            <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Advanced Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-blue-300">Multi-Model Ensemble</h4>
                      <p className="text-gray-300 text-sm">Combines multiple algorithms for robust predictions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-purple-300">Feature Engineering</h4>
                      <p className="text-gray-300 text-sm">Advanced feature creation and selection techniques</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-indigo-300">Confidence Intervals</h4>
                      <p className="text-gray-300 text-sm">Uncertainty quantification for risk assessment</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Business Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-purple-300">Cost Optimization</h4>
                      <p className="text-gray-300 text-sm">Reduced procurement costs through accurate forecasting</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-indigo-300">Risk Management</h4>
                      <p className="text-gray-300 text-sm">Better decision-making with predictive insights</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-cyan-300">Competitive Advantage</h4>
                      <p className="text-gray-300 text-sm">Data-driven strategies for market positioning</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Outcome */}
          <Card className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Project Success</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">95%+</div>
                  <div className="text-gray-300">Prediction Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">6 Months</div>
                  <div className="text-gray-300">Project Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-400 mb-2">5.0⭐</div>
                  <div className="text-gray-300">Client Rating</div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-slate-800/50 rounded-lg">
                <p className="text-lg text-blue-300 font-medium mb-2">🎯 Key Achievement</p>
                <p className="text-gray-300">
                  Delivered a production-ready ML system that consistently outperforms traditional 
                  forecasting methods, providing the client with significant competitive advantages 
                  and cost savings through accurate price predictions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
