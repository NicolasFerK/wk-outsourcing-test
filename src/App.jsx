import React from 'react';
import { 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Layers,
  Zap,
  Globe
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex-shrink-0 flex items-center">
          <span className="text-2xl font-bold text-primary">WK<span className="text-dark">Technology</span></span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            <a href="#solucoes" className="text-gray-600 hover:text-primary font-medium">Soluções</a>
            <a href="#beneficios" className="text-gray-600 hover:text-primary font-medium">Benefícios</a>
            <a href="#faq" className="text-gray-600 hover:text-primary font-medium">FAQ</a>
            <a href="#contato" className="btn-primary py-2">Falar com Especialista</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        <div>
          <div className="inline-flex items-center py-1 px-3 rounded-full bg-blue-100 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Escalabilidade imediata para seu time de TI
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-dark leading-tight mb-6">
            Transforme sua Tecnologia em <span className="text-primary">Vantagem Competitiva</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Reduza custos, mitigue riscos e foque no core business da sua empresa enquanto nossa equipe de especialistas cuida do seu desenvolvimento e infraestrutura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contato" className="btn-primary text-center text-lg">Solicitar Orçamento</a>
            <a href="#solucoes" className="btn-secondary text-center text-lg">Conhecer Serviços</a>
          </div>
        </div>
        <div className="mt-16 lg:mt-0 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Time de tecnologia trabalhando" 
              className="w-full h-auto"
            />
          </div>
          {/* Floating element */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Aumento de Produtividade</p>
                <p className="text-xl font-bold text-dark">+45% Médio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Solutions = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Desenvolvimento de Software",
      desc: "Times dedicados para criação de aplicações web, mobile e sistemas complexos utilizando as tecnologias mais modernas."
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "QA & Testes",
      desc: "Garantia de qualidade rigorosa através de automação de testes e testes manuais para entregar produtos sem bugs."
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Infraestrutura & Cloud",
      desc: "Gestão completa de servidores, migração para nuvem e sustentação de ambientes críticos."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Cybersecurity",
      desc: "Proteção de dados e conformidade com LGPD para garantir a segurança da sua operação digital."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Staff Augmentation",
      desc: "Alocação de profissionais altamente qualificados para complementar seu time atual em projetos específicos."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Suporte Especializado",
      desc: "Atendimento técnico de nível avançado para resolução rápida de incidentes tecnológicos."
    }
  ];

  return (
    <section id="solucoes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Soluções de Outsourcing Sob Medida</h2>
          <p className="text-lg text-gray-600">Não oferecemos apenas mão de obra, entregamos inteligência e capacidade técnica para escalar seu negócio.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="card-feature group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-dark">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "Redução de Custos Operacionais",
      desc: "Elimine gastos com recrutamento, treinamentos e encargos trabalhistas de grandes times internos.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Acesso a Talentos de Elite",
      desc: "Conecte sua empresa com especialistas que já dominam as tecnologias que você precisa.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Agilidade e Escalabilidade",
      desc: "Aumente ou diminua o tamanho do seu time técnico conforme a demanda do seu projeto.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Foco no Core Business",
      desc: "Deixe a complexidade da tecnologia conosco e foque no que realmente faz sua empresa crescer.",
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Por que o Outsourcing da WK é a escolha certa?</h2>
            <p className="text-gray-400 text-lg mb-12">
              Muitas empresas perdem tempo tentando gerenciar talentos técnicos em vez de gerenciar o negócio. Nosso modelo de outsourcing remove esse gargalo.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{b.title}</h4>
                    <p className="text-sm text-gray-400">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Nossos Números</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-sm text-gray-400">Anos de Experiência</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-gray-400">Projetos Entregues</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="text-3xl font-bold text-primary">98%</p>
                  <p className="text-sm text-gray-400">Satisfação Cliente</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-gray-400">Suporte Técnico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "Qual a diferença entre Outsourcing e Staff Augmentation?",
      a: "No Outsourcing, a WK assume a responsabilidade pela entrega do projeto ou serviço. No Staff Augmentation, fornecemos profissionais para trabalharem dentro da sua estrutura atual, complementando seu time."
    },
    {
      q: "Como é feita a seleção dos profissionais?",
      a: "Possuímos um processo rigoroso de avaliação técnica e cultural para garantir que o profissional enviado não tenha apenas o conhecimento técnico, mas também o fit necessário com sua cultura organizacional."
    },
    {
      q: "Posso escolher as tecnologias que serão utilizadas?",
      a: "Com certeza. Adaptamos nossa expertise às necessidades específicas do seu projeto e stack tecnológica."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-3 text-primary">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section id="contato" className="py-20 bg-primary text-white">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-8">Pronto para escalar sua tecnologia?</h2>
      <p className="text-xl mb-10 text-blue-100">Entre em contato hoje e receba um diagnóstico gratuito de como nosso outsourcing pode ajudar sua empresa.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center">
          <MessageSquare className="mr-2" /> Falar no WhatsApp
        </button>
        <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
          Enviar E-mail
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-dark text-gray-400 py-12 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 text-center sm:text-left">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <span className="text-2xl font-bold text-white mb-6 block">WK<span className="text-primary">Technology</span></span>
          <p className="text-sm leading-relaxed">
            Especialistas em soluções tecnológicas que impulsionam o crescimento de empresas através de outsourcing estratégico.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
            <li><a href="#solucoes" className="hover:text-primary transition-colors">Serviços</a></li>
            <li><a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a></li>
            <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li>contato@wktechnology.com.br</li>
            <li>São Paulo, Brasil</li>
            <li>Segunda a Sexta, 09:00 - 18:00</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 text-center text-xs">
        © {new Date().getFullYear()} WK Technology. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Benefits />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;