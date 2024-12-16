const HeroBG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 800"
      className="size-full text-muted-foreground opacity-50"
    >
      {Array.from(Array(720).keys()).map((dot, index, array) => {
        const angle = 0.2 * index;
        const scalar = 40 + index * (360 / array.length);
        const x = Math.round(Math.cos(angle) * scalar);
        const y = Math.round(Math.sin(angle) * scalar);

        return (
          <circle
            key={index}
            r={(3 * index) / array.length}
            cx={400 + x}
            cy={400 + y}
            opacity={1 - Math.sin(angle)}
          />
        );
      })}
    </svg>
  );
};

export default HeroBG;
