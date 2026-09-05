/**
 * Copyright (c) 2026 Ujjwal Kumar Bhowmick
 * Developer: Ujjwal Kumar Bhowmick
 * Email: ujjwalkumarbhowmick30@gmail.com
 * All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import { Key, X, Check, AlertCircle, ExternalLink, Sparkles, Loader2 } from 'lucide-react';
import { GeminiHRService, DEFAULT_GEMINI_MODEL } from '../services/geminiService';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfigSaved: () => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, onConfigSaved }) => {
  const [apiKey, setApiKey] = useState('');
  const [model, setModel] = useState(DEFAULT_GEMINI_MODEL);
  const [status, setStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      const current = GeminiHRService.getConfig();
      setApiKey(current.apiKey);
      setModel(current.model || DEFAULT_GEMINI_MODEL);
      setStatus('idle');
      setErrorMessage('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    GeminiHRService.setConfig({ apiKey, model });
    onConfigSaved();
    onClose();
  };

  const handleTestConnection = async () => {
    if (!apiKey.trim()) {
      setStatus('error');
      setErrorMessage('Please enter an API key first.');
      return;
    }

    setStatus('testing');
    setErrorMessage('');

    try {
      GeminiHRService.setConfig({ apiKey, model });
      const testResponse = await GeminiHRService.generateContent(
        'Respond with only the single word: CONNECTED'
      );
      if (testResponse) {
        setStatus('success');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Failed to connect to Google Gemini API.');
    }
  };

  const handleClear = () => {
    setApiKey('');
    GeminiHRService.setConfig({ apiKey: '', model });
    setStatus('idle');
    setErrorMessage('');
    onConfigSaved();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            <Key className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">Gemini API Configuration</h3>
            <p className="text-xs text-slate-400">
              Connect Google Gemini Vertex AI for live multi-agent generation.
            </p>
          </div>
        </div>

        {/* Informational Banner */}
        <div className="mb-5 p-3 rounded-xl bg-indigo-950/40 border border-indigo-800/50 text-xs text-indigo-200 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <strong>Zero-Configuration Ready:</strong> PulseHR OS includes high-fidelity pre-engineered enterprise datasets for offline demo presentation. Connecting your Gemini API key activates custom real-time analysis on arbitrary job requisitions and candidate resumes.
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Google Gemini API Key
            </label>
            <input
              type="password"
              placeholder="AIzaSy..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-mono"
            />
            <div className="flex justify-between items-center mt-1.5 text-[11px]">
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
              >
                Get API key from Google AI Studio <ExternalLink className="w-3 h-3" />
              </a>
              {apiKey && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-rose-400 hover:text-rose-300"
                >
                  Clear Key
                </button>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Gemini Model Architecture
            </label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:outline-none focus:border-indigo-500"
            >
              <option value="gemini-2.5-flash">Gemini 2.5 Flash (Ultra Fast & Responsive - Recommended)</option>
              <option value="gemini-1.5-pro">Gemini 1.5 Pro (Deep Complex Reasoning & Extended Context)</option>
              <option value="gemini-1.5-flash">Gemini 1.5 Flash (Standard High-Speed)</option>
            </select>
          </div>

          {/* Status Feedback */}
          {status === 'testing' && (
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/80 text-xs text-slate-300">
              <Loader2 className="w-4 h-4 text-indigo-400 animate-spin" />
              <span>Verifying API handshake with Google Gemini...</span>
            </div>
          )}
          {status === 'success' && (
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-300">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Connection successful! Live Gemini mode is active.</span>
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-rose-950/40 border border-rose-800/60 text-xs text-rose-300">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span className="truncate">{errorMessage}</span>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="mt-6 flex items-center justify-end gap-2.5 pt-4 border-t border-slate-800">
          <button
            type="button"
            onClick={handleTestConnection}
            disabled={status === 'testing'}
            className="px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          >
            Test Connection
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-4 py-2 rounded-xl text-xs font-medium bg-gradient-to-r from-indigo-600 to-cyan-600 text-white hover:brightness-110 shadow-lg shadow-indigo-500/20 transition-all"
          >
            Save & Apply
          </button>
        </div>
      </div>
    </div>
  );
};
