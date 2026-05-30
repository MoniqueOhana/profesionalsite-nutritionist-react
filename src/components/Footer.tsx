function Footer() {
    return (
        <footer className="bg-[#BAE6A7] text-zinc-800 py-4 text-center border-t border-gray-300 py-10 px-16 mt-24">
  <p>
    © {new Date().getFullYear()} Najara Limeira. Todos os direitos reservados.
  </p>

  <p className="text-sm mt-2 text-zinc-600 max-w-6xl mx-auto">
    Desenvolvido por <a href="https://github.com/MoniqueOhana">Monique Ohana</a>
  </p>
</footer>
    )
}

export default Footer;