import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="text-center space-y-6 p-8">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg">
          <Sparkles className="w-6 h-6 text-blue-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Hello, World!
          </h1>
          <Sparkles className="w-6 h-6 text-blue-500" />
        </div>
        <p className="text-slate-600 text-lg max-w-md mx-auto">
          Welcome to your Next.js application. Start building something amazing!
        </p>
      </div>
    </main>
  );
}