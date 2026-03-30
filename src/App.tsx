import React from 'react';
console.log('App.tsx is loaded');
import { HashRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Twitter, MapPin, ChevronRight } from 'lucide-react';

// --- Components ---

const Sidebar = () => (
  <div className="flex flex-col space-y-6 md:w-64 shrink-0">
    <h2 className="text-xl font-bold tracking-tight text-gray-900">Tommaso D'Amelio</h2>
    <div className="aspect-[3/4] overflow-hidden rounded-sm bg-gray-100">
      <img
        src="https://www.dropbox.com/scl/fi/gc4s4vxaecfwiouc8uq7b/fotosito.png?rlkey=g1fm7gql1pwauqll4gt9uz1zc&st=n5piabo9&dl=1"
        alt="Tommaso D'Amelio"
        className="h-full w-full object-cover transition-all duration-500"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="space-y-3 text-sm text-gray-600">
      <div className="flex items-center gap-2">
        <MapPin size={16} />
        <span>Brussels, Belgium</span>
      </div>
      <a href="mailto:tommaso.damelio@ulb.be" className="flex items-center gap-2 hover:text-black transition-colors">
        <Mail size={16} />
        <span>tommaso.damelio@ulb.be</span>
      </a>
      <a href="https://x.com/AmelioTommaso" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black transition-colors">
        <Twitter size={16} />
        <span>Twitter</span>
      </a>
    </div>
  </div>
);

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/working-papers' },
    { name: 'Talks', path: '/talks' },
    { name: 'Teaching', path: '/teaching' },
    { name: 'CV', path: '/cv' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black text-white py-4 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-x-8 gap-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-sm font-medium transition-opacity hover:opacity-100 ${
              location.pathname === item.path ? 'opacity-100' : 'opacity-60'
            } ${item.name === 'Home' ? 'text-lg mr-4' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

// --- Pages ---

const Home = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="space-y-8"
  >
    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
      Hey there! Welcome to my personal website.
    </h1>
    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
      <p>
        I am a PhD Candidate in Economics at <a href="https://ecares.ulb.be/" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-300 hover:decoration-black transition-colors">ECARES - Université Libre de Bruxelles</a>, under the supervision of <a href="https://sites.google.com/site/gobbipaula/" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-300 hover:decoration-black transition-colors">Paula Gobbi</a>. I am currently visiting <a href="https://www.bu.edu/economics/" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-300 hover:decoration-black transition-colors">Boston University</a>, where I am working under the supervision of <a href="https://sites.google.com/site/martinfiszbein/" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-300 hover:decoration-black transition-colors">Martin Fiszbein</a>.
      </p>
      <p>
        My research focuses on <strong>Applied Economics</strong>, with a particular interest in <strong>Economic History</strong>. My work explores the interconnections of inheritance practices and demography, in particolar migration and fertility, with a focus on the 18<sup>th</sup> and 19<sup>th</sup> century. I am also interested in <strong>Sport Economics</strong>.
      </p>
    </div>
  </motion.div>
);

const WorkingPapers = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="space-y-8"
  >
    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Current projects</h1>
    
    <div className="space-y-12">
      <section>
        <ul className="space-y-8">
          {(
            [
              {
                title: "Slowing Down the Transition: Migration and the American Fertility Decline",
                coauthors: "Job market paper",
                abstract: "This paper investigates the role of European migration in shaping the American fertility transition during the 19th and early 20th centuries. Exploiting the French Revolution and Napoleonic invasions as a natural experiment that imposed partible inheritance across Europe, I estimate the causal effect of migration flows on native fertility patterns. Using genealogical data from Geni.com combined with historical inheritance practices across European regions, I find that migrants from formerly impartible inheritance areas increased native fertility, effectively slowing the demographic transition. The effect is concentrated in counties with higher rates of mixed marriages and more binding land constraints, suggesting cultural transmission as the primary mechanism. A shift-share instrumental variable approach confirms these findings. These results provide new evidence that migration can influence fundamental demographic behaviors through cultural channels."
              },
              {
                title: "Inheritance and Migration: Evidence from 19th century Italy",
                coauthors: (
                  <>
                    joint with <a href="http://www.thomasbaudin.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 underline decoration-gray-300 underline-offset-2">Thomas Baudin</a>, <a href="https://sites.google.com/site/gobbipaula/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 underline decoration-gray-300 underline-offset-2">Paula Gobbi</a> and <a href="https://www.simone-moriconi.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 underline decoration-gray-300 underline-offset-2">Simone Moriconi</a>
                  </>
                ),
                abstract: "Coming soon."
              },
              {
                title: "Inheritance, Fertility, and Son Preference: Evidence from Pre-Industrial France",
                coauthors: (
                  <>
                    joint with <a href="https://sites.google.com/view/joannehaddad/home" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 underline decoration-gray-300 underline-offset-2">Joanne Haddad</a> and <a href="https://sites.google.com/georgetown.edu/lamiskattan/home" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 underline decoration-gray-300 underline-offset-2">Lamis Kattan</a>
                  </>
                ),
                abstract: "We examine whether the 1793 reform mandating equal inheritance for sons and daughters altered son preference in pre-industrial France. We link a new GIS of inheritance customs to the Enquête Louis Henry micro data and estimate cohort-by-place difference-in-differences with fixed effects. The reform does not shift the sex ratio at birth, but raises excess female mortality, consistent with post-birth selective neglect. The increase is concentrated at ages 1–18 and is largest where the shock was most binding—partible systems that previously excluded women. Effects are stronger in rural areas and in constraint regions: low caloric suitability (scarcity) and high pastoral suitability (maternal time constraints). Fertility responses also become more son-biased: families have more children when no sons are born, are more likely to continue after a girl, and stop earlier once a son arrives. Finally, girls' literacy declines after the reform, with no comparable decline for boys."
              },
              {
                title: "Illegitimacy in France at the time of the Revolution",
                abstract: "The French Revolution implemented a series of reforms that disrupted traditional local inheritance practices by mandating equal division of assets among all offspring, including illegitimate children, an historically marginalized and disadvantaged societal group. I compare children born before and after 1793 across municipalities where the inheritance reforms had a transformative impact and those where these practices remained unaltered. My findings reveal a significant decrease in the incidence of illegitimate children in the treated areas. I also address potential concerns regarding the robustness of the results and the mechanisms involved."
              }
            ] as { title: string; coauthors?: React.ReactNode; year?: string; abstract?: string }[]
          ).map((paper, i) => (
            <li key={i} className="group">
              <div className="flex items-start gap-2">
                <ChevronRight size={18} className="mt-1 shrink-0 text-gray-300 group-hover:text-black transition-colors" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {paper.title}{paper.coauthors ? <>, {paper.coauthors}</> : ''}
                  </h3>
                  <details className="mt-1 text-sm text-gray-600">
                    <summary className="cursor-pointer font-medium text-blue-700 hover:underline inline-block">
                      Abstract
                    </summary>
                    <p className="mt-2 pl-4 border-l-2 border-gray-100 italic">
                      {paper.abstract}
                    </p>
                  </details>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </motion.div>
);

const Talks = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="space-y-8"
  >
    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Presentations</h1>
    <div className="space-y-12">
      <section>
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">2026</h2>
        <ul className="space-y-4">
          {[
            "Growth lab breakfast in Brown University",
            "Graduate student Economic history workshop in Harvard University",
            "Development Reading group in Boston University"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <ChevronRight size={16} className="mt-1 text-gray-300" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">2025</h2>
        <ul className="space-y-4">
          {[
            "Gender, Inheritance and Fertility in Paris Cergy",
            "2025 Winter workshop at University of Namur",
            "15th Annual Conference on \"Immigration in OECD Countries\" in OECD",
            "Christmas workshop in ECARES",
            "4th IESEG Migration and Family Workshop in Paris IESEG (poster)",
            "2nd Conference of Young Demographers in Karlov University of Prague",
            "Household Economics PhD workshop in KU Leuven"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <ChevronRight size={16} className="mt-1 text-gray-300" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">2024</h2>
        <ul className="space-y-4">
          {[
            "London School of Economics (Use of Genealogical Sources in Economic History)",
            "University of Manchester (Legal and institutional origins of economic development)",
            "UCL Louvain la Neuve (Institutions, human capital, and long-term development)"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <ChevronRight size={16} className="mt-1 text-gray-300" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">2023</h2>
        <ul className="space-y-4">
          {[
            "48th Spanish Economic Association Simposium, Salamanca",
            "13th Ifo Workshop on Regional Economics, Ifo Dresden",
            "2nd NSE PhD and Postdoc Workshop, Naples School of Economics",
            "2nd IESEG Migration and Family Workshop, Paris IESEG",
            "Household Economics PhD workshop, KU Leuven"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <ChevronRight size={16} className="mt-1 text-gray-300" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </motion.div>
);

const Teaching = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="space-y-8"
  >
    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Teaching </h1>
    <div className="space-y-12">
      <section>
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Teaching Assistant</h2>
        <ul className="space-y-6">
          {[
            {
              period: "2023 - 2025",
              course: "Graduate Econometrics 2",
              institution: <a href="https://ecares.ulb.be/" target="_blank" rel="noopener noreferrer" className="hover:underline">Université Libre de Bruxelles</a>,
              professor: <a href="https://sites.google.com/site/gobbipaula/" target="_blank" rel="noopener noreferrer" className="hover:underline">Paula Gobbi</a>
            },
            {
              period: "2020 - 2021",
              course: "Principle of Economics, International Trade, Political Economy",
              institution: "Universidad Carlos III de Madrid",
              professor: "Antonio Romero-Medina, Antoine Loeper and Luisa Fuester"
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-mono text-gray-400 w-24 shrink-0">{item.period}</span>
              <div>
                <p className="font-medium text-gray-900">{item.course}</p>
                <p className="text-sm text-gray-500">
                  {item.institution}
                  {item.professor && (
                    <> (Prof. {item.professor})</>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </motion.div>
);

const CV = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="space-y-8"
  >
    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Curriculum Vitae</h1>
    <div className="p-8 border-2 border-dashed border-gray-200 rounded-lg text-center space-y-4">
      <p className="text-gray-600">
        You can view or download my full Curriculum Vitae by clicking the button below.
      </p>
      <a
        href="https://www.dropbox.com/scl/fi/cnprptqnsx72kbbjvn4vu/cv.pdf?rlkey=nczm9uj3f6jtkofkbht9awajo&st=nuuc6fom&dl=0"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
      >
        <span>Download CV (PDF)</span>
        <ChevronRight size={18} />
      </a>
    </div>
  </motion.div>
);

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-white font-sans selection:bg-gray-100">
    <Navbar />
    <main className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-20">
      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </div>
      </div>
    </main>
  </div>
);

export default function App() {
  console.log('App is rendering');
  return (
    <div style={{ padding: '20px', border: '1px solid red' }}>
      <h1>Debug: App is rendering</h1>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/working-papers" element={<WorkingPapers />} />
            <Route path="/talks" element={<Talks />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/cv" element={<CV />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}
