const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
      <div>
          <header className="bg-green-400 py-10 text-center text-xl font-bold text-white">
            <h1>This is Header</h1>
          </header>
          {children}
          <footer className="bg-cyan-400 py-10 text-center text-xl font-bold text-white">
            <p>This is Footer</p>
          </footer>
      </div>
    );
  };
  
  export default RootLayout;


//  http://localhost:3000
//  http://localhost:3000/about 