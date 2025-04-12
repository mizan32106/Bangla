
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Keyboard, Languages, Moon, Sun, ShieldCheck } from 'lucide-react';
import KeyboardContainer from '@/components/KeyboardContainer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeTab, setActiveTab] = useState("demo");

  const toggleKeyboard = () => {
    setShowKeyboard(!showKeyboard);
  };

  const openSettingsTab = () => {
    setActiveTab("settings");
  };

  return (
    <div className="min-h-screen p-4 md:p-6 bg-gradient-to-b from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 to-teal-600 bg-clip-text text-transparent">
              Bangla Scribe Flow
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              A smart multilingual keyboard for seamless typing
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button 
              variant="outline" 
              size="icon"
              onClick={openSettingsTab}
            >
              <Settings size={20} />
            </Button>
          </div>
        </header>

        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="demo" onClick={() => setActiveTab("demo")}>Demo</TabsTrigger>
            <TabsTrigger value="features" onClick={() => setActiveTab("features")}>Features</TabsTrigger>
            <TabsTrigger value="settings" onClick={() => setActiveTab("settings")}>Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="demo" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Keyboard Demo</CardTitle>
                <CardDescription>
                  Experience the Bangla Scribe Flow keyboard in action
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="relative">
                    <textarea
                      className="w-full min-h-[150px] p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-white dark:bg-gray-800"
                      placeholder="Click the keyboard button below to start typing..."
                      readOnly
                      onClick={toggleKeyboard}
                    />
                    <Button
                      className="absolute bottom-4 right-4"
                      variant="outline"
                      size="sm"
                      onClick={toggleKeyboard}
                    >
                      <Keyboard className="mr-2 h-4 w-4" />
                      {showKeyboard ? "Hide Keyboard" : "Show Keyboard"}
                    </Button>
                  </div>
                  
                  <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                    {showKeyboard ? "Click anywhere outside to dismiss the keyboard" : "Tap the text area or button to show the keyboard"}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="features" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Languages className="mr-2 h-5 w-5 text-blue-600" />
                    Multi-language Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Seamlessly switch between Bengali and English with just a tap. Phonetic typing for intuitive Bengali input.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sun className="mr-2 h-5 w-5 text-amber-500" />
                    <Moon className="mr-2 h-5 w-5 text-indigo-400" />
                    Theme Customization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Choose between light and dark themes to match your style and reduce eye strain in different lighting conditions.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Keyboard className="mr-2 h-5 w-5 text-teal-600" />
                    Gesture Typing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Swipe to type for faster input. Our intelligent algorithm predicts words as you glide across letters.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShieldCheck className="mr-2 h-5 w-5 text-green-600" />
                    Privacy Focused
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Your data stays on your device. Core features work offline, so you can type securely anytime, anywhere.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Keyboard Settings</CardTitle>
                <CardDescription>Customize your typing experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">General</h3>
                    <div className="flex items-center justify-between">
                      <span>Default keyboard language</span>
                      <select className="border rounded-md px-3 py-2 bg-white dark:bg-gray-800">
                        <option>English</option>
                        <option>Bengali</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Auto-capitalize</span>
                      <Button variant="outline" size="sm">Enabled</Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Theme</h3>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" className="h-20 w-full" data-theme="light">Light</Button>
                      <Button variant="outline" className="h-20 w-full bg-gray-800 text-white border-gray-700" data-theme="dark">Dark</Button>
                      <Button variant="outline" className="h-20 w-full bg-gradient-to-br from-blue-200 to-teal-200" data-theme="gradient">Gradient</Button>
                    </div>
                  </div>

                  <div className="pt-6 flex justify-end">
                    <Button>Save Settings</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {showKeyboard && (
          <>
            <div 
              className="fixed inset-0 bg-black/20 z-40"
              onClick={toggleKeyboard}
            ></div>
            <div className="fixed bottom-0 left-0 right-0 z-50">
              <KeyboardContainer onClose={toggleKeyboard} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
