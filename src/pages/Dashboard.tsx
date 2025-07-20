
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Lock, User, Plus, Save } from 'lucide-react';

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    gender: '',
    price: '',
    description: '',
    image: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === 'admin') {
      setIsLoggedIn(true);
      toast.success('Login successful! Welcome to the admin dashboard.');
    } else {
      toast.error('Invalid credentials. Please try again.');
    }
  };

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!productData.name || !productData.category || !productData.gender || !productData.price) {
      toast.error('Please fill in all required fields.');
      return;
    }

    // Simulate product save
    console.log('New product submitted:', productData);
    toast.success('Product added successfully!');
    
    // Reset form
    setProductData({
      name: '',
      category: '',
      gender: '',
      price: '',
      description: '',
      image: ''
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        
        <div className="max-w-md mx-auto px-4 py-16">
          <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-purple-500/20">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-royal rounded-full flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gradient">Admin Login</CardTitle>
              <p className="text-gray-400">Enter your credentials to access the dashboard</p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="username" className="text-white">Username</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter username"
                      value={loginData.username}
                      onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                      className="pl-10 bg-gray-900/50 border-purple-500/20 text-white"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter password"
                      value={loginData.password}
                      onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                      className="pl-10 bg-gray-900/50 border-purple-500/20 text-white"
                      required
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-royal hover:opacity-90 text-white py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Login to Dashboard
                </Button>
              </form>
              
              <div className="mt-6 text-center text-sm text-gray-400">
                <p>Demo credentials:</p>
                <p>Username: <span className="text-purple-400">admin</span></p>
                <p>Password: <span className="text-purple-400">admin</span></p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            <span className="text-gradient">Admin Dashboard</span>
          </h1>
          <Button
            onClick={() => setIsLoggedIn(false)}
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500/20"
          >
            Logout
          </Button>
        </div>

        <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center">
              <Plus className="mr-2 h-6 w-6" />
              Add New Product
            </CardTitle>
            <p className="text-gray-400">Fill in the details to add a new product to the catalog</p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleProductSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="productName" className="text-white">Product Name *</Label>
                  <Input
                    id="productName"
                    type="text"
                    placeholder="Enter product name"
                    value={productData.name}
                    onChange={(e) => setProductData(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-gray-900/50 border-purple-500/20 text-white"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="category" className="text-white">Category *</Label>
                  <Select
                    value={productData.category}
                    onValueChange={(value) => setProductData(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger className="bg-gray-900/50 border-purple-500/20 text-white">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-purple-500/20">
                      <SelectItem value="Sunglasses">Sunglasses</SelectItem>
                      <SelectItem value="Eyeglasses">Eyeglasses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-white">Target Audience *</Label>
                  <div className="flex space-x-4 mt-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Men"
                        checked={productData.gender === 'Men'}
                        onChange={(e) => setProductData(prev => ({ ...prev, gender: e.target.value }))}
                        className="mr-2"
                      />
                      <span className="text-white">Men</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Women"
                        checked={productData.gender === 'Women'}
                        onChange={(e) => setProductData(prev => ({ ...prev, gender: e.target.value }))}
                        className="mr-2"
                      />
                      <span className="text-white">Women</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="price" className="text-white">Price ($) *</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="0.00"
                    value={productData.price}
                    onChange={(e) => setProductData(prev => ({ ...prev, price: e.target.value }))}
                    className="bg-gray-900/50 border-purple-500/20 text-white"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="text-white">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter product description..."
                  value={productData.description}
                  onChange={(e) => setProductData(prev => ({ ...prev, description: e.target.value }))}
                  className="bg-gray-900/50 border-purple-500/20 text-white min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="image" className="text-white">Image URL</Label>
                <Input
                  id="image"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={productData.image}
                  onChange={(e) => setProductData(prev => ({ ...prev, image: e.target.value }))}
                  className="bg-gray-900/50 border-purple-500/20 text-white"
                />
              </div>

              {productData.image && (
                <div>
                  <Label className="text-white">Image Preview</Label>
                  <div className="mt-2">
                    <img
                      src={productData.image}
                      alt="Product preview"
                      className="w-32 h-24 object-cover rounded-lg border border-purple-500/20"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-royal hover:opacity-90 text-white py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Save className="mr-2 h-5 w-5" />
                Add Product
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
