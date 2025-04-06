import React from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Lock,
  Zap,
  Share2,
  Scale,
  Download,
  Users,
  Building2,
  Star,
  ChevronRight,
  Shield,
  RefreshCw,
  Link,
  UserPlus,
  Upload,
  Smartphone,
  LogIn,
  Key
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};





function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="fixed w-full z-50 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Cloud className="w-8 h-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Tesseract</span>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a 
                  href="https://drive.usercontent.google.com/download?id=1oBCPhebPGB8soUO2himEotvHVOKYzgv-&export=download&authuser=0" 
                  download 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                <Download size={18} /> Windows
              </a>
              <button disabled className="px-4 py-2 text-gray-400 flex items-center gap-2">
                <Download size={18} /> macOS
              </button>
              <button disabled className="px-4 py-2 text-gray-400 flex items-center gap-2">
                <Download size={18} /> Linux
              </button>
              <button disabled className="px-4 py-2 text-gray-400 flex items-center gap-2">
                <Download size={18} /> Android
              </button>
              <a
                href="https://a4faa95f527bf64073c9919786737332.serveo.net/login?redirect=/files/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <LogIn size={18} /> Login
              </a>
            </div>

            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="space-y-2">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-2">
              <a 
                  href="https://drive.usercontent.google.com/download?id=1oBCPhebPGB8soUO2himEotvHVOKYzgv-&export=download&authuser=0" 
                  download 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                
                  <Download size={18} /> Windows
                </a>
                <button disabled className="px-4 py-2 text-gray-400 flex items-center gap-2">
                  <Download size={18} /> macOS
                </button>
                <button disabled className="px-4 py-2 text-gray-400 flex items-center gap-2">
                  <Download size={18} /> Linux
                </button>
                <button disabled className="px-4 py-2 text-gray-400 flex items-center gap-2">
                  <Download size={18} /> Android
                </button>
                <a
                  href="https://a4faa95f527bf64073c9919786737332.serveo.net/login?redirect=/files/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <LogIn size={18} /> Login
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-800/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            {...fadeIn}
          >
            Limitless Cloud Storage
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Secure. Scalable. Lightning Fast.<br />
            Welcome to the Future of Cloud Storage.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdQd0OsQxuB3krYo-R8c7UmyKylHA4kmpdfKZt2UqnOrOFUyw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              FeedBack  <ChevronRight size={20} />
            </a>
            <button 
              onClick={scrollToFeatures}
              className="px-8 py-4 border border-blue-400 rounded-lg hover:bg-blue-600/10 transition-colors"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Cloud className="w-8 h-8 text-blue-400" />}
              title="Universal Access"
              description="Store and access files from anywhere, anytime."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-yellow-400" />}
              title="High-Speed Sync"
              description="Real-time updates across all your devices."
            />
            <FeatureCard
              icon={<Lock className="w-8 h-8 text-green-400" />}
              title="Bank-Grade Security"
              description="Advanced encryption for ultimate data safety."
            />
            <FeatureCard
              icon={<Scale className="w-8 h-8 text-purple-400" />}
              title="Unlimited Scalability"
              description="Storage that grows with your needs."
            />
            <FeatureCard
              icon={<Share2 className="w-8 h-8 text-pink-400" />}
              title="Effortless Sharing"
              description="Secure file sharing with one click."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-red-400" />}
              title="Data Protection"
              description="End-to-end encryption and backup systems."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Meet the Founders</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FounderCard
              image="https://i.postimg.cc/bv7GPgMy/Unnnayan-Image.jpg"
              name="Unnayan Mishra"
              role="AI & Cloud Computing Specialist"
              link="https://a4faa95f527bf64073c9919786737332.serveo.net/login?redirect=/files/"
            />
            <FounderCard
              image="https://i.postimg.cc/m2sQCLmL/IMG-20230804-WA0163.jpg"
              name="Krish Munat"
              role="Cybersecurity & Distributed Systems Expert"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Simple Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PriceCard
              icon={<Users className="w-8 h-8" />}
              title="Individual"
              originalPrice="$9.99"
              price="Free"
              features={[
                "End-to-end encryption",
                "Access on 3 devices",
                "Basic support"
              ]}
            />
            <PriceCard
              icon={<Building2 className="w-8 h-8" />}
              title="Team"
              originalPrice="$24.99"
              price="Free"
              features={[
                "Advanced sharing",
                "Unlimited devices",
                "Priority support"
              ]}
              highlighted
            />
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Security</li>
                <li>Enterprise</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>API</li>
                <li>Status</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2025 Tesseract. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    className="p-6 bg-gray-900 rounded-xl"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const Timeline = () => {
  const steps = [
    { icon: <UserPlus />, title: "Sign Up", description: "Create your account in seconds" },
    { icon: <Upload />, title: "Upload", description: "Upload & organize files effortlessly" },
    { icon: <Smartphone />, title: "Access", description: "Access from any device, anytime" },
    { icon: <Link />, title: "Share", description: "Share with secure links & permissions" },
    { icon: <Key />, title: "Secure", description: "Enjoy end-to-end encryption" }
  ];

  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <motion.div 
          key={index}
          className="flex gap-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            {step.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const FounderCard = ({ image, name, role, link }) => (
  <motion.div 
    className={`bg-gray-900 p-6 rounded-xl ${link ? 'cursor-pointer' : ''}`}
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    onClick={() => link && window.open(link, '_blank')}
  >
    <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
    <h3 className="text-xl font-bold text-center mb-2">{name}</h3>
    <p className="text-gray-400 text-center">{role}</p>
  </motion.div>
);

