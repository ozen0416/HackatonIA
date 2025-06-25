"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Leaf,
  Zap,
  Cloud,
  Thermometer,
  Calculator,
  Brain,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  RotateCcw,
} from "lucide-react"

export default function IAEnvironnementSite() {
  const [quizScore, setQuizScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [calculatorResult, setCalculatorResult] = useState<number | null>(null)
  const [usageHours, setUsageHours] = useState("")

  const quizQuestions = [
    {
      question: "Combien d'énergie consomme l'entraînement d'un grand modèle d'IA comme GPT-3 ?",
      options: [
        "Équivalent à 10 maisons pendant 1 an",
        "Équivalent à 126 maisons pendant 1 an",
        "Équivalent à 50 voitures pendant 1 an",
      ],
      correct: 1,
    },
    {
      question: "Quelle est l'empreinte carbone d'une recherche ChatGPT par rapport à une recherche Google ?",
      options: ["2 fois plus élevée", "5 fois plus élevée", "10 fois plus élevée"],
      correct: 2,
    },
    {
      question: "Les centres de données consomment actuellement quel pourcentage de l'électricité mondiale ?",
      options: ["1%", "4%", "8%"],
      correct: 1,
    },
  ]

  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculer le score
      let score = 0
      newAnswers.forEach((answer, index) => {
        if (answer === quizQuestions[index].correct) {
          score++
        }
      })
      setQuizScore(score)
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setQuizScore(0)
    setQuizCompleted(false)
  }

  const calculateCarbonFootprint = () => {
    const hours = Number.parseFloat(usageHours)
    if (hours > 0) {
      // Estimation : 1 heure d'utilisation d'IA = ~0.5 kg CO2
      const result = hours * 0.5 * 365 // kg CO2 par an
      setCalculatorResult(result)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <Brain className="h-8 w-8 text-green-600" />
          <span className="ml-2 text-xl font-bold text-green-800">IA & Environnement</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a href="#impact" className="text-sm font-medium hover:text-green-600 transition-colors">
            Impact
          </a>
          <a href="#activites" className="text-sm font-medium hover:text-green-600 transition-colors">
            Activités
          </a>
          <a href="#solutions" className="text-sm font-medium hover:text-green-600 transition-colors">
            Solutions
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <Badge className="bg-red-500/20 text-red-100 border-red-400">
                <AlertTriangle className="w-4 h-4 mr-1" />
                Alerte Environnementale
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                L'Intelligence Artificielle :
                <br />
                <span className="text-yellow-300">Un Défi Environnemental</span>
              </h1>
              <p className="max-w-[600px] text-green-100 md:text-xl">
                Découvrez l'impact environnemental caché de l'IA et apprenez comment nous pouvons agir pour un avenir
                numérique plus durable.
              </p>
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                <Leaf className="mr-2 h-4 w-4" />
                Découvrir l'Impact
              </Button>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                L'Impact en Chiffres
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl">Des données qui font réfléchir</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center border-green-200 bg-white/50">
                <CardHeader>
                  <Zap className="h-8 w-8 text-yellow-500 mx-auto" />
                  <CardTitle className="text-2xl font-bold text-green-800">1 287 MWh</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Énergie pour entraîner GPT-3 (équivalent à 126 foyers/an)</p>
                </CardContent>
              </Card>
              <Card className="text-center border-green-200 bg-white/50">
                <CardHeader>
                  <Cloud className="h-8 w-8 text-gray-500 mx-auto" />
                  <CardTitle className="text-2xl font-bold text-green-800">552 tonnes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">CO₂ émis pour l'entraînement d'un modèle d'IA avancé</p>
                </CardContent>
              </Card>
              <Card className="text-center border-green-200 bg-white/50">
                <CardHeader>
                  <Thermometer className="h-8 w-8 text-red-500 mx-auto" />
                  <CardTitle className="text-2xl font-bold text-green-800">4%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Part des centres de données dans la consommation électrique mondiale
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-green-200 bg-white/50">
                <CardHeader>
                  <Brain className="h-8 w-8 text-purple-500 mx-auto" />
                  <CardTitle className="text-2xl font-bold text-green-800">10x</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Plus d'énergie qu'une recherche Google pour une requête ChatGPT
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Activités Section */}
        <section id="activites" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                Activités Ludiques
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl">Testez vos connaissances et calculez votre impact</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Quiz */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center">
                    <Brain className="mr-2 h-5 w-5" />
                    Quiz : Connaissez-vous l'impact de l'IA ?
                  </CardTitle>
                  <CardDescription>Testez vos connaissances sur l'empreinte environnementale de l'IA</CardDescription>
                </CardHeader>
                <CardContent>
                  {!quizCompleted ? (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          Question {currentQuestion + 1} sur {quizQuestions.length}
                        </span>
                        <Progress value={(currentQuestion / quizQuestions.length) * 100} className="w-24" />
                      </div>
                      <h3 className="font-semibold text-green-800">{quizQuestions[currentQuestion].question}</h3>
                      <div className="space-y-2">
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            className="w-full text-left justify-start h-auto p-3 border-green-200 hover:bg-green-50"
                            onClick={() => handleQuizAnswer(index)}
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="text-4xl">{quizScore === 3 ? "🌟" : quizScore === 2 ? "👍" : "💪"}</div>
                      <h3 className="text-xl font-bold text-green-800">
                        Score : {quizScore}/{quizQuestions.length}
                      </h3>
                      <p className="text-gray-600">
                        {quizScore === 3
                          ? "Excellent ! Vous êtes un expert !"
                          : quizScore === 2
                            ? "Bien joué ! Vous connaissez le sujet."
                            : "Continuez à apprendre sur ce sujet important !"}
                      </p>
                      <Button onClick={resetQuiz} className="bg-green-600 hover:bg-green-700">
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Recommencer
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Calculateur */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center">
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculateur d'Empreinte Carbone IA
                  </CardTitle>
                  <CardDescription>Estimez votre impact environnemental lié à l'usage de l'IA</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Combien d'heures par jour utilisez-vous des outils d'IA ?
                      </label>
                      <Input
                        type="number"
                        placeholder="Ex: 2"
                        value={usageHours}
                        onChange={(e) => setUsageHours(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <Button
                      onClick={calculateCarbonFootprint}
                      className="w-full bg-green-600 hover:bg-green-700"
                      disabled={!usageHours}
                    >
                      Calculer mon impact
                    </Button>
                    {calculatorResult !== null && (
                      <div className="p-4 bg-green-100 rounded-lg">
                        <h4 className="font-semibold text-green-800">Votre empreinte carbone annuelle :</h4>
                        <p className="text-2xl font-bold text-green-600">{calculatorResult.toFixed(1)} kg CO₂</p>
                        <p className="text-sm text-gray-600 mt-2">
                          Équivalent à {(calculatorResult / 2.3).toFixed(0)} km en voiture
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                Que Pouvons-Nous Faire ?
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl">Des solutions concrètes pour un usage responsable de l'IA</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Lightbulb className="h-8 w-8 text-yellow-500" />
                  <CardTitle className="text-green-800">Usage Conscient</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Utilisez l'IA seulement quand nécessaire
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Préférez des modèles plus petits et efficaces
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Évitez les requêtes répétitives
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Leaf className="h-8 w-8 text-green-500" />
                  <CardTitle className="text-green-800">Alternatives Vertes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Choisir des fournisseurs utilisant l'énergie renouvelable
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Utiliser des outils d'IA locaux quand possible
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Soutenir la recherche en IA verte
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Brain className="h-8 w-8 text-purple-500" />
                  <CardTitle className="text-green-800">Sensibilisation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Partager ces informations avec votre entourage
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Demander la transparence aux entreprises tech
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Soutenir les politiques environnementales
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Agissons Ensemble !</h2>
              <p className="mx-auto max-w-[600px] text-green-100 md:text-xl">
                Chaque geste compte pour réduire l'impact environnemental de l'intelligence artificielle. Commençons dès
                aujourd'hui !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                  <Leaf className="mr-2 h-4 w-4" />
                  Partager cette Page
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  En Savoir Plus
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-green-50">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-green-600" />
          <p className="text-xs text-gray-600">© 2024 IA & Environnement. Pour un numérique responsable.</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Sources
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Contact
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Ressources
          </a>
        </nav>
      </footer>
    </div>
  )
}
