import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plane, CreditCard, History, Briefcase, Search, ArrowLeft } from "lucide-react"

// --- NOVOS COMPONENTES DE VIEW ---

// View de Login
function LoginView({ onSwitchToRegister, onGoBack }) {
  return (
    <div className="flex-grow flex justify-center items-center p-4">
      <Card className="w-full max-w-sm shadow-2xl bg-background">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input id="email" type="email" placeholder="Email" required />
          <Input id="password" type="password" placeholder="Senha" required />
          <Button className="w-full bg-blue-600 hover:bg-blue-700">Entrar</Button>
          <div className="mt-4 text-center text-sm">
            Não tem uma conta?{" "}
            <button onClick={onSwitchToRegister} className="underline text-blue-600 font-semibold">
              Cadastre-se
            </button>
          </div>
          <Button variant="link" onClick={onGoBack} className="w-full text-gray-600">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para a página inicial
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

// View de Cadastro
function RegisterView({ onSwitchToLogin, onGoBack }) {
  return (
    <div className="flex-grow flex justify-center items-center p-4">
      <Card className="w-full max-w-sm shadow-2xl bg-background">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Crie sua conta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input id="name" placeholder="Nome completo" required />
          <Input id="name" placeholder="Data de nascimento" required />
          <Input id="name" placeholder="CPF (apenas números)" required />
          <Input id="name" placeholder="Telefone" required />
          <Input id="email" type="email" placeholder="Email" required />
          <Input id="password" type="password" placeholder="Senha" required />
          <Button className="w-full bg-blue-600 hover:bg-blue-700">Cadastrar</Button>
          <div className="mt-4 text-center text-sm">
            Já tem uma conta?{" "}
            <button onClick={onSwitchToLogin} className="underline text-blue-600 font-semibold">
              Login
            </button>
          </div>
           <Button variant="link" onClick={onGoBack} className="w-full text-gray-600">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para a página inicial
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

// View Principal da Landing Page
function LandingView() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Sua jornada, simplificada.
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          Encontre os melhores preços e horários para suas próximas viagens.
        </p>

        <Card className="w-full max-w-3xl shadow-lg">
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input placeholder="Origem" />
              <Input placeholder="Destino" />
              <Input type="date" />
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Search className="w-4 h-4 mr-2" /> Buscar
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
      
      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          <FeatureCard
            icon={<CreditCard className="w-10 h-10 text-blue-600" />}
            title="Compra Rápida e Segura"
            text="Adquira suas passagens com poucos cliques e total segurança em nossa plataforma."
          />
          <FeatureCard
            icon={<Briefcase className="w-10 h-10 text-blue-600" />}
            title="Gerencie Sua Viagem"
            text="Altere voos, adicione bagagens e faça o check-in de forma fácil e online."
          />
          <FeatureCard
            icon={<History className="w-10 h-10 text-blue-600" />}
            title="Histórico de Compras"
            text="Acesse seu histórico de viagens e consulte os detalhes de voos anteriores."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-16 px-4">
        <h3 className="text-3xl font-semibold mb-4">
          Preparado para viajar?
        </h3>
        <p className="text-lg mb-8">
          Simplifque seu planejamento de viagens com a Pousar.com.
        </p>
        <Button variant="secondary" className="text-blue-600 bg-white hover:bg-gray-100">
          Explore nossos pacotes
        </Button>
      </section>
    </>
  )
}

export default function TravelLandingPage() {
  // Estado para controlar qual view (página) está sendo exibida
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'login', 'register'

  // Função para renderizar a view correta com base no estado
  const renderContent = () => {
    switch (currentView) {
      case 'login':
        return <LoginView 
                  onSwitchToRegister={() => setCurrentView('register')} 
                  onGoBack={() => setCurrentView('landing')} 
                />;
      case 'register':
        return <RegisterView 
                  onSwitchToLogin={() => setCurrentView('login')} 
                  onGoBack={() => setCurrentView('landing')} 
                />;
      default:
        return <LandingView />;
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Header (sempre visível) */}
      <header className="w-full py-6 shadow-sm bg-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <button onClick={() => setCurrentView('landing')} className="text-2xl font-bold text-blue-600">Pousar.com</button>
          <div className="flex items-center gap-4">
            <Button onClick={() => setCurrentView('register')} className="bg-blue-600 hover:bg-blue-700 text-white">Cadastre-se</Button>
            <Button onClick={() => setCurrentView('login')} className="bg-blue-600 hover:bg-blue-700 text-white">Login</Button>
          </div>
        </div>
      </header>

      {/* Main (conteúdo dinâmico) */}
      <main className="flex-grow flex flex-col">
        {renderContent()}
      </main>

      {/* Footer (sempre visível) */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Pousar.com. All rights reserved.
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, text }) {
  return (
    <Card className="text-center p-6 shadow-md">
      <CardContent className="flex flex-col items-center space-y-4">
        {icon}
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-gray-600">{text}</p>
      </CardContent>
    </Card>
  )
}