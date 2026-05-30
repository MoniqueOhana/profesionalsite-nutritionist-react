import nutriImagem from '../assets/nutricionista.png'

function AboutMe() {
  return (
    <section className="w-full flex justify-center bg-[#fdfaf6]  py-40">

      <div className="w-full max-w-6xl px-16 flex flex-col gap-16">

        {/* TÍTULO DA SEÇÃO (EM CIMA, SEPARADO) */}
        <div style={{fontSize: '28px', backgroundColor: '#fdfaf6', textAlign: 'center', padding: 20, color: '#F2741D'}}>
  Sobre Mim
</div>

        {/* CONTEÚDO ABAIXO */}
        <div className="flex items-start justify-center gap-24">

          {/* IMAGEM */}
          <div className="flex-1 flex justify-center">
            <div className="w-[420px] h-[520px] rounded-[40px] overflow-hidden shadow-xl">
              <img
                src={nutriImagem}
                alt="Nutricionista"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXTO */}
          <div className="flex-1 flex flex-col space-y-8">

            <h2 className="font-['Suranna'] text-center text-5xl text-gray-800 leading-tight">
A profissional por trás dos resultados            </h2>

            <p className="text-gray-600 text-lg text-justify leading-relaxed">
              Sou Najara Limeira, nutricionista e educadora física formada pela UNINOVE-SP, com pós-graduação em Nutrição Esportiva. Há mais de 10 anos ajudo pessoas a alcançarem seus objetivos de forma saudável e sustentável, seja no emagrecimento, ganho de massa muscular, reeducação alimentar ou melhora da qualidade de vida.
            </p>

            <p className="text-gray-600 text-lg text-justify leading-relaxed">
              Acredito que um bom planejamento alimentar deve se adaptar à rotina de cada pessoa. Por isso, meus atendimentos são personalizados, considerando hábitos, preferências, objetivos e os desafios do dia a dia. Meu foco é desenvolver estratégias práticas e realistas, que possam ser mantidas a longo prazo e façam sentido fora do consultório.
              <div>
                <br />

              </div>
              
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default AboutMe