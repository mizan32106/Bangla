
import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "./ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
  onSettingChange: (setting: string, value: any) => void;
  settings: {
    soundEnabled: boolean;
    vibrationEnabled: boolean;
    keyboardTheme: string;
    keySize: number;
    defaultLanguage: string;
    autoCapitalize: boolean;
  };
}

const Settings: React.FC<SettingsProps> = ({ 
  isOpen, 
  onClose, 
  onSettingChange, 
  settings 
}) => {
  // Store theme previews
  const themePreview = {
    default: "bg-gray-100 border border-gray-300",
    dark: "bg-gray-900 border border-gray-700 text-white",
    light: "bg-white border border-gray-200",
    colorful: "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[300px] sm:w-[450px]">
        <SheetHeader>
          <SheetTitle>Keyboard Settings</SheetTitle>
          <SheetDescription>
            Customize your typing experience
          </SheetDescription>
        </SheetHeader>

        <div className="py-6 space-y-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">General</h3>
            <div className="flex items-center justify-between">
              <Label htmlFor="sound-toggle">Key press sounds</Label>
              <Switch 
                id="sound-toggle" 
                checked={settings.soundEnabled}
                onCheckedChange={(checked) => onSettingChange('soundEnabled', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="vibration-toggle">Vibration feedback</Label>
              <Switch 
                id="vibration-toggle" 
                checked={settings.vibrationEnabled}
                onCheckedChange={(checked) => onSettingChange('vibrationEnabled', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-capitalize">Auto-capitalize</Label>
              <Switch 
                id="auto-capitalize" 
                checked={settings.autoCapitalize}
                onCheckedChange={(checked) => onSettingChange('autoCapitalize', checked)}
              />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium">Appearance</h3>
            <div className="space-y-2">
              <Label htmlFor="keyboard-theme">Keyboard theme</Label>
              <Select 
                value={settings.keyboardTheme}
                onValueChange={(value) => onSettingChange('keyboardTheme', value)}
              >
                <SelectTrigger id="keyboard-theme">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 mr-2 rounded ${themePreview.default}`}></div>
                      <span>Default</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="dark">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 mr-2 rounded ${themePreview.dark}`}></div>
                      <span>Dark</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="light">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 mr-2 rounded ${themePreview.light}`}></div>
                      <span>Light</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="colorful">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 mr-2 rounded ${themePreview.colorful}`}></div>
                      <span>Colorful</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="key-size">Key size</Label>
                <span className="text-sm text-gray-500">
                  {settings.keySize < 30 ? "Small" : settings.keySize < 70 ? "Normal" : "Large"}
                </span>
              </div>
              <Slider 
                id="key-size" 
                value={[settings.keySize]} 
                max={100} 
                step={10}
                onValueChange={(value) => onSettingChange('keySize', value[0])}
              />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium">Language</h3>
            <div className="space-y-2">
              <Label htmlFor="default-language">Default language</Label>
              <Select 
                value={settings.defaultLanguage}
                onValueChange={(value) => onSettingChange('defaultLanguage', value)}
              >
                <SelectTrigger id="default-language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="bengali">Bengali</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <SheetFooter>
          <Button onClick={onClose}>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Settings;
