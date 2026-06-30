import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Blogger + React + Tailwind
        </h1>
        <p className="text-center text-gray-600 mb-4">
          مشروع يعمل بنجاح! 🎉
        </p>
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            onClick={() => setCount(count + 1)}
          >
            تم الضغط {count} مرة
          </button>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          عدّل <code className="bg-gray-100 px-2 py-1 rounded">src/App.tsx</code> لتخصيص التطبيق
        </p>
      </div>
    </div>
  );
}

export default App;
