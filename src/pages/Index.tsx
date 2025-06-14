import { ShoppingBag, Heart, Star, Search, Menu, User } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Retro Sunglasses",
    price: "$89",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",
    category: "Accessories"
  },
  {
    id: 2,
    name: "Pop Art Jacket",
    price: "$156",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop",
    category: "Clothing"
  },
  {
    id: 3,
    name: "Neon Sneakers",
    price: "$124",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
    category: "Shoes"
  },
  {
    id: 4,
    name: "Comic Print Tee",
    price: "$45",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    category: "Clothing"
  },
  {
    id: 5,
    name: "Psychedelic Bag",
    price: "$78",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    category: "Accessories"
  }
];

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pop-art-bg"></div>
      
      {/* Header */}
      <header className="relative z-50 bg-white/90 backdrop-blur-sm border-b-8 border-black">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold pop-title">POP SHOP!</h1>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="handwritten text-2xl text-black hover:text-pink-500 transition-colors">Home</a>
              <a href="#" className="handwritten text-2xl text-black hover:text-pink-500 transition-colors">Shop</a>
              <a href="#" className="handwritten text-2xl text-black hover:text-pink-500 transition-colors">About</a>
              <a href="#" className="handwritten text-2xl text-black hover:text-pink-500 transition-colors">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Search className="w-6 h-6 cursor-pointer hover:text-pink-500" />
              <User className="w-6 h-6 cursor-pointer hover:text-pink-500" />
              <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-pink-500" />
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-bold pop-title mb-6">
            GROOVY STYLE!
          </h2>
          <p className="text-2xl handwritten text-black mb-8 max-w-2xl mx-auto">
            Discover the most far-out fashion and accessories that'll make you the talk of the town!
          </p>
          <button className="bounce-btn text-white text-2xl px-8 py-4 hover:scale-105 transform transition-all">
            SHOP NOW! ✨
          </button>
        </section>

        {/* Zigzag Divider */}
        <div className="zigzag-divider mb-16"></div>

        {/* Featured Products */}
        <section>
          <h3 className="text-5xl handwritten text-center mb-12 text-black transform -rotate-2">
            ⭐ Today's GROOVY Finds! ⭐
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="comic-frame bg-white p-6 hover:animate-pulse"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  transform: `rotate(${(index % 2 === 0 ? 2 : -2)}deg)`
                }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Heart className="w-6 h-6 text-pink-500 cursor-pointer hover:fill-current" />
                  </div>
                </div>
                
                <div className="text-center">
                  <span className="inline-block bg-yellow-300 text-black px-3 py-1 rounded-full text-sm handwritten mb-2 border-2 border-black">
                    {product.category}
                  </span>
                  <h4 className="text-xl font-bold handwritten text-black mb-2">
                    {product.name}
                  </h4>
                  <p className="text-2xl font-bold text-pink-500 mb-4">
                    {product.price}
                  </p>
                  <button className="bounce-btn text-white px-6 py-2 text-lg w-full">
                    Add to Cart! 🛒
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-white/90 border-8 border-black rounded-3xl p-8 comic-frame">
            <h3 className="text-4xl handwritten text-black mb-4 transform rotate-1">
              Join the Revolution! 🌈
            </h3>
            <p className="text-xl handwritten text-gray-700 mb-6">
              Subscribe for exclusive deals and groovy updates!
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your far-out email..."
                className="flex-1 px-4 py-3 border-4 border-black rounded-2xl handwritten text-lg bg-yellow-100 focus:bg-white transition-colors"
              />
              <button className="bounce-btn text-white px-6 py-3 text-lg">
                Subscribe! 📧
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black text-white mt-16 py-12">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-3xl pop-title mb-6">POP SHOP!</h4>
          <div className="flex justify-center space-x-8 mb-6">
            <a href="#" className="handwritten text-xl hover:text-pink-400">Instagram</a>
            <a href="#" className="handwritten text-xl hover:text-pink-400">Facebook</a>
            <a href="#" className="handwritten text-xl hover:text-pink-400">Twitter</a>
            <a href="#" className="handwritten text-xl hover:text-pink-400">TikTok</a>
          </div>
          <p className="handwritten text-lg">
            © 2024 Pop Shop - Stay Groovy! ✌️
          </p>
        </div>
      </footer>

      {/* Floating Elements */}
      <div className="fixed top-20 left-10 text-6xl animate-bounce" style={{animationDelay: '1s'}}>
        ⭐
      </div>
      <div className="fixed top-40 right-10 text-5xl animate-bounce" style={{animationDelay: '2s'}}>
        💫
      </div>
      <div className="fixed bottom-20 left-20 text-4xl animate-bounce" style={{animationDelay: '3s'}}>
        🌈
      </div>
    </div>
  );
};

export default Index;