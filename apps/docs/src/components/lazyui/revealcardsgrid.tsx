interface RevealCardsGridPropsTypes {
  cards: { title: string; subtitle: string; image: string; description: string; buttonText?: string }[];
  className?: string;
}

function RevealCardsGrid({ cards, className }: RevealCardsGridPropsTypes) {
  return (
    <div className="min-h-screen w-full bg-neutral-100 py-10 px-5">
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center ${className ?? ""}`}>
        {cards.map((card, i) => (
          <div key={i} className="relative group w-full max-w-xs min-h-[300px] rounded-2xl overflow-hidden bg-gray-900 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
            {/* Animated Gradient Layer */}
            <div className="absolute inset-0 z-0 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
              <div className="w-full h-full bg-[length:200%_200%] bg-gradient-to-l from-black via-white to-black opacity-40 animate-shimmer" />
            </div>

            {/* Title and Subtitle */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-95 text-center px-2">
              <span className="font-serif text-4xl sm:text-6xl font-bold bg-gradient-to-tr from-amber-500 to-slate-700 bg-clip-text text-transparent break-all text-wrap">
                {card.title}
              </span>
              <span className="font-serif text-4xl sm:text-3xl font-semibold bg-gradient-to-tr from-amber-500 to-slate-500 bg-clip-text text-transparent break-all text-wrap">
                {card.subtitle}
              </span>
            </div>

            {/* Hover Reveal */}
            <div className="absolute inset-0 bg-orange-500/80 flex flex-col items-center justify-start p-4 text-center opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-20 overflow-y-auto">
              <img src={card.image} alt="Revealed" className="w-full h-32 object-cover rounded-md shadow-md mb-3" />
              <p className="text-white font-medium text-sm sm:text-base mb-3 break-words">{card.description} ✨</p>
              {card.buttonText && (
                <button className="cursor-pointer px-4 py-2 bg-green-600 hover:bg-green-700 transition-colors text-white rounded-md text-sm font-semibold">{card.buttonText}</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { RevealCardsGrid };
