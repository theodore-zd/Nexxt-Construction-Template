export const Footer = () => {
  return <footer className="py-4 h-32">
    <div className="container mx-auto lg:flex py-12 px-10">
        <div>
          <p className='text-6xl font-bold text-theme-accent'>FOOTER</p>
        </div>
        <div className='ml-auto mt-1 pl-3'>
          <p className='font-bold'>Template by Theodore Zurek-Dunne</p>
          <a
            className="hover:text-theme-accent underline"
            href="https://github.com/TheSodaPopPanda/Nexxt-Construction-Template"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/TheSodaPopPanda/Nexxt-Construction-Template
          </a>
        </div>
    </div>
</footer>
}
