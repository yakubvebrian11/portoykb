const Footer = () => {
  return (
    <footer className="mt-24 w-full border-t border-zinc-800/60 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 
                      py-6 sm:py-7 lg:py-8 
                      flex flex-col items-center justify-center">
        
        <p className="text-zinc-500 
                      text-xs sm:text-sm lg:text-[15px] 
                      text-center tracking-wide">
          © {new Date().getFullYear()} Yakub Vebrian
        </p>

      </div>
    </footer>
  );
};

export default Footer;