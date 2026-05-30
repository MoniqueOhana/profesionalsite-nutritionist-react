import nutriImagem from '../assets/nutricionista.png'

function Home() {
return (
    <section className="flex-1 w-full flex justify-center bg-[#fdfaf6]">

    <div className="w-full max-w-6xl px-16 py-20 flex items-center gap-20">

        {/* TEXTO */}
        <div className="flex-1 max-w-2xl">

        <span className="text-orange-500 font-semibold uppercase tracking-[3px]">
            • Equilíbrio • Evolução • Praticidade
        </span>

        <h1 className="font-['Cormorant_Garamond'] text-6xl text-gray-800 leading-tight mt-6">
            Performance, saúde e resultados reais sem extremismos
        </h1>

        <p className="text-gray-600 text-xl mt-8 mb-24 leading-relaxed ">
            Consultas personalizadas para quem busca emagrecimento,
            ganho de massa muscular e uma relação mais leve com a alimentação.
        </p>

        <div className="h-[25px]">

        </div>

          {/* BOTÕES */}
<div className="mt-[70px] flex items-center gap-12">

  <button className="min-w-[240px] h-[60px] border-2 border-orange-500 text-orange-500 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer">
    Agendar consulta
  </button>

  <button className="min-w-[240px] h-[60px] border-2 border-orange-500 text-orange-500 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer">
    Consultar serviços
  </button>

</div>


        </div>


        {/* IMAGEM */}
        <div className="flex-1 flex justify-end">

        <div className="w-[420px] h-[520px] rounded-[40px] overflow-hidden shadow-xl">

<img
    src={nutriImagem}
    alt="Nutricionista"
    className="w-full h-full object-cover"
/>

</div>
        </div>
    </div>

    </section>
)
}

export default Home