const PriceCard = ({ icon, title, originalPrice, price, features, highlighted = false }) => (
  <motion.div 
    className={`p-8 rounded-xl ${
      highlighted 
        ? 'bg-blue-600 transform scale-105' 
        : 'bg-gray-800'
    }`}
    whileHover={{ scale: highlighted ? 1.1 : 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="text-center mb-8">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="text-4xl font-bold">
        <span className="line-through text-gray-400 text-2xl">{originalPrice}</span>
        <span className="ml-2">{price}</span>
      </div>
      <div className="text-sm text-gray-400">per month</div>
    </div>
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <Star size={16} className="text-yellow-400" />
          {feature}
        </li>
      ))}
    </ul>
    {/* <a 
      href="https://docs.google.com/forms/d/e/1FAIpQLSdQd0OsQxuB3krYo-R8c7UmyKylHA4kmpdfKZt2UqnOrOFUyw/viewform?usp=dialog"
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full mt-8 py-3 rounded-lg text-center ${
        highlighted 
          ? 'bg-white text-blue-600 hover:bg-gray-100' 
          : 'bg-blue-600 hover:bg-blue-700'
      }`}
    >
      Get Started
    </a> */}
  </motion.div>
);

export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Cloud,
//   Lock,
//   Zap,
//   Share2,
//   Scale,
//   Download,
//   Users,
//   Building2,
//   Star,
//   ChevronRight,
//   Shield,
//   RefreshCw,
//   Link,
//   UserPlus,
//   Upload,
//   Smartphone,
//   Key,
//   LogIn
// } from 'lucide-react';

// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 }
// };

// const FeatureCard = ({ icon, title, description }) => (
//   <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
//     <div className="mb-4">{icon}</div>
//     <h3 className="text-xl font-semibold mb-2">{title}</h3>
//     <p className="text-gray-300">{description}</p>
//   </div>
// );

// const Timeline = () => (
//   <ul className="space-y-6">
//     <li className="bg-gray-800 p-4 rounded-lg shadow">
//       <h4 className="font-semibold text-blue-400">Step 1: Sign Up</h4>
//       <p className="text-gray-300">Create your secure account to get started.</p>
//     </li>
//     <li className="bg-gray-800 p-4 rounded-lg shadow">
//       <h4 className="font-semibold text-purple-400">Step 2: Upload Files</h4>
//       <p className="text-gray-300">Drag and drop or browse to upload files to the cloud.</p>
//     </li>
//     <li className="bg-gray-800 p-4 rounded-lg shadow">
//       <h4 className="font-semibold text-green-400">Step 3: Access Anytime</h4>
//       <p className="text-gray-300">Login from anywhere to access or share files instantly.</p>
//     </li>
//   </ul>
// );

// const FounderCard = ({ image, name, role, link }) => (
//   <div className="bg-gray-700 rounded-lg p-6 text-center shadow-xl">
//     <img
//       src={image}
//       alt={name}
//       className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
//     />
//     <h3 className="text-xl font-bold mb-1">{name}</h3>
//     <p className="text-gray-400 mb-2">{role}</p>
//     {link && (
//       <a
//         href={link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-400 underline"
//       >
//         Visit Profile
//       </a>
//     )}
//   </div>
// );

