import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { TodoApp } from './pages/Todo';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto max-w-xl">
        <div className="rounded-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 mt-10 p-10 text-indigo-600">
          <TodoApp />
        </div>
    </div>
    </QueryClientProvider>
  );
}

export default App;