// const PriceCard = ({ icon, title, originalPrice, price, features, highlighted }) => (
//   <div className={`rounded-xl p-6 shadow-lg ${highlighted ? 'bg-blue-700 text-white' : 'bg-gray-700 text-white'}`}>
//     <div className="mb-4">{icon}</div>
//     <h3 className="text-2xl font-bold mb-2">{title}</h3>
//     <p className="line-through text-gray-400">{originalPrice}</p>
//     <p className="text-3xl font-bold mb-4">{price}</p>
//     <ul className="space-y-2">
//       {features.map((feature, index) => (
//         <li key={index} className="text-gray-200">• {feature}</li>
//       ))}
//     </ul>
//   </div>
// );

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const scrollToFeatures = () => {
//     const featuresSection = document.querySelector('#features');
//     featuresSection?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <nav className="fixed w-full z-50 backdrop-blur-sm border-b border-gray-800">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <Cloud className="w-8 h-8 text-blue-400" />
//               <span className="ml-2 text-xl font-bold">Tesseract</span>
//             </div>

//             <div className="hidden md:flex items-center space-x-4">
//               <a 
//                 href="https://www.youtube.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-4 py-2 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
//               >
//                 <Download size={18} /> Windows
//               </a>
//               <button disabled className="px-4 py-2 text-gray-400 flex items-center gap-2">
//                 <Download size={18} /> macOS
//               </button>
//               <button disabled className="px-4 py-2 text-gray-400 flex items-center gap-2">
//                 <Download size={18} /> Linux
//               </button>
//               <button disabled className="px-4 py-2 text-gray-400 flex items-center gap-2">
//                 <Download size={18} /> Android
//               </button>
//               <a
//                 href="https://a4faa95f527bf64073c9919786737332.serveo.net/login?redirect=/files/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="ml-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
//               >
//                 <LogIn size={18} /> Login
//               </a>
//             </div>

//             <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               <div className="space-y-2">
//                 <span className="block w-6 h-0.5 bg-white"></span>
//                 <span className="block w-6 h-0.5 bg-white"></span>
//                 <span className="block w-6 h-0.5 bg-white"></span>
//               </div>
//             </button>
//           </div>

//           {isMenuOpen && (
//             <div className="md:hidden py-4 border-t border-gray-800">
//               <div className="flex flex-col space-y-2">
//                 <a 
//                   href="https://www.youtube.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-4 py-2 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
//                 >
//                   <Download size={18} /> Windows
//                 </a>
//                 <button disabled className="px-4 py-2 text-gray-400 flex items-center gap-2">
//                   <Download size={18} /> macOS
//                 </button>
//                 <button disabled className="px-4 py-2 text-gray-400 flex items-center gap-2">
//                   <Download size={18} /> Linux
//                 </button>
//                 <button disabled className="px-4 py-2 text-gray-400 flex items-center gap-2">
//                   <Download size={18} /> Android
//                 </button>
//                 <a
//                   href="https://a4faa95f527bf64073c9919786737332.serveo.net/login?redirect=/files/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
//                 >
//                   <LogIn size={18} /> Login
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-800/20" />
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <motion.h1 
//             className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
//             {...fadeIn}
//           >
//             Limitless Cloud Storage
//           </motion.h1>
//           <motion.p 
//             className="text-xl md:text-2xl text-gray-300 mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             Secure. Scalable. Lightning Fast.<br />
//             Welcome to the Future of Cloud Storage.
//           </motion.p>
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <a 
//               href="https://docs.google.com/forms/d/e/1FAIpQLSdQd0OsQxuB3krYo-R8c7UmyKylHA4kmpdfKZt2UqnOrOFUyw/viewform?usp=dialog"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
//             >
//               FeedBack  <ChevronRight size={20} />
//             </a>
//             <button 
//               onClick={scrollToFeatures}
//               className="px-8 py-4 border border-blue-400 rounded-lg hover:bg-blue-600/10 transition-colors"
//             >
//               Learn More
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       <section id="features" className="py-20 bg-gray-800">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <FeatureCard icon={<Cloud className="w-8 h-8 text-blue-400" />} title="Universal Access" description="Store and access files from anywhere, anytime." />
//             <FeatureCard icon={<Zap className="w-8 h-8 text-yellow-400" />} title="High-Speed Sync" description="Real-time updates across all your devices." />
//             <FeatureCard icon={<Lock className="w-8 h-8 text-green-400" />} title="Bank-Grade Security" description="Advanced encryption for ultimate data safety." />
//             <FeatureCard icon={<Scale className="w-8 h-8 text-purple-400" />} title="Unlimited Scalability" description="Storage that grows with your needs." />
//             <FeatureCard icon={<Share2 className="w-8 h-8 text-pink-400" />} title="Effortless Sharing" description="Secure file sharing with one click." />
//             <FeatureCard icon={<Shield className="w-8 h-8 text-red-400" />} title="Data Protection" description="End-to-end encryption and backup systems." />
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gray-900">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
//           <div className="max-w-4xl mx-auto">
//             <Timeline />
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gray-800">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-16">Meet the Founders</h2>
//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             <FounderCard image="https://i.postimg.cc/bv7GPgMy/Unnnayan-Image.jpg" name="Unnayan Mishra" role="AI & Cloud Computing Specialist" link="https://a4faa95f527bf64073c9919786737332.serveo.net/login?redirect=/files/" />
//             <FounderCard image="https://i.postimg.cc/m2sQCLmL/IMG-20230804-WA0163.jpg" name="Krish Munat" role="Cybersecurity & Distributed Systems Expert" />
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gray-900">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-16">Simple Pricing</h2>
//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             <PriceCard icon={<Users className="w-8 h-8" />} title="Individual" originalPrice="$9.99" price="Free" features={["End-to-end encryption", "Access on 3 devices", "Basic support"]} />
//             <PriceCard icon={<Building2 className="w-8 h-8" />} title="Team" originalPrice="$24.99" price="Free" features={["Advanced sharing", "Unlimited devices", "Priority support"]} highlighted />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default App;
